import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState();
	const navigate = useNavigate();

	// const handleSignup = () => {
	// 	actions.signup(email, password).then(() => {
	// 		navigate("/");

	function submitRequest() {
		actions.getUserAdded(email, password)
	}
	useEffect(() => {
		if (store.message != null && store.message != "") {
			setError(store.message)
		}
	}, [store.message])

	return (
		<div className="text-center mt-5">
			<h1 className="my-3">Welcome, fellow traveller. Begin your journey below:</h1>
            <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label" >Email:</label>
                <div className="col-sm-10">
                    <input
                        type="email"
                        className="controlled-input"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password:</label>
                <div className="col-sm-10">
                    <input
                        type="password"
                        className="controlled-input"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <button onClick={submitRequest}>Submit</button>
            {/* disabled={error != null} */}
            <div>
                {error != null && error}
                {error != null && <Link to="/login">Login</Link>}
            </div>
		</div>
	)
};

export default Signup;