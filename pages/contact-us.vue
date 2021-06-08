<template>
  <v-container fluid class="ma-0 pa-0">
    <v-parallax class="ma-0 pa-0" height="900" src="/images/contactus.jpg">
      <v-row justify="center" align="center" class="mt-10">
        <v-col cols="4" sm="4" md="4">
          <v-card elevation="2" outlined tile class="ma-10 pa-10">
            <h1>Contact Us</h1></v-card
          >
        </v-col>
        <v-col cols="4" sm="4" md="4">
          <v-card elevation="2" outlined tile class="ma-10 pa-10">
            <h2>For all inquiries please contact us below</h2>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="mt-10">
        <v-col cols="4" sm="8" md="6">
          <v-card elevation="2" outlined tile class="ma-10 pa-10">
            <form
              action="mailto:jmangaluz@gmail.com"
              method="get"
              enctype="text/plain"
            >
              <div>
                <label for="name"
                  >Name:
                  <input type="text" name="name" id="name" />
                </label>
              </div>
              <div>
                <label for="email"
                  >Email:
                  <input type="text" name="email" id="email" />
                </label>
              </div>
              <div>
                <label>Comments:</label>
                <br />
                <textarea name="comments" rows="12" cols="35">
Send your comments to us.</textarea
                >
              </div>
              <div>
                <input color="green" type="submit" name="submit" value="Send" />
                <input
                  color="blue"
                  type="reset"
                  name="reset"
                  value="Clear Form"
                />
              </div>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
  </v-container>
</template>
<script>
export default {
  auth: false
}
</script>
