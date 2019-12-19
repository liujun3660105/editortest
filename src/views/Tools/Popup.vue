<template>
  <div class="popup-overlay-content">
    <ul>
      <li v-for="(item,index) in Object.keys(featureInfo)" :key="index">
        <span>{{item}}</span>
        <input type="text" v-model="featureInfo[item]"/>
        <span>{{featureInfo[item]}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featureInfo:{}
    };
  },
  props: {
    selectedFeatureInfo: {
      type: Object,
      required: true
    }
  },
  created(){
      let {geometry, ...featureAttr} = this.selectedFeatureInfo;
      this.featureInfo = featureAttr;

  }
};
</script>

<style scoped>
  .popup-overlay-content{
    overflow: auto;
    height:200px;
  }
  .popup-overlay-content::-webkit-scrollbar {/*滚动条整体样式*/
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .popup-overlay-content::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #535353;
  }
  .popup-overlay-content::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: #EDEDED;
  }
  .popup-overlay-content ul li{
    list-style: none;
  }
  .popup-overlay-content ul li:nth-of-type(even){
  background:rgba(223, 226, 224, 0.8);
  }
  .popup-overlay-content ul li span{
    display:inline-block;
    width:49%;
    padding-left:10px;
  }
</style>