<template >
  <section class="danger">
    <div class="container">
            <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid">

          <source src="/images/service/video.mp4" type="video/mp4">
              </video>
         <h4 class="text-center sec_title title-here">Outsourcing</h4>
         <div class="text-center grid-wrapper">
             <div class="grid item-1">
            <i class="fa fa-folder-open"></i>
               <p>Vous voulez réduire les coûts, dont les coûts de personnels, de charges sociales, les frais d’entretien de vos locaux, les frais d’énergie </p>
             </div>
              <div class="grid item-2">
             <i class="fa fa-folder-open"></i>
               <p>Vous voulez un service personnalisé et adapté, qui s’avère en pratique bien plus disponible et plus souple qu’un service intégré en interne </p>
             </div>
               <div class="grid item-5">
                <i class="fa fa-folder-open"></i>
               <p>Vous voulez donner une plus grande flexibilité et réactivité à votre entreprise et mettre en concurrence des compétences </p>
             </div>
              <div class="item-3">

                    <img src="/images/service/out.jpg" alt="">
             </div>
              <div class="grid item-4">
               <i class="fa fa-folder-open"></i>
               <p>Vous avez besoin des prestataires spécialisés dans les domaines : du développent des applications, QA & testing, graphic & design et des métiers de technologie</p>
             </div>
              <div class="grid item-5">
            <i class="fa fa-folder-open"></i>
               <p>Vous voulez un meilleur maillage avec l’environnement de votre entreprise et une conciliation des projets individuels et collectifs plus forte</p>
             </div>
               <div class="grid item-5">
             <i class="fa fa-folder-open"></i>
               <p>Faites confiance à NKAP SARL, c’est notre affaire.  Plus d’une trentaine d’entreprises on trouve satisfaction chez nous. L’avenir de votre entreprise c’est avec nous</p>
             </div>
             <div class="item-bottom">
            <i class="fa fa-folder-open"></i>
                <p>Vous avez besoin des prestataires spécialisés dans les domaines : du développent des applications, QA & testing, graphic & design et des métiers de technologie (réseaux informatiques, sécurité informatique, gestion de bases de données…) ;</p>
             </div>
         </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "dev"
    }
</script>

<style scoped>
h4{
  position: relative;
    color:#4085f4;
}
.container{
  width:100%;
  position: relative;
  height: 100vh;
  text-align: center;
    background-color:rgba(5, 19, 46, 0.281);
  align-items: center;
  justify-content: center;
}
video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
img{
  width:562.667px;
  height:898.2px;
}
.danger{
height: 200vh ;

}
.grid-wrapper{
  width:100%;
  display: grid;
   grid-template-columns: repeat(3,1fr);
   grid-gap: 20px;
   position: relative;
   background-color:rgba(5, 19, 46, 0.281);
}
.grid{
  width:362px;
  height: 287px;
  border:1px solid #fff;
  align-items: center;
  padding:50px;
  box-shadow: 5px 
}
.item-3{
 grid-column-start: 2;
 grid-column-end: 3;
 grid-row-start: 1;
 grid-row-end: 4;
}
p{
  color:#fff
}
.item-bottom{
    height: 287px;
  grid-column-start: 1;
 grid-column-end: 4;
 grid-row-start: 4;
 grid-row-end: 4;
  border:1px solid #fff;
}
 i{
  color:#4085f4;
  font-size:70px;
}
@media(max-width: 568px){
  .grid-wrapper{
display: flex;
flex-direction: column;
}
.grid{
width:100%;
}

img{
  width: 100%;
}
.danger{
height: 500vh ;

}
}

</style>
