<template>
  <div>
    <PageBanner pageTitle="Business" bannerCss="pageBannerBusiness" />
    <BusinessServiceHeader />
  <!-- <Services />
    <WhatWeDoTwo />
    <Funfact />
    <Clients /> -->
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import BusinessServiceHeader from "~/components/services/business/BusinessServiceHeader";
  import Services from "~/components/home/Services";
  import WhatWeDoTwo from "~/components/home2/WhatWeDoTwo";
  import Funfact from "~/components/home/Funfact";
  import Clients from "~/components/home/Clients";
  export default {
    components: {
      PageBanner,
     BusinessServiceHeader,
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
