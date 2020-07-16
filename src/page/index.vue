<template>
    <el-container>
        <el-aside :width="leftWidth">
            <div class="logo">
                <img src="../assets/logo.png">
            </div>
            <el-scrollbar class="left-scrollbar">
                <el-menu :default-openeds="['1', '2', '3']"
                         background-color="#191a23"
                         text-color="#fff"
                         active-text-color="#fff"
                         :collapse="isCollapse"
                         class="el-menu-vertical-demo"
                >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">模板案例</span>
                        </template>
                        <el-menu-item index="1-1"><router-link to="/list">列表</router-link></el-menu-item>
                        <el-menu-item index="1-2"><router-link to="/form">表单</router-link></el-menu-item>
                        <el-menu-item index="1-3"><router-link to="/tree">树形</router-link></el-menu-item>
                        <el-menu-item index="1-4"><router-link to="/login">登录</router-link></el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">导航一</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">分组一</span>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <span slot="title">选项4</span>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-scrollbar>
        </el-aside>

        <el-container class="right-container" v-bind:class="{ collapse: isCollapse}" :style="rightMargin">
            <el-header>
                <ul class="left-nav">
                    <li class="nav-item" @click="collapse">
                        <i :class="fold"></i>
                    </li>
                    <li class="nav-item" @click="reload">
                        <i class="el-icon-refresh"></i>
                    </li>
                </ul>
                <ul class="right-nav">
                    <li class="nav-item">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <el-avatar size="medium" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                <span class="login-username">admin</span>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>个人中心</el-dropdown-item>
                                <el-dropdown-item>设置</el-dropdown-item>
                                <el-dropdown-item divided>退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                </ul>
            </el-header>
            <el-main>
                <el-card class="box-card">
                    <transition name="component-fade" mode="out-in">
                        <router-view v-if="isRouterAlive"/>
                    </transition>
                </el-card>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                leftWidth:'200px',
                rightMargin:{'margin-left':'200px'},
                isCollapse:false,
                isRouterAlive:true,
                fold:'el-icon-s-fold',
            }
        },
        methods:{
            collapse() {
                if(this.isCollapse){
                    this.isCollapse = false;
                    this.rightMargin.marginLeft = '200px';
                    this.fold = 'el-icon-s-fold'
                }else{
                    this.isCollapse = true;
                    this.leftWidth  = '';
                    this.rightMargin.marginLeft = '60px';
                    this.fold = 'el-icon-s-unfold'
                }

            },
            reload(){
                this.isRouterAlive = false
                this.$nextTick(() => (this.isRouterAlive = true))
            }
        }
    }
</script>

<style scoped>
    .el-header{
        color: #333;
        line-height: 60px;
        position: fixed;
        z-index: 9999;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
        right: 0;
        left: 200px;
    }
    .el-aside {
        background-color: #191a23;
        color: #333;
        text-align: left;
        line-height: 200px;
        height: 100vh;
        position: fixed;
        box-shadow: 2px 0 6px rgba(0,21,41,.35);
        z-index: 99999;
        overflow: hidden;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
        border-right:0px;
    }
    .el-aside .is-active{
        background: #101117 !important;
    }
    .el-aside .el-scrollbar__bar.is-vertical>div{
        opacity: 0;
    }
    .el-scrollbar {
        height: 100%;
    }
    .el-scrollbar__wrap {
        width: 126%;
        height: 100%;
    }
    .el-scrollbar__view>.el-menu{
        margin-top: 60px;
    }
    .el-menu-item a{
        text-decoration:none;
        color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        padding-left: 45px;
    }
    .el-main {
        background-color: #f5f7f9;
        color: #333;
        margin-top: 60px;
        padding: 6px;
    }
    .el-icon-s-fold{
        font-size: 18px;
    }
    .collapse .el-header{
        left: 60px;
    }
    .el-header .nav-item {
        margin: 0;
        list-style: none;
        cursor: pointer;
        padding: 0 12px;
        float: left;
    }
    .el-menu-vertical-demo.el-menu--collapse{
        width:auto;
    }
    .el-menu{
        border-right: 0px;
    }
    .left-nav {
        width: 50%;
        float: left;
    }
    .left-nav .nav-item:first-child{
        padding-left: 0;
    }
    .right-nav {
        float: right;
    }
    .right-nav .el-dropdown-link{
        display: flex;
        align-items: center;
    }
    .login-username{
        margin-left: 12px;
    }
    .logo{
        text-align: center;
        width: 100%;
        height: 59px;
        line-height: 59px;
        position: absolute;
        z-index:999999;
        background: #191a23;
        border-bottom: 1px solid #101117;
    }
    .logo img{
        height: 48px;
        vertical-align: middle;
    }
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .2s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }
</style>