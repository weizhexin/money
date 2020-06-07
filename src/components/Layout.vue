<template>
   <div class = "lavout-wrapper">
      <div class="content" :class="classPrefix && `${classPrefix}-content` "> 
         <slot />
      </div>
       <Nav/>
   </div>
     
</template>

<script>
    export default {
        props:['classPrefix'],
        name:"Layout"
    }
</script>

<style lang="scss" scoped>
  .lavout-wrapper{
        display: flex;
       
        flex-direction: column;
        min-height:100vh;
    }
    .content{
        overflow: auto;
        flex-grow: 1;
    }
</style>