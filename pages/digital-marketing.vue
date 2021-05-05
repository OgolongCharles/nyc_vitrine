<template>
  <div>
    <PageBanner pageTitle="Marketing Digital" bannerCss="pageBannerDigitalMark" />
    <MarkDigitServiceHeader />
  <!--  <Services />
    <WhatWeDoTwo />
    <Funfact />
    <Clients /> -->
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import MarkDigitServiceHeader from "~/components/services/marketing-digital/MarkDigitServiceHeader";
  import Services from "~/components/home/Services";
  import WhatWeDoTwo from "~/components/home2/WhatWeDoTwo";
  import Funfact from "~/components/home/Funfact";
  import Clients from "~/components/home/Clients";
  export default {
    components: {
      PageBanner,
     MarkDigitServiceHeader,
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
