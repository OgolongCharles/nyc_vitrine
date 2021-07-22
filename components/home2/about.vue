<template>
    <section class="main">
        <div class="conatainer">
            <div class="row text-center">
                 <h4 class="sec_title title-here text-center">Notre Histoire</h4>
                <div class="col-lg-6 col-sm-6 col-md-6">
                    <p class="text-justify">
                       NYNECORP est une société de prestations de services informatique créée 2017 en France.
                        Nous sommes domiciliés à Cergy au 3 rue des Châtaigniers.
                        Nous sommes spécialisés en QA-Testing mais accompagnons les entreprises et particuliers sur plusieurs secteurs d’activités IT depuis 4 ans.
                        Nous sommes un prestataire de choix pour la multinationale ARROW (Fortune 150) ; Notamment dans le conseil Cloud.
                        Nous avons délivré plusieurs prestations de formations (En Automatisations de tests , MG725 , Gestion de projets , etc.) pour le Compte d’IB Cegos (1er formateur Français) via son partenaire TESSCO et pour PLB également.
                        Nous œuvrons énormément au Cameroun où nos prestations sont très diversifiées : Éditeur de site Web, Graphisme, Communication digitale, Formations, etc …
                     </p>
                </div>
                <div class="col-lg-6 col-sm-6 col-md-6">
                    <div class="ab_img1">
                          <img src="/images/home_1/9.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
name:"about"
}
</script>

<style scoped>
.main{
margin-top: 50px;
height: 120vh;
}
.row{
    width:100%;
    margin: auto;
}
p{
   margin: 50px;
}
.ab_img1{
    width:100%;
}
img{
     margin: 50px;
}
@media(max-width:400px){
.main{
margin-top: 50px;
height: 100%;
}
img{
     margin: 0px;
}
p{
   margin: 10px;
}
}
</style>
