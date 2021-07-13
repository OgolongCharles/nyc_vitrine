<template>
  <div>
    <PageBanner
    pageTitle="Programmation"
    bannerCss="pageBannerProg"
     />
<!--    <ServiceDetail -->
<!--     title="Application de bureau"-->
<!--     image1="/images/service/AppB.jpg"-->
<!--     paragraph="Avec une application, votre marque devient mobile. Vos prospects et clients sont exposés à votre marque au quotidien. Elle les accompagne partout et tout au long de la journée. La dimension tactile des smartphones et des tablettes établit également un lien plus fort et personnel"-->
<!--    />-->
    <ApplicationDeBureau
      image1="/images/service/AppB.jpg"
    />
    <CallToAction />
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import ApplicationDeBureau from "../../components/pages/Sous-Programmation/ApplicationDeBureau";
  import CallToAction from "~/components/home/CallToAction";
  export default {
    components: {
      PageBanner,
      ApplicationDeBureau,
      CallToAction,

    },
    head(){
      return {
        title: "NYNE CORP | Service Detail"
      }
    }
  }
</script>
