<template>
  <div class="center">
    <div class="left1">
      <div class="left-top">
        <div class="left-top-title">全部产品</div>
        <div v-for="item in productList">
          <ul>
            <li class="itemTitle">{{item.title}}</li>
            <li v-for="one in item.ways" class="oneItem">
              {{one.name}}
              <span v-if="one.hot" class="hot">HOT</span>
            </li>
          </ul>
          <hr v-if="!item.last" style="height: 1px;background-color: #ddd;">
        </div>
      </div>
      <div class="left-bottom">
        <div class="left-top-title">最新消息</div>
        <ul>
          <li v-for="item in news" class="oneItem">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="right1">
      <!--<carousel-by-bootstrap></carousel-by-bootstrap>-->
      <carousel-by-self :slides="slides" :timeGap="timeGap"></carousel-by-self>
      <div style="margin: 20px">
        <div v-for="(item,index) in show" class="left-2" :class="'img-'+(1+index)">
          <div class="item1">
            <h3>{{item.title}}</h3>
            <p>{{item.describe}}</p>
            <button> <router-link :to="item.href">立即购买</router-link></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import carouselBySelf from '../components/carousel-by-self'
  export default{
    components:{
      carouselBySelf
    },
    data(){
          return{
            productList:'',
            news:'',
            show:'',
            slides:[],
            timeGap:6000
          }
      },
    created(){
      let self=this;
      this.$http.get('/api/show')
        .then(function (response) {
          self.show=response.data.value;
        });
      this.$http.get('/api/news')
        .then(function (response) {
          self.news=response.data.value;
        });
      this.$http.get('/api/productList')
        .then(function (response) {
          self.productList=response.data.value
        });
      this.$http.get('/api/slides')
        .then(function (response) {
          self.slides=response.data.value;
        });
    },
    methods:{
    }
  }
</script>

<style scoped>
  .left-2{
    float: left;
    width: 400px;
  }
  .right1{
    float: left;
    width: 900px;
  }

  li{
    list-style: none;
  }
  .center{
    margin: 0px auto;
    width: 1200px;
  }
  .left1{
    width: 270px;
    float: left;
  }
  .left-top-title{
    background-color: #4fc08d;
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
  .hot{
    background-color: red;
    color: white;
  }
  .oneItem{
    padding: 5px;
  }
  .itemTitle{
    font-size : 14px;
    font-weight : bold;
  }
  .left-bottom,.left-top-title{
    margin: 20px;
  }
  .img-1{
    background-repeat: no-repeat;
    background-image: url("../assets/images/1.png");
  }
  .img-2{
    background-image: url("../assets/images/2.png");
    background-repeat: no-repeat;

  }
  .img-3{
    background-image: url("../assets/images/3.png");
    background-repeat: no-repeat;

  }
  .img-4{
    background-image: url("../assets/images/4.png");
    background-repeat: no-repeat;
  }
  .item1{
    margin-left: 120px;
  }
</style>
