<template>
  <section class="commonSection blog">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title"> {{$t("blog")}} </h4>
          <h2 class="sec_title">Blog Post</h2>
          <p class="sec_desc">
            
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="latestBlogItem">
            <div class="lbi_thumb">
              <img src="/images/blog/1-1.jpeg" alt="">
            </div>
            <div class="lbi_details">
              <a href="#" class="lbid_date">26 NOV</a>
              <h2><a href="blog_single.html">☺️Avez-vous besoin d’un accompagnateur pour votre projet?
                                              😉Vous posez-vous des questions à savoir si vous pouvez lui faire confiance?
                                              🤗Alors c’est fini les inquiétudes!
                                             </a></h2>
              <a class="learnM" href="blog_single.html">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="latestBlogItem">
            <div class="lbi_thumb">
              <img src="/images/blog/2-2.jpeg" alt="">
            </div>
            <div class="lbi_details">
              <a href="#" class="lbid_date">21 ARL</a>
              <h2><a href="blog_single.html">👋😊Hé Guys, vous avez bien commencé la semaine!
                                                ☺️Et si on faisait un exercice!
                                                🤔Quel est l’intérêt du développement logiciel❓</a></h2>
              <a class="learnM" href="blog_single.html">Learn More</a>
            </div>
          </div>
        </div>
        <div class="clearfix hidden-lg hidden-md hidden-xs"></div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="latestBlogItem">
            <div class="lbi_thumb">
              <img src="/images/blog/3-3.jpeg" alt="">
            </div>
            <div class="lbi_details">
              <a href="#" class="lbid_date">21 JAN</a>
              <h2><a href="blog_single.html">👌Obtenez des services💥 TIC💥 à l'image de votre entreprise en quelques clics</a></h2>
              <a class="learnM" href="blog_single.html">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "BlogHome"
    }
</script>

<style scoped>

</style>
