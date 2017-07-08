<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appHeader from './components/appHeader'
  import appFooter from './components/appFooter'
  export default {
      components:{
        appHeader,
        appFooter,
      }
  }
</script>
