<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>数据统计</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
    </div>
    <div class="sales-board-form">
      <el-row class="margin-10">
        <el-col :span="3" class="right-align"><span>产品类型：</span></el-col>
        <el-col :span="18"> <choose-component :optionList="colorList" @on-change="hasChange('color',$event)"></choose-component> </el-col>
      </el-row>
      <el-row class="margin-10">
        <el-col :span="3" class="right-align"><span>使用地区：</span></el-col>
        <el-col :span="18"> <select-component :optionList="districts" @on-change="hasChange('districts',$event)"></select-component> </el-col>
      </el-row>
      <el-row class="margin-10">
        <el-col :span="3" class="right-align"><span>有效时间：</span></el-col>
        <el-col :span="18"><choose-component :optionList="periodList" @on-change="hasChange('period',$event)"></choose-component></el-col>
      </el-row>
      <el-row  class="margin-10">
        <el-col :span="3" class="right-align"><span>总价：</span></el-col>
        <el-col :span="18">{{productState.total}}</el-col>
      </el-row>
      <el-row class="margin-10">
        <el-col :span="6" :offset="3"><button @click="showPay">立即购买</button></el-col>
      </el-row>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

      <table class="sales-board-table">
        <tbody>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>安全安保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>办公文教</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>彩票</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>车辆物流</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>成人用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>出版传媒</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>电脑硬件</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>电子电工</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>房地产建筑装修</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>分类平台</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>服装鞋帽</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>箱包饰品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>化工原料制品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>机械设备</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>家庭日用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>家用电器</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>教育培训</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>节能环保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>金融服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>礼品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>旅游住宿</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>美容化妆</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>母婴护理</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>农林牧渔</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>软件</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>商务服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>生活服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>食品保健品</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>手机数码</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>通讯服务设备</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>网络服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>医疗服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>游戏</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>运动休闲娱乐</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>招商加盟</label>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {bus} from '../eventBus.js'
  import choose from '../formComponent/choose'
  import select from '../formComponent/select'
  export default {
    components: {
      chooseComponent:choose,
      selectComponent:select,
    },
    data () {
      return {
        colorList: [
          {
            label: '红色版',
            value: 0
          },
          {
            label: '绿色版',
            value: 1
          },
          {
            label: '紫色版',
            value: 2
          }
        ],
        districts: [
          {
            label: '北京',
            value: 0
          },
          {
            label: '上海',
            value: 1
          },
          {
            label: '广州',
            value: 2
          },
          {
            label: '天津',
            value: 3
          },
          {
            label: '武汉',
            value: 4
          },
          {
            label: '重庆',
            value: 5
          },
        ],
        periodList: [
          {
            label: '半年',
            value: 0
          },
          {
            label: '一年',
            value: 1
          },
          {
            label: '三年',
            value: 2
          }
        ],
        productState:{
          color:'',
          districts:'',
          period:'',
          total:''
        },
      }
    },
    methods: {
      hasChange(type,$event){
        if (type ==='color'){
          this.productState.color=$event;
        }else if (type==='districts'){
          this.productState.districts=$event;
        }else if (type==='period'){
          this.productState.period=$event;
        };
        if (this.productState.color!==''&&this.productState.districts!==''&&this.productState.period!==''){
          this.$http.get('/api/calculateTotal',{
            color:this.productState.color,
            districts:this.productState.districts,
            period:this.productState.period,
          }).then((response)=> {
            this.productState.total=response.data.value.mount;
          }).catch((err)=> {
            console.log(err);
          })
        }

      },
      showPay(){
        if (this.productState.total!==''){
          console.log(this.productState)
          bus.$emit('showPay',this.productState)
        }
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sales-board-form{
    margin: 50px 20px;
  }
  .margin-10{
    margin: 10px;
  }
  .right-align{
    text-align: right;
  }
</style>
