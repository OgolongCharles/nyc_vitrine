<template>
   <section class="testi">
       <div class="container"><!----container start---->
           <div class="row"><!----row start---->
               <h4 class="sec_title title-here">{{$t("testimonial")}}</h4>

            <div class="test-timonials row"><!----slide start---->

                <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>CEF IMMO FINANZ</h1>
                    <div class="card-body text-justify">
                      <p>
                        {{$t("talk1")}}
                         </p>
                      <div class="card-footer col-lg">
                           <div class="card-img A200 col-lg-6"></div>
                           <div class="name col-lg-6">
                               <br>
                             <h4>PDG CeF IMMO</h4>
                           </div>
                      </div>
                    </div>
                </div><!----item end---->

                 <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>KELIX HAIR</h1>
                    <div class="card-body text-justify">
                      <p>
                         {{$t("talk2")}}
                       </p>

                      <div class="card-footer col-lg">
                           <div class="card-img A300 col-lg-6"></div>
                           <div class="name col-lg-6">
                               <br>
                             <h4>PDG KELIX HAIR</h4>
                           </div>
                      </div>
                    </div>
                </div><!----item end---->

                 <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>LML BEAUTY</h1>
                    <div class="card-body text-justify">
                      <p>
                        {{$t("talk3")}}
                         </p>
                      <div class="card-footer col-lg">
                           <div class="card-img A400 col-lg-6"></div>
                           <div class="name col-lg-6">
                             <br>
                             <h4>PDG LML Beauty</h4>
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
            loop:true,
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
              800: {
                items: 2
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
     background-image: url(/images/team/AVTR-04.png);
}
.A300{
     background-image: url(/images/team/AVTR-02.png);
}
.A400{
     background-image: url(/images/team/AVTR-06.png);
}
.A500{
     background-image: url(/images/team/AVTR-02.png);
}
.A600{
     background-image: url(/images/team/AVTR-02.png);
}
</style>
