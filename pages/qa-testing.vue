<template>
  <div>
    <PageBanner pageTitle="QA & Testing" bannerCss="pageBannerQa"/>
    <QATestServiceHeader />
    <!--<Services />
    <WhatWeDoTwo />
    <Funfact />
    <Clients />-->
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import QATestServiceHeader from "~/components/services/qa-testing/QATestServiceHeader";
  import Services from "~/components/home/Services";
  import WhatWeDoTwo from "~/components/home2/WhatWeDoTwo";
  import Funfact from "~/components/home/Funfact";
  import Clients from "~/components/home/Clients";
  export default {
    components: {
      PageBanner,
      QATestServiceHeader,
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
