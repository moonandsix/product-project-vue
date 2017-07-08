<template>
  <div>
    <button type="button" v-for="(item,index) in optionList" :class="{bgGreen:index==curIndex}" class="item" @click="selectItem(index)">{{item.label}}</button>
  </div>
</template>

<script>
  export default{
    data(){
        return{
            curIndex:-1
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
        this.curIndex = index;
        this.$emit('on-change',this.optionList[index].value)
      }
    }
  }
</script>

<style scoped>

  .item{
    margin-right: 15px;
    display: inline-block;
    border: 1px solid #e3e3e3;
    background-color: white;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .bgGreen {
    background-color: #4fc08d;
  }
</style>
