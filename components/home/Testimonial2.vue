<template>
   <section class="testi">  
       <div class="container"><!----container start---->
           <div class="row"><!----row start---->
               <h4 class="sec_title title-here">TESTIMONIALS</h4>
            
            <div class="test-timonials row"><!----slide start---->
              
                <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>CEF IMMO FINANZ</h1>
                    <div class="card-body text-justify">
                      <p> Merci pour votre grande disponibilité et patience.Votre professionnalisme et créativité est admirable et recommandable. 
                         </p>
                      <div class="card-footer col-lg">
                           <div class="card-img A200 col-lg-6"></div>
                           <div class="name col-lg-6">
                             Lorem ipsum dolor
                             <h4>title or Post</h4>
                           </div>
                      </div>
                    </div>
                </div><!----item end---->

                 <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>KELIX HAIR</h1>
                    <div class="card-body text-justify">
                      <p>
                         Nous travaillons avec NKAP depuis quelques mois et sommes assez satisfait de leur service. Nous avons une vision assez grande et nous rejouissons et espérons pouvoir l'accomplir ensemble.
                       </p>
                       
                      <div class="card-footer col-lg">
                           <div class="card-img A300 col-lg-6"></div>
                           <div class="name col-lg-6">
                             Lorem ipsum dolor
                             <h4>PDG KELIX HAIR</h4>
                           </div>
                      </div>
                    </div>
                </div><!----item end---->

                 <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>LML BEAUTY</h1>
                    <div class="card-body text-justify">
                      <p>Je remercie L'équipe de NKAP qui est toujours à l'ecoute, patient face à nos caprices. Surtout pour le travail toujours bien fait et à un prix defiant toute concurrence.
                         </p>
                      <div class="card-footer col-lg">
                           <div class="card-img A400 col-lg-6"></div>
                           <div class="name col-lg-6">
                             Lorem ipsum dolor
                             <h4>PDG LML Beauty</h4>
                           </div>
                      </div>
                    </div>
                </div><!----item end---->

                 <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>ASSOCIATION MADZON</h1>
                    <div class="card-body text-justify">
                      <p> Nous utilison l'application NKAP depuis 2ans et nous en sommes plus que satisfaites , car elle nous aide a assurer la transparence et la communicationau sein de notre association.
                         </p>
                      <div class="card-footer col-lg">
                           <div class="card-img A500 col-lg-6"></div>
                           <div class="name col-lg-6">
                             Lorem ipsum dolor
                             <h4>President Madzon Ngouobong</h4>
                           </div>
                      </div>
                    </div>
                </div><!----item end---->

                 <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>ASSOCIATION  FOBA</h1>
                    <div class="card-body text-justify">
                      <p> Depuis que nous utilisons  Nkap App, plus besoin de calculatrice, plus d'erreur... La cerise sur le gateau c'est la transparence dans la gestion de notre association. Merci  NKAP pour cette solution.
                         </p>
                      <div class="card-footer col-lg">
                           <div class="card-img A600 col-lg-6"></div>
                           <div class="name col-lg-6">
                             Lorem ipsum dolor
                             <h4>SG FOBA</h4>
                           </div>
                      </div>
                    </div>
                </div><!----item end---->

          
   
            </div><!----slide end---->

            
           </div><!----row end---->
       </div><!----container end---->





   </section>
</template>

<script>
    export default {
      name: "Testimonial2",
      mounted() {
        if ($('.test-timonials').length > 0) {
          $('.test-timonials').owlCarousel({
            items: 4,
            margin: 30,
            autoplay: true,
            nav: false,
            responsive: {
              0: {
                items: 1
              },
              560: {
                items: 2
              },
              768: {
                items: 3
              },
              992: {
                items: 3
              }
            }
          });
        }
      }

    }
</script>

<style scoped>
.testi{
  height: 110vh;
  background-color:#000;
}
.sec_title{
  color: #fff;
  text-align: center;
  margin-top:50px;
}
.talk{
    width: 100%;
   
 height:50rem;
  background:#fff;
  border-radius:9px;
  margin: 20px;
}
.talk h1{
  text-align:center;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: solid 2px grey;
}
.card-body{
  margin: 20px;
  border-bottom: solid 2px grey;
}
.card-body p{
  margin: 30px;
  height: 200px;
}
.card-img{

 background-position:center;
 background-size:cover;
  height: 100px;
  width: 100px;
  border-radius:90px;
  margin-top:3px;
}
.A200{
     background-image: url(/images/team/200.jpeg);
}
.A300{
     background-image: url(/images/team/300.jpeg);
}
.A400{
     background-image: url(/images/team/400.jpeg);
}
.A500{
     background-image: url(/images/team/500.jpg);
}
.A600{
     background-image: url(/images/team/600.jpeg);
}
</style>
