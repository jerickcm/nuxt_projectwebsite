<template>
  <v-container fluid class="ma-0 pa-0">
    <v-parallax class="ma-0 pa-0" height="900" src="/images/contactus.jpg">
      <v-row class="mt-10">
        <v-col class="col-md-6 offset-md-3">
          <v-card elevation="2" outlined tile class="ma-10 pa-10">
            <v-sheet class="ma-1 pa-1">
              <h1 class="blue--text">Contact Us</h1>
            </v-sheet>
            <v-sheet class="ma-1 pa-1">
              <h2 class="green--text">
                For all inquiries please contact us below
              </h2>
            </v-sheet>
            <form
              action="mailto:jmangaluz@gmail.com"
              method="get"
              enctype="text/plain"
            >
              <div>
                <v-text-field
                  class="ma-2 pa-2"
                  v-model="Name"
                  :error-messages="emailErrors"
                  label="Name"
                  name="name"
                  id="name"
                  required
                ></v-text-field>
                <!-- @input="$v.email.$touch()"
                  @blur="$v.email.$touch()" -->
              </div>
              <div>
                <v-text-field
                  class="ma-2 pa-2"
                  v-model="Email"
                  :error-messages="emailErrors"
                  label="Email:"
                  name="email"
                  id="email"
                  required
                  type="email"
                ></v-text-field>
                <!-- @input="$v.email.$touch()"
                  @blur="$v.email.$touch()" -->
              </div>
              <div>
                <v-textarea
                  class="ma-2 pa-2"
                  outlined
                  name="input-7-4"
                  label="Comments"
                  value="Send your comments to us."
                ></v-textarea>
              </div>
              <div>
                <v-btn
                  color="green"
                  type="submit"
                  name="submit"
                  value="Send"
                  class="white--text"
                  >Send</v-btn
                >
                <v-btn
                  color="blue"
                  type="reset"
                  name="reset"
                  value="Clear Form"
                  class="white--text"
                  >Clear Form</v-btn
                >
              </div>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
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
</template>
<script>
export default {
  middleware: 'auth',
  auth: false,
  head() {
    return {
      title: 'Contact Us ',
      meta: [
        { hid: 'Contact Us ', name: 'Contact Us ', content: 'Contact Us ' }
      ]
    }
  }
}
</script>
