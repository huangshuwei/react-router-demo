import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom';

import {getRouteConfigByLayoutType} from '../../../router'
import LAYOUT_TYPES from '../layout-types'

import LeftMenu from './left-menu'
import TopBar from './top-bar'


function LayoutItem() {

    const routerConfig = getRouteConfigByLayoutType(LAYOUT_TYPES.MAIN)

    return (
        <React.Suspense fallback={<span>&nbsp;</span>}>
            <Switch>
                {
                    routerConfig.map(routeItem => {

                        const getRoute = (routeItem) => {

                            const Component = routeItem.component

                            if (Array.isArray(routeItem.children) && routeItem.children.length > 0) {

                                // 递归
                                return routeItem.children.map(item => getRoute(item))
                            } else {

                                return (

                                    <Route
                                        key={routeItem.path}
                                        exact
                                        path={routeItem.path}
                                        render={props => {

                                            return <Component/>
                                        }}
                                    />
                                )
                            }
                        }

                        return routeItem.component ? getRoute(routeItem) : routeItem.children.map(item => getRoute(item))
                    })
                }
            </Switch>
        </React.Suspense>
    )
}

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <TopBar/>
                <LeftMenu/>
                <LayoutItem/>
            </Fragment>
        )
    }
}

export default MainLayout