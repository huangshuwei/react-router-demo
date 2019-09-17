import React from 'react'
import {Route, Switch} from 'react-router-dom';

import {getRouteConfigByLayoutType} from '../../router/index'
import LAYOUT_TYPES from './layout-types'

class BlankLayout extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const routerConfig = getRouteConfigByLayoutType(LAYOUT_TYPES.BLANK)

        return (
            <React.Suspense fallback={<span>&nbsp;</span>}>
                <Switch>
                    {
                        routerConfig.map(routeItem => {

                            return <Route exact key={routeItem.path} path={routeItem.path}
                                          component={routeItem.component}/>
                        })
                    }
                </Switch>
            </React.Suspense>
        )
    }

}

export default BlankLayout