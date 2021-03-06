require('dotenv').config();

module.exports =  {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },

      { rel: "stylesheet", href: "/css/bootstrap.css" },
      { rel: "stylesheet", href: "/css/owl.carousel.css" },
      { rel: "stylesheet", href: "/css/owl.theme.css" },
      { rel: "stylesheet", href: "/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/css/magnific-popup.css" },
      { rel: "stylesheet", href: "/css/slick.css" },
      { rel: "stylesheet", href: "/css/icons.css" },
      { rel: "stylesheet", href: "/css/preset.css" },
      { rel: "stylesheet", href: "/css/theme.css" },
      { rel: "stylesheet", href: "/css/responsive.css" },
      { rel: "stylesheet", href: "/css/presets/color1.css" },
      //{ rel: "stylesheet", href: "/css/font-awesome.css" },
    ],

    script: [
      { src: "/js/jquery.js", type: "text/javascript", body: true },
      { src: "/js/bootstrap.min.js", type: "text/javascript", body: true },
      { src: "/js/modernizr.custom.js", type: "text/javascript", body: true },
      { src: "/js/gmaps.js", type: "text/javascript", body: true },
      { src: "https://maps.google.com/maps/api/js?key=AIzaSyDTPlX-43R1TpcQUyWjFgiSfL_BiGxslZU", type: "text/javascript", body: true },
      { src: "/js/dlmenu.js", type: "text/javascript", body: true },
      { src: "/js/jquery.magnific-popup.js", type: "text/javascript", body: true },
      { src: "/js/mixer.js", type: "text/javascript", body: true },
      { src: "/js/jquery.easing.1.3.js", type: "text/javascript", body: true },
      { src: "/js/owl.carousel.js", type: "text/javascript", body: true },
      { src: "/js/slick.js", type: "text/javascript", body: true },
      { src: "/js/jquery.appear.js", type: "text/javascript", body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#4085f4',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'@/plugins/vuetify', ssr: false},
    { src: '@/api/index',  ssr: true },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
    ** Nuxt.js modules
    */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        defaultLocale: 'en',
        locales: [{
          code: "fr",
          file : "fr-FR.js",
          name: 'France',
          image: "/images/flag3.jpg"
        },
          {
            code: "en",
            file : "en-EN.js",
            name: 'English',
            image: "/images/flag.jpg"
          },
        ],
        lazy: true,
        langDir: "lang/",
      }
    ]
  ],
  /*
  ** optimizedImages
  */
  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseUrl: process.env.API_URL,
    //browserBaseURL: process.env.API_URL,
  },
  /*
  /*
  ** Build configuration
  */
  build: {

    extend (config, ctx) {
    }
  }
}
