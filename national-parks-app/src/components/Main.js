import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Home from "./Home"
import Park from "./Park"
import parksData from '../parks.json'

function Main() {

    const parks = [...parksData]

    return (
        <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route
            path="/park/:id"
            render={routerProps => <Park parks={parks} {...routerProps} />}
            />
            <Redirect to="/" />
        </Switch>
        </main>
    )
}

export default Main