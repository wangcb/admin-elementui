import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import main from '@/page/main'
import list from '@/page/list'
import login from '@/page/login'
import tree from '@/page/tree'
import form from '@/page/form'
import treeAdd from '@/page/tree-add'

Vue.use(Router)

export default new Router({
routes: [
    {
        path: '/login',
        name: 'login',
        component:login
    },
    {
        path: '/',
        component: index,
        children:[
            { path: '', component: main },
            {
                path: 'list',
                name: 'list',
                component: list
            },
            {
                path: 'tree',
                name: 'tree',
                component:tree
            },
            {
                path: 'treeadd',
                name: 'treeadd',
                component:treeAdd
            },
            {
                path: 'form',
                name: 'form',
                component:form
            },
        ]
    },
  ]
})
