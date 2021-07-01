import Layout from '@shared/Layout/Layout'
import Home from '@views/Home/Home'
import Team from '@views/Team/Team'
import Ecosystem from '@views/Ecosystem/Ecosystem'
import Media from '@views/Media/Media'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/team">
                        <Team />
                    </Route>
                    <Route path="/ecosystem">
                        <Ecosystem />
                    </Route>
                    <Route path="/media">
                        <Media />
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
