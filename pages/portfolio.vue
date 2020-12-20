<template>
  <div>
    <PageBanner pageTitle="Portfolio" bannerCss="pageBannerTech"/>
    <PortfolioLoadMore />
  </div>
</template>
<script>
  import PageBanner from "~/components/pages/PageBanner";
  import PortfolioLoadMore from "~/components/pages/PortfolioLoadMore";
  export default {
    components: {
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
