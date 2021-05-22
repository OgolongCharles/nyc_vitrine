<template>
  <section v-bind:class="'pageBanner ' + bannerCss">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="banner_content text-center">
<!--            <h4><nuxt-link to="/">Accueil</nuxt-link> - {{ pageTitle }}</h4>-->
<!--            <h2>{{ pageTitle }}</h2>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "PageBanner",
      props: {
        pageTitle: {
          type: String
        },
        bannerCss: {
          type: String
        }
      }
    }
</script>

<style scoped>
.pageBanner{
   mask-image: linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0));
}
</style>
