import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";

import AdminPage from "./AdminsPage";
import ProductsPage from "./ProductsPage";

const Routes: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/products" component={ProductsPage} />
                <Route path="/admin" component={AdminPage} />
            </div>
        </Router>
    );
};

export default Routes;