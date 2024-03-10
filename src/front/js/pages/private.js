import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const Private = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined ?
            navigate("/private")
            : 
            navigate("/login"));

    }, [store.token]);

    return (
        <div className="text-center mt-5">
            <h1>Welcome to the hall of mysteries!</h1>
            <h2>Only those with the proper key can see this area!</h2>
            <h3>Here lie the esoteric secrets.</h3>
        </div>
    )
}
export default Private;
