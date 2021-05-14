<template>
  <section class="commonSection service_detail">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-8">
          <div class="serviceArea">
             <img v-bind:src="image1" alt="">
          <h2> {{title}} </h2>
            <p>
             {{paragraph}}
            </p>
            <div class="row gaping">
              <div class="col-lg-6 col-sm-12 col-md-6">
                <img v-bind:src="image1" alt="">
              </div>
            
            </div>
         
          </div>
        </div>
        <div class="col-lg-4 col-sm-4 sidebar">
          <aside class="widget categories">
            <h3 class="widget_title">Plus de services</h3>
            <div class="meipaly_categorie_widget">
              <ul>
                     <li><nuxt-link to="/prog">OUTSOURCING</nuxt-link></li>
                      <li><nuxt-link to="/prog">{{$t("serPro")}}</nuxt-link></li>
                      <li><nuxt-link to="/qa-testing">{{$t("serTwo")}}</nuxt-link></li>
                      <li><nuxt-link to="/graphism-design">{{$t("DESIGN")}}</nuxt-link></li>
                      <li><nuxt-link to="/digital-marketing">{{$t("DIGITAL")}}</nuxt-link></li>
                      <li><nuxt-link to="/business">{{$t("BUSINESS")}}</nuxt-link></li>
                      <li><nuxt-link to="/tech">{{$t("ECHNOLOGIES")}}</nuxt-link></li>
              </ul>
            </div>
          </aside>
          <aside class="widget categories">
            <div class="meipaly_services_help">
              <h4>Chez NYNE CORP</h4>
              <p>Nous nous engageons à fournir à nos clients un service exceptionnel tout en offrant à nos employés la meilleure formation. </p>
              <h2>P: +33 6 16 63 42 37</h2>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "ServiceDetail",
      props: {
        title: {
          type:String,
        },
        image1: {
          type:String,
        },
        paragraph: {
          type:String,
        }
      },
    }
</script>

<style scoped>

</style>
