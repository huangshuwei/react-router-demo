import React from 'react'
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';


import MainLayout from './main-layout/index'
import BlankLayout from './blank-layout'

import {getLayoutTypeByMatch, getRouteByPath} from '../../router/index'
import LAYOUT_TYPES from './layout-types'


function RootRoute() {

    // 根路由
    const rootRoute = getRouteByPath('/')

    return (

        <Route exact path="/" render={() => {

            if (rootRoute.component) {

                return (
                    <React.Suspense fallback={<span>&nbsp;</span>}>
                        <rootRoute.component/>
                    </React.Suspense>
                )

            } else {

                return <Redirect to={rootRoute.redirect} push/>
            }
        }
        }
        />

    )
}

class PageLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <Router>
                <Switch>

                    {/*默认路由*/}
                    <Route exact path="/" component={RootRoute}/>

                    <Route path='/:matchUrl' render={props => {

                        const layoutType = getLayoutTypeByMatch(props.match)

                        if (LAYOUT_TYPES.MAIN === layoutType) {

                            return <MainLayout {...props} />
                        } else if (LAYOUT_TYPES.BLANK === layoutType) {

                            return (

                                <BlankLayout {...props} />
                            )
                        } else {
                            // 待处理
                            return null
                        }
                    }}/>
                </Switch>
            </Router>
        )
    }
}

export default PageLayout