<template>
  <div>
    <PageBanner pageTitle="Technologies" bannerCss="pageBannerTech"/>
    <TechServiceHeader />
    <!--<Services />
    <WhatWeDoTwo />
    <Funfact />
    <Clients />-->
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import TechServiceHeader from "~/components/services/tech/TechServiceHeader";
  import Services from "~/components/home/Services";
  import WhatWeDoTwo from "~/components/home2/WhatWeDoTwo";
  import Funfact from "~/components/home/Funfact";
  import Clients from "~/components/home/Clients";
  export default {
    components: {
      PageBanner,
      TechServiceHeader,
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
