<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.btn-default {
  font-size: 16px;
  font-weight: 500;
  height: 38px;
  padding: 0 30px;
  background-color: #4a4a4a;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  z-index: 1;
  line-height: normal;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
</style>
