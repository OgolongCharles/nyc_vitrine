<template>
  <div>
    <PageBanner pageTitle="About Us" bannerCss="pageBannerAbout"/>
   <!-- <AboutAgency />-->
    <about />
    <TestimonialTwo/> 
    <Team /> 
    <OurWork />
    <Clients />
    <WhyChooseUs />
    <CallToAction />
  </div>
</template>
<script>
  import PageBanner from "~/components/pages/PageBanner";
  import AboutAgency from "~/components/home/AboutAgency";
  import TestimonialTwo from "~/components/home2/TestimonialTwo";
   import about from "~/components/home2/about";
  import Team from "~/components/home/Team";
   import Clients from "~/components/home/Clients";
  import OurWork from "~/components/pages/OurWork";
  import WhyChooseUs from "~/components/home2/WhyChooseUs";
  import CallToAction from "~/components/home/CallToAction";
  export default {
    components: {
      PageBanner,
      AboutAgency,
      TestimonialTwo,
      Team,
      about,
      OurWork,
      WhyChooseUs,
       Clients,
      CallToAction
    },
    head(){
      return {
        title: "NYNE CORP | A Propos"
      }
    }
  }
</script>
