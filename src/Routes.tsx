import * as React from "react";
import { BrowserRouter as Router, RouteComponentProps, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import AdminPage from "./AdminsPage";
import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";
import {useState} from "react";

const RoutesWrap: React.SFC = () => {
    return (
        <Router>
            <Route component={Routes} />
        </Router>
    );
};

const Routes: React.FC<RouteComponentProps> = props => {
    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <div>
            <Header />
            <TransitionGroup>
                <CSSTransition key={props.location.key} timeout={500} classNames="animate">
                <Switch>
                    <Redirect exact={true} from="/" to="/products" />
                    <Route exact={true} path="/products" component={ProductsPage} />
                    <Route path="/products/:id" component={ProductPage} />
                    <Route path="/admin">{loggedIn ? <AdminPage /> : <Redirect to="/login"/>}</Route>
                    <Route path="/login" component={LoginPage} />
                    <Route component={NotFoundPage}/>
                </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default RoutesWrap;