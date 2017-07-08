<template>
  <div>
    <!--<app-header></app-header>-->
    <app-content></app-content>
    <!--<app-footer></app-footer>-->
  </div>
</template>

<script>
  import dialog from '../components/dialog'
  import appHeader from '../components/appHeader'
  import appContent from '../components/appContent'
  import appFooter from '../components/appFooter'
  export default{
    data(){
        return {

        }
    },
    components:{
      appContent,
    },
  }
</script>
