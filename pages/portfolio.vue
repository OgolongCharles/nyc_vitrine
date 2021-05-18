<template>
  <div>
    <PageBanner pageTitle="Portfolio" bannerCss="pageBannerGallery"/>
    <!-- <PortfolioLoadMore /> -->
    <Gallery />
  </div>
</template>
<script>
   import Gallery from "~/components/pages/Gallery"
  import PageBanner from "~/components/pages/PageBanner";
  import PortfolioLoadMore from "~/components/pages/PortfolioLoadMore";
  export default {
    components: {
      Gallery,
      PageBanner,
      PortfolioLoadMore
    },
    head(){
      return {
        title: "NYNE CORP | Portfolio"
      }
    }
  }
</script>
