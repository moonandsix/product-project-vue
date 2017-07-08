<template>
  <div class="carousel-container" @mouseenter="stopInterval" @mouseleave="startInterval">
    <a :href="slides[index].href">
      <transition name="transition-move">
        <img :src="slides[index].src" v-if="isShow">
      </transition>
    </a>
    <div class="indicator">
      <div class="item-title">
        <p>{{slides[index].title}}</p>
      </div>
      <ul class="item-list">
        <li class="indicator-item" @click="go(prevItem())"><</li>
        <li v-for="(item,curIndex) in slides.length" class="indicator-item" :class="{back:index===curIndex}" @click="go(curIndex)">{{curIndex+1}}</li>
        <li class="indicator-item" @click="go(nextItem())">></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
        return{
          index:0,
          intervalA:{name:''},
          isShow:true,
          curIndex:0
        }
    },
    mounted(){
      this.startInterval()
    },
    methods:{
      stopInterval(){
          clearInterval(this.intervalA.name);
//          console.log('定时器被清除')
      },
      startInterval(){
        let self=this;
        this.intervalA.name=setInterval(function () {
          self.go(self.nextItem())
        },this.timeGap);
//          console.log('定时器启动！！')
      },

      go(index){
        this.isShow=false;
        setTimeout(()=>{
          this.isShow=true;
          this.index=index;
        },10);
        this.$emit('currentIndex',this.index)
      },
      prevItem(){
        this.curIndex=this.index;
        if (this.curIndex===0){
          this.curIndex=this.slides.length-1
        }else{
          this.curIndex--;
        }
        return this.curIndex
      },
      nextItem(){
        this.curIndex=this.index;
        if (this.curIndex===this.slides.length-1){
          this.curIndex=0;
        }else{
          this.curIndex++;
        }
        return this.curIndex
      }
    },
    props:{
        slides:{
          type:Array,
          default:[],
        },
        timeGap:{
          type:Number,
          default:2000,
        },
      },
  }
</script>

<style scoped>

  .transition-move-enter{
    transform:translateX(-900px)
  }
  .transition-move-enter-active{
    transition:all 1s;
  }
  .transition-move-leave-active{
    transition:all 1s;
    transform: translateX(900px);
  }
  .back{
    background-color: #bd401c;
    border-radius: 50%;
    line-height: 20px;
  }
  .carousel-container{
    position: relative;
    overflow: hidden;
    white-space:nowrap;
  }
  .indicator{
    position: absolute;
    background-color: rgba(31, 33, 68, 0.5);
    bottom: 0;
    height: 50px;
    width: 100%;
    color: white;
  }
  .indicator-item{
    list-style: none;
    display: inline-block;
    margin: 0px 10px;
    cursor: pointer;
    width: 20px;
    text-align: center;
  }
  .item-title,.item-list{
    position: absolute;
  }
  .item-list{
    right: 50px;
    line-height: 50px;
  }
  .item-title{
    left: 50px;
    line-height: 50px;
  }

</style>
