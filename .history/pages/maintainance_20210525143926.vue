<template>
  <div>
   <404 />
  </div>
</template>
<script>
  import 404 from "~/components/pages/PageBanner";
  import Blog from "~/components/pages/Blog";
  export default {
    components: {
      Blog,
      PageBanner
    },
    head(){
      return {
        title: "NYNE CORP | Blog"
      }
    }
  }
</script>
