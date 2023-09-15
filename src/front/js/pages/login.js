import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		actions.login(email, password)
		// .then(() => {
		// 	navigate("/");
		// })
	};

	// replace the .then()
	if (store.token && store.token !== "" && store.token !== undefined) {
        navigate("/private");
    }

	return (
	<>
		{(store.token && store.token !== "" && store.token !== undefined) ? 
		"You are logged in with token: " + store.token
		:
		<div className="container text-center mt-5">
			<input type="test" placeholder="email" onChange={e => setEmail(e.target.value)} value={email}/>
			<input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} value={password}/>
			<button onClick={handleLogin}>Login</button>
		</div>
		}
	</>
	);
};