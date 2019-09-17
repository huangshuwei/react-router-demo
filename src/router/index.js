import routerConfig from './router.config'


// 根据类型获取配置列表
function getRouteConfigByLayoutType(layoutType) {

    return routerConfig.filter(x => x.layout === layoutType)
}

// 获取当前路由的 layout type
function getLayoutTypeByMatch(match) {

    let result = null

    const matchRoute = routerConfig.find(x => x.path === match.url)

    if (matchRoute) {

        result = matchRoute.layout
    } else {

        console.error(`无匹配的路由配置，当前match：${match.url}`)
    }

    return result
}

// 根据地址获取路由信息
function getRouteByPath(path) {

    return routerConfig.find(x => x.path === path)
}

export {
    getRouteConfigByLayoutType,
    getLayoutTypeByMatch,
    getRouteByPath
}