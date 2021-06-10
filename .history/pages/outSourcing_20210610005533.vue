<template>
  <div>
    <dev />
  </div>
</template>
//    <img src="/images/service/out.jpg" alt="">
// 
<script>
  import PageBanner from "~/components/pages/PageBanner";
  import dev from "~/components/dev";


  export default {
    components: {
      PageBanner,
    dev
    },
    head(){
      return {
        title: "NYNE CORP | Services"
      }
    }
  }
</script>
