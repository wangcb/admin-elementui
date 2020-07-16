<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  border: 0;
}
html,body, #app{
  height: 100%;
}
.left-scrollbar>.el-scrollbar__wrap{
    overflow-x: hidden;
}
.left-scrollbar .el-scrollbar__bar{
  display: none;
}
ul, ol, li {
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-pagination{
  margin-top: 12px;
  text-align: left;
}
button a{
  text-decoration: none;
  color: #409EFF;
}
</style>
