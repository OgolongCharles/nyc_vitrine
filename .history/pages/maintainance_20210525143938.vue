<template>
  <div>
   <404 />
  </div>
</template>
<script>
  import 404 from "~/components/404";

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
