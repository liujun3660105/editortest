<template>
  <div id="app">
    <Map></Map>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Map from './views/Map'
export default {
  name: 'app',
  components: {
    Map
  }
}
</script>

<style>
  html,body,#app{
    height:100%;
    width:100%;
    padding:0px;
    margin:0px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  /* .ivu-modal-content {
    background:rgba(0,0,0,0.5);
  }
  .ivu-modal-body{
    padding:0px;
  } */
</style>
