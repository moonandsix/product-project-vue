<template>
  <div @click.stop="toggleList"   style="width: 68px">
    <div class="showOption">
      <span>{{selectedOption}}<span class="triangle"></span></span>
    </div>
    <ul v-if="isShow" class="showList">
      <li v-for="(item,index) in optionList" @click.stop="selectItem(index)" class="item">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
  import {bus} from '../eventBus.js'
  export default{
    data(){
        return{
            selectedOption:this.optionList[0].label,
            curIndex:0,
            isShow:false,
        }
    },
    props:{
        optionList:{
            type:Array,
            default:['test']
        }
    },
    methods:{
      selectItem(index){
        this.selectedOption=this.optionList[index].label;
        this.curIndex=index;
        this.isShow=false;
        this.$emit('on-change',this.curIndex)
      },
      toggleList(){
        bus.$emit('closeSelect');
        this.isShow=true;
      },
    },
    mounted(){
      bus.$on('closeSelect',()=> {
        this.isShow=false;
      });
      this.$emit('on-change',this.curIndex)
    }
  }
</script>

<style scoped>
  .showOption{
    cursor: pointer;
    border:1px solid #e3e3e3;
  }
  .item{
    padding: 10px;
    cursor: pointer;
  }
  .item:hover{
    background-color: #b5b39e;
  }
  .showList{
    cursor: pointer;
    position: absolute;
    z-index: 10;
    border:1px solid #e3e3e3;
    border-radius:3px;
    background-color: white;
  }
  li{
    list-style: none;
  }
  .triangle{
    position: relative;
    top:12px;
    border-top:10px solid #adadad;
    border-left:10px solid transparent;
    border-right:10px solid transparent;
  }
</style>
