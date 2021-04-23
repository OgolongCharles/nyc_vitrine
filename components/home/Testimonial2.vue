<template>
   <section class="testi">  
       <div class="container"><!----container start---->
           <div class="row"><!----row start---->
               <h4 class="sec_title title-here">TESTIMONIALS</h4>
            
            <div class="test-timonials row"><!----slide start---->
              
                <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>company name here</h1>
                    <div class="card-body text-justify">
                      <p>Lorem ipsum  dolor sit, amet consectetur adipisicing elit. Placeat iure doloremque exercitationem.
                         Assumenda molestias reprehenderit animi nesciunt adipisci eum voluptatibus.
                          dolor sit, amet consectetur adipisicing elit. Placeat iure doloremque exercitationem.
                         Assumenda molestias reprehenderit animi nesciunt adipisci eum 
                         </p>
                      <div class="card-footer col-lg">
                           <div class="card-img col-lg-6"></div>
                           <div class="name col-lg-6">
                             Lorem ipsum dolor
                             <h4>title or Post</h4>
                           </div>
                      </div>
                    </div>
                </div><!----item end---->

                 <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>company name here</h1>
                    <div class="card-body text-justify">
                      <p>Lorem ipsum  dolor sit, amet consectetur adipisicing elit. Placeat iure doloremque exercitationem.
                         Assumenda molestias reprehenderit animi nesciunt adipisci eum voluptatibus.
                          dolor sit, amet consectetur adipisicing elit. Placeat iure doloremque exercitationem.
                         Assumenda molestias reprehenderit animi nesciunt adipisci eum 
                         </p>
                      <div class="card-footer col-lg">
                           <div class="card-img col-lg-6"></div>
                           <div class="name col-lg-6">
                             Lorem ipsum dolor
                             <h4>title or Post</h4>
                           </div>
                      </div>
                    </div>
                </div><!----item end---->

                 <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>company name here</h1>
                    <div class="card-body text-justify">
                      <p>Lorem ipsum  dolor sit, amet consectetur adipisicing elit. Placeat iure doloremque exercitationem.
                         Assumenda molestias reprehenderit animi nesciunt adipisci eum voluptatibus.
                          dolor sit, amet consectetur adipisicing elit. Placeat iure doloremque exercitationem.
                         Assumenda molestias reprehenderit animi nesciunt adipisci eum 
                         </p>
                      <div class="card-footer col-lg">
                           <div class="card-img col-lg-6"></div>
                           <div class="name col-lg-6">
                             Lorem ipsum dolor
                             <h4>title or Post</h4>
                           </div>
                      </div>
                    </div>
                </div><!----item end---->

                 <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>company name here</h1>
                    <div class="card-body text-justify">
                      <p>Lorem ipsum  dolor sit, amet consectetur adipisicing elit. Placeat iure doloremque exercitationem.
                         Assumenda molestias reprehenderit animi nesciunt adipisci eum voluptatibus.
                          dolor sit, amet consectetur adipisicing elit. Placeat iure doloremque exercitationem.
                         Assumenda molestias reprehenderit animi nesciunt adipisci eum 
                         </p>
                      <div class="card-footer col-lg">
                           <div class="card-img col-lg-6"></div>
                           <div class="name col-lg-6">
                             Lorem ipsum dolor
                             <h4>title or Post</h4>
                           </div>
                      </div>
                    </div>
                </div><!----item end---->

                 <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>company name here</h1>
                    <div class="card-body text-justify">
                      <p>Lorem ipsum  dolor sit, amet consectetur adipisicing elit. Placeat iure doloremque exercitationem.
                         Assumenda molestias reprehenderit animi nesciunt adipisci eum voluptatibus.
                          dolor sit, amet consectetur adipisicing elit. Placeat iure doloremque exercitationem.
                         Assumenda molestias reprehenderit animi nesciunt adipisci eum 
                         </p>
                      <div class="card-footer col-lg">
                           <div class="card-img col-lg-6"></div>
                           <div class="name col-lg-6">
                             Lorem ipsum dolor
                             <h4>title or Post</h4>
                           </div>
                      </div>
                    </div>
                </div><!----item end---->

                  <div class="talk col-lg-4 col-sm-6 col-md-4"><!----item start---->
                    <h1>company name here</h1>
                    <div class="card-body text-justify">
                      <p>Lorem ipsum  dolor sit, amet consectetur adipisicing elit. Placeat iure doloremque exercitationem.
                         Assumenda molestias reprehenderit animi nesciunt adipisci eum voluptatibus.
                          dolor sit, amet consectetur adipisicing elit. Placeat iure doloremque exercitationem.
                         Assumenda molestias reprehenderit animi nesciunt adipisci 
                         </p>
                      <div class="card-footer col-lg">
                           <div class="card-img col-lg-6"></div>
                           <div class="name col-lg-6">
                             Lorem ipsum dolor
                             <h4>title or Post</h4>
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
.card-img{
 background-image: url(/images/team/mister_2.png);
 background-position:center;
 background-size:cover;
  height: 100px;
  width: 100px;
  border-radius:90px;
  margin-top:3px;
}
</style>
