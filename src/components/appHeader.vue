<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid backColor">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" class="color" @click="displayShow('showLogin')" v-if="!isLogin">登录</a>
            <a v-if="isLogin" class="color omit" :title="lUsername">{{lUsername}}</a>
          </li>
          <li>
            <a href="#" class="color" @click="displayShow('showReg')" v-if="!isLogin">注册</a>
            <a href="#" v-if="isLogin" class="color" @click="logout">退出登录</a>
          </li>
          <li><a href="#" class="color" @click="displayShow('showAbout')">关于</a></li>
        </ul>
        <div class="navbar-header">
          <a class="navbar-brand"><router-link to="/"><img src="../assets/logo.png" height="30px"></router-link></a>
        </div>
      </div>
      <my-dialog :showFromFather="showLogin" @close="hide('showLogin')">
        <div slot="dialog">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" style="margin: 50px">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
            <el-form-item label="密码" prop="psw">
              <el-input v-model="ruleForm.psw" placeholder="请输入密码"></el-input>
            </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
          </el-form>
        </div>
      </my-dialog>
      <my-dialog :showFromFather="showReg" @close="hide('showReg')">
        <div slot="dialog">
          <div style="width: 1000px">
            <el-row :gutter="20" class="margin">
              <el-col :span="4" class="text-right"><span>账号：</span></el-col>
              <el-col :span="9"><input type="text" placeholder="请输入账号" v-model="rUsername"></el-col>
              <el-col :span="9">
                <span v-if="!validUsername" style="color:darkred">请输入10-16位，且包含大小写英文字母和数字的字符串</span>
                <span v-else style="color:darkgreen">格式正确！</span>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="margin">
              <el-col :span="4" class="text-right"><span>密码：</span></el-col>
              <el-col :span="9"><input type="password" placeholder="请输入密码" v-model="rPsw"></el-col>
              <el-col :span="9">
                <span v-if="!validPassword" style="color:darkred">请输入8-15位，且包含大小写英文字母和数字的密码</span>
                <span v-else style="color:darkgreen">格式正确！</span>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="margin">
              <el-col :span="4" class="text-right"><span>再一次输入密码：</span></el-col>
              <el-col :span="9"><input type="password" placeholder="请再一次输入密码"  v-model="rPsw2"></el-col>
              <el-col :span="9">
                <span v-if="!validPassword2" style="color:darkred">请再一次输入密码</span>
                <span v-else style="color:darkgreen">输入正确！</span>
              </el-col>
            </el-row>
          </div>
          <div style="text-align: center">
            <el-button type="success" style="margin: 0px 30px" @click="register">注册</el-button>
            <el-button type="warning" style="margin: 0px 30px" @click="resetData">重置</el-button>
          </div>
        </div>
      </my-dialog>
      <my-dialog :showFromFather="showAbout" @close="hide('showAbout')">
        <div slot="dialog">
            <h2>以梦为马</h2>
            <h2>越骑越傻</h2>
        </div>
      </my-dialog>
    </nav>

  </div>
</template>
<script>
  import dialog from '../components/dialog'
  export default{
      data(){
          return{
            showLogin:false,
            showReg:false,
            showAbout:false,
            username:'',
            password:'',
            lUsername:'',
            ruleForm: {
              name: '',
              psw: '',
            },
            rules: {
              name: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 10, max: 16, message: '长度在 10 到 16 个字符', trigger: 'blur' }
              ],
              psw: [
                { required: true, message: '请输入密码', trigger: 'change' },
                { min: 8, max: 15, message: '长度在 8 到 15 个字符', trigger: 'blur' }
              ],
            },
            isLogin:false,
            rUsername:'',
            rPsw:'',
            rPsw2:'',
          }
      },
      components:{
          myDialog:dialog
      },
      methods:{
        displayShow(attr){
          this[attr]=true
        },
        hide(attr){
          if(attr ==='showReg'){
              this.resetData()
          }else if(attr ==='showLogin'){
            this.resetData()
          }
          this[attr]=false
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.username=this.ruleForm.name;
              this.password=this.ruleForm.psw;
              this.isLogin=true;
              this.lUsername=this.username;
              this.hide('showLogin');
            }
          });
          this.$http.get('/api/username').then((response)=>{
              let username=response.data.value.username;
              let password=response.data.value.password;
            if (username===this.ruleForm.name&&password===this.ruleForm.psw){
              this.isLogin=true;
            }else{
                alert('账户密码错误')
                this.isLogin=false;
            }
          }).catch(function (err) {
                console.log('登录失败'+err)
          })
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        logout(){
            this.isLogin=false;
            this.lUsername='';
        },
        resetData(){
            this.rUsername='';
            this.rPsw='';
            this.rPsw2='';
            this.username='';
            this.password='';
        },
        register(){
            if (this.validUsername===true&&this.validPassword2===true){
                this.$http.post('/api/username',{
                    value:{
                      username:this.rUsername,
                      password:this.rPsw
                    }
                }).then((response) =>{
                  console.log(response);
                  this.hide('showReg');
                }).catch(function (err) {
                  console.log('注册失败'+err)
                })
            }
        }
      },
      computed:{
        validUsername(){
          let pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{10,16}$/;
          let result=pattern.test(this.rUsername);
          return result
        },
        validPassword(){
          let pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{8,15}$/;
          let result=pattern.test(this.rPsw);
          return result
        },
        validPassword2(){
            if (this.validPassword===true&&this.rPsw!==''&&this.rPsw2!==''){
              let result=this.rPsw===this.rPsw2
              console.log(result)
              return result;
            }
        }
      }
  }
</script>
<style scoped>
  .omit{
    width:8em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
  .text-right{
    text-align: right;
  }
  .margin{
    margin: 20px;
  }
  .backColor{
    background-color: rgb(153, 253, 150);
  }
  a:hover{
    color:yellow;
  }
</style>
