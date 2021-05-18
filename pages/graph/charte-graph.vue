<template>
  <div>
    <PageBanner 
    pageTitle="Programmation"
    bannerCss="pageBannerProg"
     />
    <ServiceDetail 
     title="Charte graphique"
     image1="/images/service/g3.jpg"
     paragraph="Avec une application, votre marque devient mobile. Vos prospects et clients sont exposés à votre marque au quotidien. Elle les accompagne partout et tout au long de la journée. La dimension tactile des smartphones et des tablettes établit également un lien plus fort et personnel"
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