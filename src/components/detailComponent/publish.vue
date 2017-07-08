<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>广告发布xx</h2>
      <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
    </div>
    <div class="sales-board-form">
      <el-row class="margin-10">
        <el-col :span="3" class="right-align"><span>购买数量：</span></el-col>
        <el-col :span="18"> <count-component :optionList="range" @on-change="hasChange('number',$event)"></count-component> </el-col>
      </el-row>
      <el-row class="margin-10">
        <el-col :span="3" class="right-align"><span>行业：</span></el-col>
        <el-col :span="18"> <select-component :optionList="tradeList" @on-change="hasChange('trade',$event)"></select-component> </el-col>
      </el-row>
      <el-row class="margin-10">
        <el-col :span="3" class="right-align"><span>有效时间：</span></el-col>
        <el-col :span="18"><choose-component :optionList="periodList" @on-change="hasChange('period',$event)"></choose-component></el-col>
      </el-row>
      <el-row class="margin-10">
        <el-col :span="3" class="right-align"><span>产品版本：</span></el-col>
        <el-col :span="18"> <choose-component :optionList="levelList" @on-change="hasChange('level',$event)"></choose-component> </el-col>
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
      <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>

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
        tradeList: [
          {
            label: '出版业',
            value: 0
          },
          {
            label: '媒体',
            value: 1
          },
          {
            label: '金融',
            value: 2
          },
          {
            label: '互联网',
            value: 3
          },
          {
            label: '游戏',
            value: 4
          }
        ],
        levelList: [
          {
            label: '初级版',
            value: 0
          },
          {
            label: '中级版',
            value: 1
          },
          {
            label: '高级版',
            value: 2
          },
          {
            label: '专家版',
            value: 3
          }
        ],
        range:{
          max:99,
          min:1
        },
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
          trade:'',
          number:'',
          period:'',
          level:'',
          total:''
        },
      }
    },
    methods: {
      hasChange(type,$event){
        if (type ==='trade'){
          this.productState.trade=$event;
        }else if (type==='number'){
          this.productState.number=$event;
        }else if (type==='period'){
          this.productState.period=$event;
        }else if (type==='level'){
          this.productState.level=$event;
        };
        if (this.productState.trade!==''&&this.productState.number!==''&&this.productState.level!==''&&this.productState.period!==''){
          this.$http.get('/api/calculateTotal',{
            trade:this.productState.trade,
            number:this.productState.number,
            period:this.productState.period,
            level:this.productState.level,
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
