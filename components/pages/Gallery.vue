<template>
  <section>
               <div class="grid-container">
                    <div class="grid-item">
                              <a href="/images/portfolio/Portfolio/4.jpg">  <img src="/images/portfolio/Portfolio/4.jpg" alt=""> </a>
                        </div>
                          <div class="grid-item">
                               <a href="/images/portfolio/Portfolio/8.jpg">  <img src="/images/portfolio/Portfolio/8.jpg" alt=""> </a>
                        </div>
                          <div class="grid-item">
                               <a href="/images/portfolio/Portfolio/2.jpg">  <img src="/images/portfolio/Portfolio/2.jpg" alt=""> </a>
                        </div>
                  </div>
                  <div class="grid-container">
                      <div class="grid-item">
                            <a href="/images/portfolio/Portfolio/3.jpg">  <img src="/images/portfolio/Portfolio/3.jpg" alt=""> </a>
                      </div>
                        <div class="grid-item">
                             <a href="/images/portfolio/Portfolio/5.jpg">  <img src="/images/portfolio/Portfolio/5.jpg" alt=""> </a>
                      </div>
                        <div class="grid-item">
                           <a href="/images/portfolio/Portfolio/7.jpg">  <img src="/images/portfolio/Portfolio/7.jpg" alt=""> </a>
                      </div>
                </div>
                  <div class="grid-container">
                    <div class="grid-item">
                         <a href="/images/portfolio/Portfolio/9.jpg">  <img src="/images/portfolio/Portfolio/9.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                         <a href="/images/portfolio/Portfolio/10.jpg">  <img src="/images/portfolio/Portfolio/10.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                          <a href="/images/portfolio/Portfolio/11.jpg">  <img src="/images/portfolio/Portfolio/11.jpg" alt=""> </a>
                    </div>
              </div>
              <div class="grid-container">
                    <div class="grid-item">
                          <a href="/images/portfolio/Portfolio/12.jpg">  <img src="/images/portfolio/Portfolio/12.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                         <a href="/images/portfolio/Portfolio/13.jpg">  <img src="/images/portfolio/Portfolio/13.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                          <a href="/images/portfolio/Portfolio/14.jpg">  <img src="/images/portfolio/Portfolio/14.jpg" alt=""> </a>
                    </div>
              </div>
              <div class="grid-container">
                    <div class="grid-item">
                          <a href="/images/portfolio/Portfolio/15.jpg">  <img src="/images/portfolio/Portfolio/15.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                         <a href="/images/portfolio/Portfolio/16.jpg">  <img src="/images/portfolio/Portfolio/16.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                         <a href="/images/portfolio/Portfolio/17.jpg">  <img src="/images/portfolio/Portfolio/17.jpg" alt=""> </a>
                    </div>
              </div>
                <div class="grid-container">
                    <div class="grid-item">
                         <a href="/images/portfolio/Portfolio/18.jpg">  <img src="/images/portfolio/Portfolio/18.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                         <a href="/images/portfolio/Portfolio/19.jpg">  <img src="/images/portfolio/Portfolio/19.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                         <a href="/images/portfolio/Portfolio/20.jpg">  <img src="/images/portfolio/Portfolio/20.jpg" alt=""> </a>
                    </div>
              </div>
                <div class="grid-container">
                    <div class="grid-item">
                          <a href="/images/portfolio/Portfolio/22.jpg">  <img src="/images/portfolio/Portfolio/22.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                          <a href="/images/portfolio/Portfolio/23.jpg">  <img src="/images/portfolio/Portfolio/23.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                          <a href="/images/portfolio/Portfolio/24.jpg">  <img src="/images/portfolio/Portfolio/24.jpg" alt=""> </a>
                    </div>
              </div>
                 <div class="grid-container">
                    <div class="grid-item">
                         <a href="/images/portfolio/Portfolio/25.jpg">  <img src="/images/portfolio/Portfolio/25.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                         <a href="/images/portfolio/Portfolio/26.jpg">  <img src="/images/portfolio/Portfolio/26.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                         <a href="/images/portfolio/Portfolio/27.jpg">  <img src="/images/portfolio/Portfolio/27.jpg" alt=""> </a>
                    </div>
              </div>
                 <div class="grid-container">
                    <div class="grid-item">
                          <a href="/images/portfolio/Portfolio/28.jpg">  <img src="/images/portfolio/Portfolio/28.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                          <a href="/images/portfolio/Portfolio/29.jpg">  <img src="/images/portfolio/Portfolio/29.jpg" alt=""> </a>
                    </div>
                      <div class="grid-item">
                          <a href="/images/portfolio/Portfolio/30.jpg">  <img src="/images/portfolio/Portfolio/30.jpg" alt=""> </a>
                    </div>
              </div>
  </section>
</template>

<script>
export default {
name:"Gallery",
  mounted() {
  $(document).ready(function() {
	$('.grid-container').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <img class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</img>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}

	});
});
      },

}
</script>

<style scoped>
.grid-container{
   box-sizing: border-box;
    height:40vh;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows:200px 200px;
    grid-row-gap: 30px;
    grid-gap:20px;
    margin:40px;
    margin-left:53px;
    margin-right:33px;

}

  .grid-container .grid-item{
          width:369.667px;
          height:277.25px;

        }
      .grid-item img{
         border-radius:15px;
        width:100%;
        box-shadow:5px 10px 18px #888

      }
      section{
           height:420vh;
      }
      @media(max-width:600px){
        .grid-container .grid-item{
           width:100%;
          height:197.25px;
        }

         .grid-container{
            height:130vh;
            grid-template-columns: 1fr;
            margin:2px;
            grid-gap:100px;
            margin-left:33px;
            margin-right:33px;
         }
         a{
           margin-bottom:200px;
         }
          section{
            text-align:center;
              height:1200vh;
          }
      }
        @media(min-width:700px) and (max-width:800px){
            section{
              height:220vh;
            }
            .grid-container{
             display:flex;
              margin:30px;
              height:20vh;

            }

        }

</style>
