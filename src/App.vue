<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Spartan';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
  background-color: #f0f0f0;
  color: #6b6b6b;
  border: none;
  border-radius: 4px;
  z-index: 1;
  line-height: normal;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1px solid #cecece;
  border-radius: 100px;
  width: 100%;
  outline: none;
  &:hover {
    background-color: #cecece;
  }
}
.btn-subscribe {
  background-color: #FC4F4F;
  color: #f0f0f0;
  border: none;
  text-transform: uppercase;
  &:hover {
      background-color: rgb(214, 54, 54);
  }
}
.container {
    width: 60%;
    margin: 150px auto;
}
.background {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    position:fixed;
    padding:0;
    margin:0;
}
</style>
