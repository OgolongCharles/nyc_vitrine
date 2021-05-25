<template>
  <div>
   <Page404 />
  </div>
</template>
<script>
  import Page404 from "~/components/Page404";

  export default {
    components: {
    404,
    },
    head(){
      return {
        title: "NYNE CORP | Blog"
      }
    }
  }
</script>
