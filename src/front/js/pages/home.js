import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-5">
			<input type="test" placeholder="email" onChange={e => setEmail(e.target.value)} value={email}/>
			<input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} value={password}/>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};
