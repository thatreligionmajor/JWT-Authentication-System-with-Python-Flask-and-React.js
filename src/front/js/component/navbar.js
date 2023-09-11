import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	// const { store, actions } = useContext(Context);
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
					</Link>
				</div>
			</div>
		</nav>
	);
};
