<template>
  <div>
    <button type="button" class="button" @click="ins">-</button><input
    type="text" class="inputContent" v-model="number"><button
    type="button" class="button" @click="add">+</button>
  </div>
</template>

<script>
  export default{
      data(){
          return{
              number:1,
          }
      },
      props:{
        optionList:{
            type:Object
        }
      },
      methods:{
          add(){
            if (this.number<this.optionList.max){
                this.number++;
            }
          },
          ins(){

              if (this.number>this.optionList.min){
                  this.number--;
              }
          }
      },
      watch:{
          number(){
              this.number=this.number.toString().replace(/[^0-9]/gmi,'');
              if (this.number.length>2){
                this.number =this.number.toString().split('').splice(-2);
              }
              if (this.number.length>1&&Number(this.number<10)){
                this.number =this.number.toString().split('').splice(1);
              }
              this.$emit('on-change',this.number)
          }
      },
      mounted(){
        this.$emit('on-change',this.number)
      }
  }
</script>

<style scoped>
  input,button,select,textarea{outline:none;}
  .button{
    border:1px solid #e3e3e3;
    background-color: white;
    width: 25px;
    height: 25px;
  }
  .inputContent{
    width: 5em;
  }
</style>
