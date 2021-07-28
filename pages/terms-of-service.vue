<template>
  <v-container fluid class="">
    <v-row class="mb-5 pb-5">
      <v-container>
        <v-row>
          <v-col class=" mb-0 pb-0">
            <v-container>
              <v-row>
                <v-col
                  xs="12"
                  sm="12"
                  md="12"
                  lg="8"
                  xl="8"
                  cols="12"
                  class="pa-0 ma-0"
                >
                  <v-container class="mr-0 pr-0 tag-border">
                    <h1 class="fs-1-3">Website Terms and Conditions of Use</h1>

                    <h2>1. Terms</h2>

                    <p>
                      By accessing this Website, accessible from
                      http://www.inhinyeru.com/, you are agreeing to be bound by
                      these Website Terms and Conditions of Use and agree that
                      you are responsible for the agreement with any applicable
                      local laws. If you disagree with any of these terms, you
                      are prohibited from accessing this site. The materials
                      contained in this Website are protected by copyright and
                      trade mark law.
                    </p>

                    <h2>2. Use License</h2>

                    <p>
                      Permission is granted to temporarily download one copy of
                      the materials on Project Website's Website for personal,
                      non-commercial transitory viewing only. This is the grant
                      of a license, not a transfer of title, and under this
                      license you may not:
                    </p>

                    <ul>
                      <li>modify or copy the materials;</li>
                      <li>
                        use the materials for any commercial purpose or for any
                        public display;
                      </li>
                      <li>
                        attempt to reverse engineer any software contained on
                        Project Website's Website;
                      </li>
                      <li>
                        remove any copyright or other proprietary notations from
                        the materials; or
                      </li>
                      <li>
                        transferring the materials to another person or "mirror"
                        the materials on any other server.
                      </li>
                    </ul>

                    <p>
                      This will let Project Website to terminate upon violations
                      of any of these restrictions. Upon termination, your
                      viewing right will also be terminated and you should
                      destroy any downloaded materials in your possession
                      whether it is printed or electronic format.
                    </p>

                    <h2>3. Disclaimer</h2>

                    <p>
                      All the materials on Project Website’s Website are
                      provided "as is". Project Website makes no warranties, may
                      it be expressed or implied, therefore negates all other
                      warranties. Furthermore, Project Website does not make any
                      representations concerning the accuracy or reliability of
                      the use of the materials on its Website or otherwise
                      relating to such materials or any sites linked to this
                      Website.
                    </p>

                    <h2>4. Limitations</h2>

                    <p>
                      Project Website or its suppliers will not be hold
                      accountable for any damages that will arise with the use
                      or inability to use the materials on Project Website’s
                      Website, even if Project Website or an authorize
                      representative of this Website has been notified, orally
                      or written, of the possibility of such damage. Some
                      jurisdiction does not allow limitations on implied
                      warranties or limitations of liability for incidental
                      damages, these limitations may not apply to you.
                    </p>

                    <h2>5. Revisions and Errata</h2>

                    <p>
                      The materials appearing on Project Website’s Website may
                      include technical, typographical, or photographic errors.
                      Project Website will not promise that any of the materials
                      in this Website are accurate, complete, or current.
                      Project Website may change the materials contained on its
                      Website at any time without notice. Project Website does
                      not make any commitment to update the materials.
                    </p>

                    <h2>6. Links</h2>

                    <p>
                      Project Website has not reviewed all of the sites linked
                      to its Website and is not responsible for the contents of
                      any such linked site. The presence of any link does not
                      imply endorsement by Project Website of the site. The use
                      of any linked website is at the user’s own risk.
                    </p>

                    <h2>7. Site Terms of Use Modifications</h2>

                    <p>
                      Project Website may revise these Terms of Use for its
                      Website at any time without prior notice. By using this
                      Website, you are agreeing to be bound by the current
                      version of these Terms and Conditions of Use.
                    </p>

                    <h2>8. Your Privacy</h2>

                    <p>Please read our Privacy Policy.</p>

                    <h2>9. Governing Law</h2>

                    <p>
                      Any claim related to Project Website's Website shall be
                      governed by the laws of ph without regards to its conflict
                      of law provisions.
                    </p>
                    <v-row>
                      <v-col>
                        <script
                          async
                          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                        ></script>
                        <script>
                          ;(adsbygoogle = window.adsbygoogle || []).push({})
                        </script>
                        <ins
                          class="adsbygoogle"
                          style="display:block"
                          data-ad-client="ca-pub-3213536425475125"
                          data-ad-slot="3715096457"
                          data-ad-format="auto"
                          data-full-width-responsive="true"
                        ></ins>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
                <v-col
                  xs="12"
                  sm="12"
                  md="12"
                  lg="4"
                  xl="4"
                  cols="12"
                  class="pa-0 ma-0"
                >
                  <v-container class="mr-0 pr-0">
                    <v-row>
                      <v-col class="ma-0 mt-0 pt-0">
                        <BlogList
                          :blogs_in_random="blogs_in_random"
                          title="Random Blogs"
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="ma-0 mt-0 pt-0">
                        <TagsIndex
                          :tags="tags"
                          :load_tags="load_tags"
                          :total_tags="total_tags"
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="ma-0 mt-0 pt-0">
                        <Tools />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="ma-0 mt-0 pt-0">
                        <Arithmetic />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="ma-0 mt-0 pt-0">
                        <BlogList
                          :blogs_in_random="blogs_in_latest"
                          title="Latest Blogs"
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <Services />
  </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: 'Terms of Service ',
      meta: [
        {
          hid: 'Terms of Service ',
          name: 'Terms of Service',
          content: 'Terms of Service'
        }
      ]
    }
  },
  data: () => ({
    transparent: 'rgba(255, 255, 255, 0)',
    blogs_load: false,
    news_load: false,
    posts_load: false,
    selection: 0,
    content: [],
    news: [],
    posts: [],
    nuxt: [],
    selectedItem: 0,
    show: true,
    title: '',
    model: 6,
    rounded: ['0', 'sm', 'md', 'lg', 'xl', 'pill', 'circle'],
    links: [],

    posts_content: 0,
    news_content: 0,

    tags: [],
    load_tags: false,
    total_tags: 0,
    height: '200px',
    blogs_load: false,
    blogs_content: [],
    blogs_total: 0,

    nuxt: [],
    laravel: [],
    vue: [],
    load_nuxt: false,
    load_laravel: false,
    load_vue: false,

    show_nuxt: false,
    show_laravel: false,
    show_vue: false,
    blogs_in_random: [],
    blogs_in_latest: [],
    page: 2
  }),
  layout: 'default',

  async fetch() {
    const BlogsRandom = await this.$axios.$get(`api/blog/index/10`)
    this.blogs_in_random = BlogsRandom.data

    const Blogslatest = await this.$axios.$get(`api/blog/latest/10`)
    this.blogs_in_latest = Blogslatest.data

    this.load_tags = true
    const tags = await this.$axios.$get(`api/tags`)
    this.load_tags = false
    this.tags = tags.data
    this.total_tags = tags.total
  }
}
</script>
<style scoped>
.dont-break-out {
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
.font-lulu {
  font-family: 'Lulu', sans-serif;
}
.font-halimun {
  font-family: 'Halimun', sans-serif;
}
/* .font-kalamreg {
  font-family: 'Kalam-Regular', sans-serif;
  line-height: 1.2;
} */
.font-barlowreg {
  font-family: 'Barlow-Regular', sans-serif;
}

.title1 {
  text-decoration: none;
}
.v-application a {
  color: rgb(66, 77, 238);
  text-decoration: none;
}

.adj-title {
  min-height: 2rem;
  line-height: 1rem;
  margin: 0px;
  padding: 0px;
}

.hr-blue {
  border: 3px solid blue;
}
.hr-red {
  border: 3px solid red;
}
.hr-orange {
  border: 3px solid orange;
}
.hr-black {
  border: 3px solid black;
}
ul.clean {
  list-style: none !important;
  list-style-type: none !important;
}
.text-justify {
  text-align: justify;
  text-justify: inter-word;
}
.hr-brown {
  border: 3px solid brown;
}
.tag-border {
  border-right: 0.4rem solid #add8e6;
  border-top: 0.4rem solid #add8e6;
}
</style>
