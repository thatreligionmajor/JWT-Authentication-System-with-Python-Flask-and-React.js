const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			syncSessionToken: () => {
				//obtain the value of the token in session storage
				const token = sessionStorage.getItem("token");
				//verify that the token has valid information using a conditional, then setStore
				if(token && token !== "" && token !== undefined) {
					setStore({token: token})
				}
			},
			login: async (email, password) => {
				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
						{
							email: email,
							password: password
						}
					)
				}
				try {
					const response = await fetch("https://musical-meme-764vx7qxr95cr5r9-3001.app.github.dev/api/token", options)
					if(response.status !==200) {
						alert("Error! Response code: ", response.status)
						return false;
					}
					const data = await response.json()
						// console.log("Access token: ", data);
						sessionStorage.setItem("token", data.access_token);
						setStore({ token: data.access_token })
						return true;
				}
				catch(error) {
					console.log("Login error. Please try again.")
				}
			},
			logout: () => {
				sessionStorage.removeItem("token");
				setStore({ token: null })
			},
			getUserAdded: async (email, password) => { //changes, need help
				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer YOUR_ACCESS_TOKEN"
					},
					body: JSON.stringify(
						{
							email: email,
							password: password,
						}
					)
				}
				try {
					const response = await fetch (process.env.BACKEND_URL + "signup", options)
					if (response.status !== 200) {
						alert("Error! Response Code: ", response.status)
						return false;
					}
					const data = await response.json()
					console.log("From the backend ", data)
					sessionStorage.setItem("token", data.access_token);
					setStore({token: data.access_token})
					return true;
				}
				catch (error) {
					console.log("Login error")
				}
			},
			getMessage: async () => {
				const store = getStore();

				const options = {
					headers: {
						"Authorization": "Bearer " + store.token
					},
				}

				try  {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello", options)
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
