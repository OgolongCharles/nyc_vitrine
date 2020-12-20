<template>
  <div>
    <PageBanner pageTitle="Blog" bannerCss="pageBannerTech"/>
    <Blog />
  </div>
</template>
<script>
  import PageBanner from "~/components/pages/PageBanner";
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
