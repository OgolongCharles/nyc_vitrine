<template>
  <div>
    <PageBanner pageTitle="Programmation" bannerCss="pageBannerProg"/>
    <ProgServiceHeader />
    <ProgServices />
    <WhatWeDoTwo />
    <Funfact />
    <Clients />
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import ProgServiceHeader from "~/components/services/prog/ProgServiceHeader";
  import ProgServices from "~/components/services/prog/ProgServices";
  import WhatWeDoTwo from "~/components/home2/WhatWeDoTwo";
  import Funfact from "~/components/home/Funfact";
  import Clients from "~/components/home/Clients";
  export default {
    components: {
      PageBanner,
      ProgServiceHeader,
      ProgServices,
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
