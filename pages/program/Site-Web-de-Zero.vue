<template>
  <div>
     <PageBanner pageTitle="Programmation" bannerCss="pageBannerProg"/>
    <ServiceDetail 
       title="Site de zéro"
     image1="/images/service/DevSite2.jpg"
     paragraph="Nous concevons et créons, dans le strict respect des standards du web, des sites performants, attrayants et toujours dotés de fonctionnalités utiles."
    />
    <CallToAction />
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import ServiceDetail from "~/components/pages/ServiceDetail";
  import CallToAction from "~/components/home/CallToAction";
  export default {
    components: {
      PageBanner,
      ServiceDetail,
      CallToAction,

    },
    head(){
      return {
        title: "NYNE CORP | Service Detail"
      }
    }
  }
</script>