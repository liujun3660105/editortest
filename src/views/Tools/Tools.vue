<template>
    <div class="tools">
        <ul class="tools-ul">
            <li><a @click='geometryMerge()'>图形合并<Icon type="ios-photos" size="25"/></a></li>
            <li><a @click='geometrySplit()'>图形切割<Icon type="md-analytics" size="25"/></a></li>
            <li><a @click='attrModify()'>属性修改<Icon type="ios-create" size="25"/></a></li>
        </ul>
        <Modal
        
        id = "feature-info" 
        v-model="modal1"
        title="要素信息"
        onText="保存"
        @on-ok="saveEdit"
        @on-cancel="cancel"
        >
            
              <!-- <component :is="currentView"></component> -->
              
                  <Popup v-if="modal1" :selectedFeatureInfo="selectedFeatureInfo"></Popup>
              
              
            

        </Modal>
    </div>
</template>

<script>
import Popup from './Popup'
    export default {
        data(){
            return {
                modal1:false,
                currentView:''

            }
        },
        computed:{
            selectedFeatureInfo(){
                return this.selectedFeatures.length>0? this.selectedFeatures[0].getProperties():{}
                // console.log(Object.getOwnPropertyNames(this.newSelectFeature));
                // console.log(Object.keys(this.newSelectFeature));
                // if(Object.keys(this.newSelectFeature).length===0){
                //     return {}
                // }
                // else{
                //     return this.newSelectFeature.getProperties()
                // }
                // this.selectedFeatures[0].getProperties()
            }

        },
        props:{
            selectedFeatures:{
                required:true,
                type:Array
            }
        },
        methods:{
            featureIsSelected(){
                if(this.selectedFeatures.length===0){
                    this.$Notice.warning({
                        title:'警告信息',
                        desc:'请选择要编辑的要素'
                    });
                    return false
                }
                return true

            },
            geometryMerge(){
                console.log(this.selectedFeatures);
                console.log('这是图形合并');
            },
            geometrySplit(){
                console.log('这是图形切割');
            },
            attrModify(){
                if(this.featureIsSelected){
                    if(this.selectedFeatures.length===1){
                                        this.modal1=true;
                this.currentView = "Popup"

                    }
                    else{
                    this.$Notice.warning({
                        title:'警告信息',
                        desc:'请选择一个要修改属性信息的要素'
                    });

                    }
                }

                
            },
            saveEdit(){

            },
            cancel(){

            }
        },
        components:{
            Popup
        }
    }
</script>

<style scoped>
  .tools{
    /* width:570px; */
    height:50px;
    background:rgba(0,0,0,0.5);
    border-radius:15px;
    position:absolute;
    top:10px;
    right:220px;
    z-index:5;


  }
  .tools-ul li{
    display:inline-block;
    float:left;
    width:80px;
    height:50px;
    list-style: none;
    text-align: center;

  }
.tools-ul li a{
    color:white;
    font-size:15px;
  }
  #feature-info{

  }

</style>