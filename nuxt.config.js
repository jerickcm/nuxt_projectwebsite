import colors from 'vuetify/es5/util/colors'
// console.log(process.env.NODE_ENV );
const dev = process.env.DEV_API
const prod = process.env.PROD_API
const api = process.env.NODE_ENV === 'development' ? dev : prod

export default {
  dev: process.env.NODE_ENV !== 'production',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Page',
    title: '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/nuxt.ico' }],
    // script: [
    //   {
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //     'data-ad-client': 'ca-pub-3213536425475125',
    //     async: true
    //   }
    // ]
  },
  env: {
    API_URL: api
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~layouts/global.css'],
  loading:{color:'39b982'},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],
  // router: {
  //   middleware: ['auth']
  // },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/robots',
    '@nuxtjs/dotenv',
    '@nuxtjs/toast',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'http://www.inhinyeru.com',
  },
  toast: {
    position: 'top-right',
    duration: 3000
  },
  robots: {
    UserAgent: '*',
    Disallow: '/dashboard',
    Allow: '/'
  },
  auth: {
    // token: {
    //   prefix: '_token.'
    // },
    // localStorage: {
    //   prefix: 'auth.'
    // },

    strategies: {
      google: {
        scope: [
        //   'openid',
          'profile',
          'email',

        //   'https://www.googleapis.com/auth/gmail.metadata'
        ],
        clientId:
          '635307167233-mii6gf2ho460gj11ui5tvb7teo1rcp3o.apps.googleusercontent.com',
        codeChallengeMethod: '',
        // responseType: 'code',
        responseType: "id_token token",
        grantType: "client_credentials",
        // redirectUri: "http://localhost"
      },
      laravelSanctum: {
        provider: 'laravel/sanctum',

        url: api,
        endpoints: {
          login: {
            url: '/api/login'
          },

          logout: {
            url: '/api/logout'
          }
          //   user: {
          //     url: '/api/user', method: 'get', propertyName: 'data'
          //   },
        }
      }
    },
    redirect: {
      login: '/login',
      // login: "/",
      logout: '/',
      // callback: '/login',
      home: '/dashboard'
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: process.env.BASE_URL || "http://back.api.test",
    baseURL: api,
    credentials: true
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,

      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    //  port: 80,
    // port: 80, // default: 3000
    // host: '0.0.0.0', // default: localhost,
    // timing: falseY
  },
  // target: 'static'
}

// Note that Vuetify 1.5.x is handled by @nuxtjs/vuetify@0.x.x
// Meanwhile Vuetify 2.x.x is now handled by the last versions of the module : @nuxtjs/vuetify@1.x.x
