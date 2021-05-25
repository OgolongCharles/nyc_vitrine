<template>
  <div>
   <404 />
  </div>
</template>
<script>
  import Page404 from "~/components/404";

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
