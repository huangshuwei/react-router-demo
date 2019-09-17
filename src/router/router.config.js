import {lazy} from 'react'

import Other from '../views/other'
import Page404 from '../views/error/page404'

const routeConfig = [
    {
        path: '/',
        //component: lazy(() => import('../views/welcome/index')),
        redirect: "/home/home1/a"
    },
    {
        path: '/home',
        layout: "main",
        children: [
            {
                path: '/home/home1',
                children: [
                    {
                        path: '/home/home1/a',
                        component: lazy(() => import('../views/home/home1/a')),
                    },
                    {
                        path: '/home/home1/b',
                        component: lazy(() => import('../views/home/home1/b')),
                    }

                ]
            },
            {
                path: '/home/home2',
                component: lazy(() => import('../views/home/home2'))
            },
        ]
    },
    {
        path: '/order',
        layout: "main",
        children: [
            {
                path: '/order/order1',
                component: lazy(() => import('../views/order/order1'))
            },
            {
                path: '/order/order2',
                component: lazy(() => import('../views/order/order2'))
            },
        ]
    },
    {
        path: '/other',
        layout: "main",
        component: Other
    },
    {
        path: '/404',
        layout: "main",
        component: Page404
    },
    {
        path: '/login',
        layout: "blank", // 空白页
        component: lazy(() => import('../views/login/index'))
    }
]

export default routeConfig