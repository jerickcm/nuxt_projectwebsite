import colors from 'vuetify/es5/util/colors'

const dev = process.env.DEV_API
const prod = process.env.PROD_API
const api = process.env.NODE_ENV === 'development' ? dev : prod

const dev_front = process.env.DEV_FRONT
const prod_front = process.env.PROD_FRONT
const front = process.env.NODE_ENV === 'development' ? dev_front : prod_front

const dev_fb_id = process.env.DEV_FB
const prod_fb_id = process.env.PROD_FB
const fb_id = process.env.NODE_ENV === 'development' ? dev_fb_id : prod_fb_id

const dev_github_id = process.env.DEV_GITHUBCIENTID
const prod_github_id = process.env.PROD_GITHUBCIENTID
const github_id =
  process.env.NODE_ENV === 'development' ? dev_github_id : prod_github_id

const dev_github_secret = process.env.DEV_GITHUBSECRET
const prod_github_secret = process.env.PROD_GITHUBSECRET
const github_secret =
  process.env.NODE_ENV === 'development'
    ? dev_github_secret
    : prod_github_secret

const dev_google_id = process.env.DEV_GOOGLE
const prod_google_id = process.env.PROD_GOOGLE
const google_id =
  process.env.NODE_ENV === 'development' ? dev_google_id : prod_google_id

// const axios = require('axios');
// const  response ;
export default {
  ssr: true,
  dev: process.env.NODE_ENV !== 'production',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Inhinyeru.com',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/inhinyeru.ico' }]
  },
  env: {
    API_URL: api
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~layouts/global.css'],
  // loading: { color: '39b982' },
  loading: {
    color: 'green',
    height: '3px'
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/vue-instantsearch'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

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
  axios: {
    baseURL: api,
    credentials: true
  },
  // router: {
  //   trailingSlash: true
  // },
  sitemap: {
    hostname: front,
    gzip: true,
    exclude: [
      '/dashboard/*',
      '/admin/*',
      'admin',
      '/admin/**',
      '/post/manage',
      '/blog/manage',
      '/news/manage',
      '/quotes/manage',

      '/post/create',
      '/blog/create',
      '/news/create',
      '/quotes/create',

      '/profile/edit'
    ],
    // trailingSlash: true,
    routes: async () => {
      const axios = require('axios')
      let { data: blogs } = await axios.get(api + '/blogs/sitemap')
      let { data: posts } = await axios.get(api + '/posts/sitemap')
      let { data: news } = await axios.get(api + '/news/sitemap')
      let { data: usernames } = await axios.get(api + '/userdetails/sitemap')

      let { data: blogtags } = await axios.get(api + '/blogs/tag/sitemap')

      posts = posts.map(user => `/post/${user.slug}`)
      blogs = blogs.map(user => `/blog/${user.slug}`)
      news = news.map(user => `/news/${user.slug}`)
      usernames = usernames.map(user => `/${user.username}`)

      blogtags = blogtags.map(elem => `/blog/tags/${elem.name}`)

      return []
        .concat(posts)
        .concat(blogs)
        .concat(news)
        .concat(usernames)
        .concat(blogtags)
    }
  },
  toast: {
    position: 'top-right',
    duration: 3000
  },
  robots: {
    UserAgent: '*',
    Disallow: ['/admin', '/dashboard'],
    Allow: '/'
  },
  auth: {
    strategies: {
      facebook: {
        scope: ['openid', 'profile', 'email'],
        endpoints: {
          userInfo:
            'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url},email'
        },
        clientId: fb_id,
        scope: ['public_profile', 'email']
      },
      github: {
        clientId: github_id,
        clientSecret: github_secret
      },
      google: {
        scope: [
          // 'openid',
          'profile',
          'email'
          // 'https://www.googleapis.com/auth/gmail.metadata'
        ],
        clientId: google_id,
        codeChallengeMethod: '',
        // responseType: 'code',
        responseType: 'id_token token',
        grantType: 'client_credentials'
        // access_token_endpoint:  api+"/auth/google/callback",
        // redirectUri: api+"/auth/google/callback"
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

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,

      themes: {
        dark: {
          dark: '#000000',
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: colors.grey.darken3,
          footer: '#000000',
          light: '#555353',
          cstmblue: '#1C0745',
          title: '#0000FF'
        },
        light: {
          dark: '#000000',
          primary: colors.purple,
          accent: colors.shades.black,
          secondary: colors.grey.darken1,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.red.accent3,
          success: colors.green.accent3,
          background: colors.indigo.lighten5,
          footer: '#ffffff',
          light: '#ADA8A8',
          cstmblue: '#0B8FC6',
          title: '#0000FF'
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: ['vue-instantsearch', 'instantsearch.js/es']
  },
  server: {
    //  port: 80,
    // port: 80, // default: 3000
    // host: '0.0.0.0', // default: localhost,
    // timing: falseY
  }
  // target: 'static'
}

// Note that Vuetify 1.5.x is handled by @nuxtjs/vuetify@0.x.x
// Meanwhile Vuetify 2.x.x is now handled by the last versions of the module : @nuxtjs/vuetify@1.x.x
