import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Signup from "../pages/signup";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	function handleLogout() {
		actions.logout();
	}

	useEffect(() => {
		actions.getMessage();
	})

	return (
		<div className="container text-center mt-5">
			<h1>Welcome Home</h1>
			<h2>{store.message}</h2>
			<div>
				{!store.token ?
				//Create a link with a button to log in
				<>
					<Link to="/login">
						<button className="btn btn-success">Log In</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-primary">Sign Up</button>
					</Link>
				</>
				:
				//create a button to log out
				<button className="btn btn-warning" onClick={handleLogout}>Logout</button>
		}
			</div>
		</div>
	);
};
