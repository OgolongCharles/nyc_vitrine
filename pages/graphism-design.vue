<template>
  <div>
    <PageBanner pageTitle="Graphisme & Design" bannerCss="pageBannerGraphisme"/>
    <GraphDesignServiceHeader />
   <!--  <Services />
    <WhatWeDoTwo />
    <Funfact />
    <Clients /> -->
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
   import GraphDesignServiceHeader from "~/components/services/graphisme-design/GraphDesignServiceHeader";
  import Services from "~/components/home/Services";
  import WhatWeDoTwo from "~/components/home2/WhatWeDoTwo";
  import Funfact from "~/components/home/Funfact";
  import Clients from "~/components/home/Clients";
  export default {
    components: {
      PageBanner,
      GraphDesignServiceHeader,
      Services,
      WhatWeDoTwo,
      Funfact,
      Clients,
    },
    head(){
      return {
        title: "NYNE CORP | Services"
      }
    }
  }
</script>
