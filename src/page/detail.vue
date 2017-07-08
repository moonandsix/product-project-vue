<template>
  <div style="margin: 0px auto;width: 1200px" @click="closeSelect">
    <div class="detail-left">
      <div style="text-align: center">
        <img :src="calculatePath" width="100" height="100">
      </div>
      <ul class="product-ul">
        <li v-for="(item,index) in productList" class="product-item" :class="{itemBg:calculateColor(item)}">
          <router-link :to="item.href">{{item.name}}</router-link>
        </li>
      </ul>
      <br>
    </div>
    <div class="detail-right">
      <router-view></router-view>
    </div>
    <pay-dialog :showFromFather="payIsShow" @close="hidePay">
      <div slot="dialog">
          <h3>您的购物清单</h3>
        <table class="table">
          <thead>
          <tr>
            <td v-for="(value,key) in selectedProduct" class="thead-item">{{nameMap[key]}}</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td v-for="(value,key) in selectedProduct" class="td-item">{{createData(selectedProduct,key)}}</td>
          </tr>
          </tbody>
        </table>
        <div>
          <button @click="purchase">确认购买</button>
        </div>
      </div>
    </pay-dialog>
  </div>
</template>

<script>
  import {bus} from '../components/eventBus.js'
  import dialog from '../components/dialog'
  export default {
    components:{
      payDialog:dialog
    },
    data(){
        return{
            productList:[
                {name:'数据统计',href:'/detail/statistics'},
                {name:'数据预测',href:'/detail/forecast'},
                {name:'流量分析',href:'/detail/analysis'},
                {name:'广告发布',href:'/detail/publish'},
            ],
            imgMap:{
                '/detail/statistics':require('../assets/images/detail1.png'),
                '/detail/forecast':require('../assets/images/detail2.png'),
                '/detail/analysis':require('../assets/images/detail3.png'),
                '/detail/publish':require('../assets/images/detail4.png'),
                '/detail':require('../assets/logo.png'),
            },
            payIsShow:false,
            selectedProduct:'',
            productMap:{
              type:['入门版','中级版','高级版'],
              period:['半年','一年','两年'],
              version:['客户版','代理商版','专家版'],
              media:['纸质报告','页面报告','邮件'],
              trade:['出版业','媒体','金融','互联网','游戏'],
              level:['初级','中级','高级','专家版'],
              color:['红色版','绿色版','紫色版'],
              districts:['北京','上海','广州','天津','武汉','重庆']
            },
            nameMap:{
              trade:'行业',
              type:'产品类型',
              number:'购买数量',
              period:'有效时间',
              version:'版本',
              media:'媒介',
              total:'总价',
              level:'等级',
              color:'颜色',
              districts:'使用地区'
            }
        }
    },
    computed:{
      calculatePath(){
        return this.imgMap[this.$route.path]
      },

    },
    methods:{
      calculateColor(item){
        if (item.href===this.$route.path){
          return true
        }
      },
      closeSelect(){
          bus.$emit('closeSelect')
      },
      hidePay(){
          this.payIsShow=false;
      },
      createData(selectedProduct,key){
        if (key == 'number'||key =='total'){
          return selectedProduct[key];
        }else{
          return this.productMap[key][selectedProduct[key]];
        }
      },
      purchase(){
          alert('购买成功')
      }
    },
    mounted(){
        bus.$on('showPay',(productState) =>{
          this.selectedProduct=productState;
          this.payIsShow=true;
        })
    }

  }
</script>

<style>
  .thead-item{
    border: 1px solid black;
    background-color: #4FC08D;
    width: 80px;
  }
  .td-item{
    border: 1px solid black;
  }
  .table{
    text-align: center;
    border: 1px solid black;
  }
  .detail-right{
    float: left;
    width: 980px;
    margin-left: 20px;
  }
  .itemBg{
    background-color: rgb(79, 192, 141);
  }
  .product-ul{
    width: 100%;
    padding: 0;
  }
  .detail-left{
    width: 200px;
    border: 1px solid #eaeaea;
    font-size: 20px;
    float: left;
  }
  a{
    color: #0f0f0f;
    text-decoration: none;
  }
  a:hover{
    text-decoration: none;
  }
  .product-item{
    list-style: none;
    margin: 10px;
    text-align: center;
  }
  .product-item:hover{
    font-weight: bolder;
  }
       body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button {margin:0;padding:0}  /* 初始化标签在所有浏览器中的margin、padding值 */
  fieldset,img {border:0 none}  /* 重置fieldset（表单分组）、图片的边框为0*/
  dl,ul,ol,menu,li {list-style:none}   /* 重置类表前导符号为onne,menu在HTML5中有效 */
  blockquote, q {quotes: none}   /* 重置嵌套引用的引号类型 */
  blockquote:before, blockquote:after,q:before, q:after {content:'';content:none}  /* 重置嵌套引用*/
  input,select,textarea,button {vertical-align:middle}  /* 重置表单控件垂直居中*/
  body {background:#fff}   /* 重置body 页面背景为白色 */
  a {color:#666;text-decoration:none}  /* 重置链接a标签 */
  a:active, a:hover {text-decoration:none}   /* 重置链接a标签的鼠标滑动效果 */
  address,caption,cite,code,dfn,em,var {font-style:normal;font-weight:normal}  /* 重置样式标签的样式 */
  caption {display:none;}    /* 重置表格标题为隐藏 */
  img{vertical-align:top}  /* 图片在当前行内的垂直位置 */

  /* 页面设置 */

  /* 取消a标签点击后的虚线框 */
  a {outline: none;}
  a:active {star:expression(this.onFocus=this.blur());}

  /* 设置页面文字等在拖动鼠标选中情况下的背景色与文字颜色 */
  /*
  ::selection {color: #fff;background-color: #4C6E78;}
  ::-moz-selection {color: #fff;background-color: #4C6E78;}
  */

  /*清除浮动*/
  .clear{clear: both;}

  /*清除浮动&#45;&#45;推荐使用*/
  .clearfix:before,.clearfix:after{content: '';display: table;}
  .clearfix:after{clear: both;}

</style>
