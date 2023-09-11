import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: "p1", title: 'Apple' },
    { id: "p2", title: 'Banana' },
    { id: "p3", title: 'Watermelon' }
];

function ProductsPage() {
    return (
        <React.Fragment>
            <h1>Products</h1>
            <ul>
                {PRODUCTS.map(item => 
                    <li key={item.id}>
                        <Link to={`/products/${item.id}`}>{item.title}</Link>
                    </li>
                )}
            </ul>
        </React.Fragment>
    );
}

export default ProductsPage;