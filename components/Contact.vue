<template>
  <v-sheet color="blue" class="pa-2 pt-5">
    <v-container>
      <v-card outlined>
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
              label="Name"
              name="name"
              id="name"
              required
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              class="ma-2 pa-2"
              label="Email:"
              name="email"
              id="email"
              required
              type="email"
            ></v-text-field>
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
          <div class="ma-2 pa-2">
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
    </v-container>
  </v-sheet>
</template>
