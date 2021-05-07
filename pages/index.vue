<template>
  <div>
    <SliderOne />
    <icons />
    <Services />
    <AboutAgency />
    <WhatWeDo />
    <Portfolio />
    <Funfact />
    <Team />
    <Clients />
    <Testimonial2 />
    <Testimonial />
    <BlogHome />
    <CallToAction />
  </div>
</template>

<script>
  import icons from "~/components/icons";
  import SliderOne from "~/components/home/SliderOne";
  import Services from "~/components/home/Services";
  import AboutAgency from "~/components/home/AboutAgency";
  import WhatWeDo from "~/components/home/WhatWeDo";
  import Portfolio from "~/components/home/Portfolio";
  import Funfact from "~/components/home/Funfact";
  import Team from "~/components/home/Team";
  import Clients from "~/components/home/Clients";
  import Testimonial2 from "~/components/home/Testimonial2";
  import Testimonial from "~/components/home/Testimonial";
  import BlogHome from "~/components/home/BlogHome";
  import CallToAction from "~/components/home/CallToAction";
  export default {
    components: {
      icons,
      SliderOne,
      Services,
      AboutAgency,
      WhatWeDo,
      Portfolio,
      Funfact,
      Team,
      Clients,
       Testimonial2,
      Testimonial,
      BlogHome,
      CallToAction,


    }
  }
</script>
