<template>
  <div>
      <div class="dialog-bg" @click="close" v-if="show"></div>
      <transition name="dialog-transition">
          <div class="dialog-content" v-if="show">
              <span class="dialog-close" @click="close">&times;</span>
              <slot name="dialog">暂时还没有插入内容</slot>
          </div>
      </transition>
  </div>
</template>

<script>
  export default{
    props:{
      showFromFather:Boolean,
    },
    computed:{
        show(){
          return this.showFromFather
        },
    },
    methods:{
        close(){
            this.$emit('close')
        }
    },
    updated(){
      if (this.showFromFather===true&&$('.dialog-content').length!==0){
        let width=$('.dialog-content').outerWidth();
        let height=$('.dialog-content').outerHeight();
        let left=(innerWidth-width)/2;
        let top=(innerHeight-height)/2;
        $('.dialog-content').css({
          left:left,
          top:top,
        })
      }
    }
  }

</script>

<style scoped>
 .dialog-transition-enter{
    transform: translateY(-700px);
 }
  .dialog-transition-enter-active{
    transition:all 1s;
  }
  .dialog-transition-leave-active{
    transition:all 1s;
    transform: translateY(-700px);
  }

  .dialog-bg{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(000,000,000,.5);
    z-index: 1;
  }
  .dialog-content{
    top:0;
    left: 0;
    position: fixed;
    z-index: 5;
    background-color: white;
    padding: 30px;
  }
  .dialog-close{
    position: absolute;
    z-index: 10;
    right: 3%;
    top: 3%;
    cursor: pointer;
   }
  .dialog-close:hover{
    color:cyan;
  }
</style>
