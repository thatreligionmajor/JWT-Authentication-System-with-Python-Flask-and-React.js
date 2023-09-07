import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(
				{
					"email": email,
					"password": password
				}
			)
		}
		fetch("https://redesigned-guacamole-v9765p45gx7hxrp-3001.app.github.dev/api/token", options)
		.then(response => {
			if(response.status===200) return response.json();
		})
		.then(data => console.log("Access token: ", data))
		.catch(error => console.log("There was an error: ", error))
	}

	return (
		<div className="container text-center mt-5">
			<input type="test" placeholder="email" onChange={e => setEmail(e.target.value)} value={email}/>
			<input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} value={password}/>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};