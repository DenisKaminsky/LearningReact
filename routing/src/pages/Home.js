import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate("/products");
    }

    return <React.Fragment>
        <h1>Welocme to Home page!</h1>
        <p>
            Go to <Link to="/products">Products</Link>
        </p>
        <p>
            Go to <button onClick={navigateHandler}>Products</button> programmatically
        </p>
    </React.Fragment>
}

export default HomePage;