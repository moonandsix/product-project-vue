<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>  流量分析</h2>
      <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    </div>
    <div class="sales-board-form">
      <el-row class="margin-10">
        <el-col :span="3" class="right-align"><span>购买数量：</span></el-col>
        <el-col :span="18"> <count-component :optionList="range" @on-change="hasChange('number',$event)"></count-component> </el-col>
      </el-row>
      <el-row class="margin-10">
        <el-col :span="3" class="right-align"><span>产品类型：</span></el-col>
          <el-col :span="18"> <select-component :optionList="buyTypes" @on-change="hasChange('type',$event)"></select-component> </el-col>
      </el-row>
      <el-row class="margin-10">
        <el-col :span="3" class="right-align"><span>有效时间：</span></el-col>
        <el-col :span="18"><choose-component :optionList="periodList" @on-change="hasChange('period',$event)"></choose-component></el-col>
      </el-row>
      <el-row class="margin-10">
        <el-col :span="3" class="right-align"><span>产品版本：</span></el-col>
          <el-col :span="18"> <choose-component :optionList="versionList" @on-change="hasChange('version',$event)"></choose-component> </el-col>
      </el-row>
      <el-row  class="margin-10">
        <el-col :span="3" class="right-align"><span>总价：</span></el-col>
        <el-col :span="18">{{productState.total}}</el-col>
      </el-row>
      <el-row class="margin-10">
        <el-col :span="6" :offset="3"><button style='background-color: #4fc08d;'><button @click="showPay">立即购买</button></button></el-col>
      </el-row>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

      <h3>用户行为指标</h3>
      <ul>
        <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时段的用户访问量情况等。</li>
      </ul>

      <h3>浏览网站方式</h3>
      <ul>
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率显示模式</li>
        <li>用户所使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布状况等</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {bus} from '../eventBus.js'
  import select from '../formComponent/select'
  import choose from '../formComponent/choose'
  import count from '../formComponent/count'
  export default {
    components: {
      selectComponent:select,
      chooseComponent:choose,
      countComponent:count,
    },
    data () {
      return {
        versionList: [
          {
            label: '客户版',
            value: 0
          },
          {
            label: '代理商版',
            value: 1
          },
          {
            label: '专家版',
            value: 2
          }
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
        buyTypes: [
          {
            label: '入门版',
            value: 0
          },
          {
            label: '中级版',
            value: 1
          },
          {
            label: '高级版',
            value: 2
          }
        ],
        productState:{
          type:'',
          number:'',
          period:'',
          version:'',
          total:''
        },
        range:{
          max:99,
          min:1
        }
      }
    },
    methods: {
      hasChange(type,$event){
          if (type ==='type'){
              this.productState.type=$event;
          }else if (type==='number'){
            this.productState.number=$event;
          }else if (type==='period'){
            this.productState.period=$event;
          }else if (type==='version'){
            this.productState.version=$event;
          }
          if (this.productState.type!==''&&this.productState.number!==''&&this.productState.version!==''&&this.productState.period!==''){
              this.$http.get('/api/calculateTotal',{
                  type:this.productState.type,
                  number:this.productState.number,
                  period:this.productState.period,
                  version:this.productState.version,
              }).then((response)=> {
                  this.productState.total=response.data.value.mount;
              }).catch((err)=> {
                  console.log(err);
              })
          }

      },
      showPay(){
          if (this.productState.total!==''){
            bus.$emit('showPay',this.productState)
          }
      }
    },
    mounted () {
    }
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
  .oneOption{
    display: inline;
  }
  .buy-dialog-title {
    font-size: 16px;
    font-weight: bold;
  }
  .buy-dialog-btn {
    margin-top: 20px;
  }
  .buy-dialog-table {
    width: 100%;
    margin-bottom: 20px;
  }
  .buy-dialog-table td,
  .buy-dialog-table th{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
  }
  .buy-dialog-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
  }
</style>
