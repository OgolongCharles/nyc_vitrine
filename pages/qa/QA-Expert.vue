<template>
  <div>
    <PageBanner pageTitle="QA & Testing" bannerCss="pageBannerQa"/>
    <ServiceDetail
    title="QA EXPERT "
     image1="/images/service/QA6.jpg"
     paragraph="Un CMS est un logiciel à installer sur son serveur Web qui va vous permettre de gérer votre site internet sans avoir besoin de connaissances en programmation. ... Sachez cependant que les autres plateformes permettent aussi de rédiger des articles et de créer votre site internet rapidement"
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