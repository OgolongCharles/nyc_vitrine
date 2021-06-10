<template>
   <section class="area">
         <video  autoplay muted loop><!--bgr video -->
               <source src="/images/service/video.mp4" type="video/mp4">
         </video><!--bgr video -->
         <div class="container avivon-heading text-center">  <!--start container -->
              <h1 class="avivon__title">Outsourcing</h1>
                <div class="row"> <!--start row -->
                    <div class="item col-lg-4 col-md-4 col-sm-11 col-xs-12">
                      <p>Vous voulez réduire les coûts, dont les coûts de personnels, de charges sociales, les frais d’entretien de vos locaux, les frais d’énergie ?</p>
                    </div>
                     <div class="col-lg-4 col-md-4 col-sm-11 col-xs-12">
                       <img src="/images/service/out.jpg" alt="">
                     </div>
                    <div class="item col-lg-4 col-md-4 col-sm-11 col-xs-12">
                        <p>Vous voulez un service personnalisé et adapté, qui s’avère en pratique bien plus disponible et plus souple qu’un service intégré en interne ?</p>
                    </div>
                </div> <!--end row -->
                <div class="row"><!--start row -->
                   <div class="col-md-12 item-lg col-sm-11 col-xs-12">
                     <p>Vous avez besoin des prestataires spécialisés dans les domaines suivants: développent des applications, QA & testing, graphic & design et des métiers de technologie (réseaux informatiques, sécurité informatique, gestion de bases de données…) ?</p>
                   </div>
                </div><!--end row -->
                <div class="row"><!--start row -->
                  <div class="col-md-4 item col-sm-11 col-xs-12">
                    <p>Vous voulez donner une plus grande flexibilité et réactivité à votre entreprise et mettre en concurrence des compétences ?</p>
                  </div>
                  <div class="col-md-4 item col-sm-11 col-xs-12">
                     <p>Vous voulez un meilleur maillage avec l’environnement de votre entreprise et une conciliation des projets individuels et collectifs plus forte ?</p>
                  </div>
                  <div class="col-md-4 item col-sm-11 col-xs-12">
                     <p>Vous voulez accorder une concentration de l’énergie sur les aspects stratégiques, apporte une souplesse dans la gestion de votre entreprise, alléger des structures et engager la responsabilisation des salariés ?</p>
                  </div>
                </div><!--end row -->
                  <div class="row"><!--start row -->
                   <div class="col-md-12 item-lg col-sm-11 col-xs-12">
                     <p>Faites confiance à NKAP SARL, c’est notre affaire.  Plus d’une trentaine d’entreprises on trouve satisfaction chez nous. L’avenir de votre entreprise c’est avec nous.</p>
                   </div>
                </div><!--end row -->
          </div> <!--end container -->

   </section>
</template>
<script>
export default {
  name:"outSourcing"
  }
</script>
<style scoped>
.avivon__title{
  margin-bottom:10%;
}
.area{
  position:relative;
  margin-top:30%;
}
.row{
  width:100%;
  position:relative;
  margin-bottom:30px;

}
img{
  width:100%;
  height:390px;

}
video{
   object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.item{
    /* width:100%; */
  height: 387px;
  margin:2px;
  border:1px solid #fff;
  align-items: center;
  padding:50px;
  box-shadow: 5px 10px 18px #888;

}
.item-lg{
   box-shadow: 5px 10px 18px #888;
    border:1px solid #fff;
    height: 150px;
    width:100%;
}
p{
  color:#fff;
  padding:25px;
}
@media(max-width:500px){
  .item{
  width:100%;
  height: auto;
   margin:auto;
   margin-left:20px;
 margin-bottom:20px;

}
.area{
  position:relative;
  margin-top:70%;
}
.item-lg{
    height:auto;
      width:100%;
       margin-left:20px;
    margin-bottom:20px;
}
img{
  width:100%;
  height: auto;
  margin:auto;
   margin-bottom:20px;
}
}
@media(min-width:500px) and (max-width:800px){
  .item{
  width:100%;
  height: auto;
   margin:auto;

 margin-bottom:20px;

}
.item-lg{
    height:auto;
      width:100%;

    margin-bottom:20px;
}

}

</style>
