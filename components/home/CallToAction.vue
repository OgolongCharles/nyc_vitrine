<template>
  <section class="cta commonSection" :class="[design === 'style2' ? 'ready_2' : 'ready']">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-sm-8 col-md-9">
          <h2 class="sec_title white">Commençons votre projet!</h2>
        </div>
        <div class="col-lg-3 col-sm-4 col-md-3 text-right">
          <a class="common_btn" :class="[design === 'style2' ? 'red_bg' : '']" href="/contact"><span>En contact avec nous</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "CallToAction",
      props: {
        design: {
          type: String,
          default: 'style1'
        }
      }
    }
</script>

<style scoped>
 .cta {
   margin-top: -10px;
 }
</style>
