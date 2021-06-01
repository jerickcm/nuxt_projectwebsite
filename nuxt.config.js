import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {

    titleTemplate: "%s - Project",
    title: "Nuxt and Laravel",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': 'pub-3213536425475125',
        async: true
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],
  // router: {
  //   middleware: ['auth']
  // },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
  ],
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
          "openid",
          "profile",
          "email",
          "https://www.googleapis.com/auth/gmail.metadata"
        ],
        clientId:
          "14757956463-i7pn4r8arrel30q04rh9htcmnf1aoaot.apps.googleusercontent.com",
        codeChallengeMethod: "",
        responseType: "code",
        // grantType: "client_credentials",
        // redirectUri: "http://localhost"
      },
      laravelSanctum: {
        provider: "laravel/sanctum",
        //  url: 'http://localhost:8000',
        url: 'http://back.api.test:3001',
        // url: "http://back.api.test",
        endpoints: {
          login: {
            url: "/api/login"
          },

          logout: {
            url: "/api/logout"
          }
          //   user: {
          //     url: '/api/user', method: 'get', propertyName: 'data'
          //   },
        }
      }
    },
    redirect: {
      login: "/login",
      // login: "/",
      logout: "/",
      // callback: '/login',
      home: "/dashboard"
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: process.env.BASE_URL || "http://back.api.test",
    baseURL: "http://back.api.test:3001",
    credentials: true
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
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
  target: 'static'
};

// Note that Vuetify 1.5.x is handled by @nuxtjs/vuetify@0.x.x
// Meanwhile Vuetify 2.x.x is now handled by the last versions of the module : @nuxtjs/vuetify@1.x.x
