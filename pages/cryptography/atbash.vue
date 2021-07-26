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
                    <v-row>
                      <v-col> <h1>Atbash Cipher | Crytography tool</h1></v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <p>
                          The Atbash cipher is a particular type of
                          monoalphabetic cipher formed by taking the alphabet
                          and mapping it to its reverse, so that the first
                          letter becomes the last letter, the second letter
                          becomes the second to last letter, and so on. (A -> Z,
                          B -> Y)
                        </p></v-col
                      >
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-card class="ma-2 pa-2">
                          <v-text-field
                            v-model="atbash"
                            class="ma-2 pa-2"
                            label="Enter a String"
                            name="name"
                            id="name"
                            required
                          ></v-text-field>
                          <v-btn
                            class="ma-2 pa-2"
                            dark
                            color="blue"
                            @click.prevent="clearfields"
                            >Clear</v-btn
                          >
                          <v-btn
                            class="ma-2 pa-2"
                            dark
                            color="blue"
                            @click.prevent="atbash_convert"
                            >Convert</v-btn
                          >
                          <v-text-field
                            v-model="atbash_result"
                            class="ma-2 pa-2"
                            label="Output"
                          ></v-text-field> </v-card
                      ></v-col>
                    </v-row>
                    <v-row>
                      <v-col style="">
                        <p>Es5 Code:</p>
                        <div>
                          <figure class="table" style="float:left;width:40%;">
                            <table>
                              <tbody>
                                <tr>
                                  <td style="background-color:hsl(0, 0%, 0%);">
                                    <p>
                                      <span style="color:#d4d4d4;">&nbsp; </span
                                      ><span style="color:#9cdcfe;"
                                        >methods:</span
                                      ><span style="color:#d4d4d4;"
                                        >&nbsp;{</span
                                      >
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#dcdcaa;"
                                        >atbash_convert</span
                                      ><span style="color:#d4d4d4;"
                                        >()&nbsp;{</span
                                      >
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#569cd6;">var</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#9cdcfe;">result</span
                                      ><span style="color:#d4d4d4;"
                                        >&nbsp;=&nbsp;</span
                                      ><span style="color:#ce9178;">''</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#569cd6;">var</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#9cdcfe;">str</span
                                      ><span style="color:#d4d4d4;"
                                        >&nbsp;=&nbsp;</span
                                      ><span style="color:#569cd6;">this</span
                                      ><span style="color:#d4d4d4;">.</span
                                      ><span style="color:#9cdcfe;"
                                        >atbash</span
                                      >
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#9cdcfe;">str</span
                                      ><span style="color:#d4d4d4;">.</span
                                      ><span style="color:#dcdcaa;">split</span
                                      ><span style="color:#d4d4d4;">(</span
                                      ><span style="color:#ce9178;">''</span
                                      ><span style="color:#d4d4d4;">).</span
                                      ><span style="color:#dcdcaa;">map</span
                                      ><span style="color:#d4d4d4;">(</span
                                      ><span style="color:#9cdcfe;">letter</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#569cd6;">=&gt;</span
                                      ><span style="color:#d4d4d4;"
                                        >&nbsp;{</span
                                      >
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#9cdcfe;">result</span
                                      ><span style="color:#d4d4d4;"
                                        >&nbsp;+=&nbsp;</span
                                      ><span style="color:#569cd6;">this</span
                                      ><span style="color:#d4d4d4;">.</span
                                      ><span style="color:#dcdcaa;"
                                        >reverse_letter</span
                                      ><span style="color:#d4d4d4;">(</span
                                      ><span style="color:#9cdcfe;">letter</span
                                      ><span style="color:#d4d4d4;">)</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</span
                                      >
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#569cd6;">this</span
                                      ><span style="color:#d4d4d4;">.</span
                                      ><span style="color:#9cdcfe;"
                                        >atbash_result</span
                                      ><span style="color:#d4d4d4;"
                                        >&nbsp;=&nbsp;</span
                                      ><span style="color:#9cdcfe;"
                                        >result</span
                                      >
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;},</span
                                      >
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#dcdcaa;"
                                        >reverse_letter</span
                                      ><span style="color:#d4d4d4;">(</span
                                      ><span style="color:#9cdcfe;">letter</span
                                      ><span style="color:#d4d4d4;"
                                        >)&nbsp;{</span
                                      >
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">switch</span
                                      ><span style="color:#d4d4d4;"
                                        >&nbsp;(</span
                                      ><span style="color:#9cdcfe;">letter</span
                                      ><span style="color:#d4d4d4;"
                                        >)&nbsp;{</span
                                      >
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'a'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'z'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'A'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'Z'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'b'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'Y'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'B'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'y'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'C'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'X'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'c'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'x'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'D'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'W'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'d'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'w'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'E'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'V'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'e'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'v'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'F'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'U'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'f'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'u'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'G'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'T'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'g'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'t'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'H'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'S'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'h'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'s'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'I'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'R'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'i'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'r'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'J'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'Q'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'j'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'q'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'K'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'P'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'k'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'p'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'L'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'O'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'l'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'o'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'M'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'N'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'m'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'n'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'N'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'M'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'n'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'m'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'O'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'L'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'o'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'l'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'P'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'K'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'p'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'k'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'Q'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'J'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'q'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'j'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'R'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'I'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'r'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'i'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'S'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'H'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'s'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'h'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'T'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'G'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'t'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'g'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'U'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'F'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'u'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'f'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'V'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'E'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'v'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'e'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'W'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'D'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'w'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'d'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'X'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'C'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'x'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'c'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'Y'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'B'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'y'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'b'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'Z'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'A'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">case</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'z'</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#ce9178;">'a'</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                                      ><span style="color:#c586c0;"
                                        >default</span
                                      ><span style="color:#d4d4d4;">:</span>
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                      ><span style="color:#c586c0;">return</span
                                      ><span style="color:#d4d4d4;">&nbsp;</span
                                      ><span style="color:#9cdcfe;"
                                        >letter</span
                                      >
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span
                                      >
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;}</span
                                      >
                                    </p>
                                    <p>
                                      <span style="color:#d4d4d4;"
                                        >&nbsp;&nbsp;},</span
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </figure>
                          <p>
                            &nbsp;&nbsp;
                          </p>
                        </div>
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
      title: 'Cryptography | Atbash ',
      meta: [
        {
          hid: 'Cryptography | Atbash ',
          name: 'Cryptography | Atbash',
          content: 'Cryptography | Atbash'
        }
      ]
    }
  },
  data: () => ({
    atbash: '',
    atbash_result: '',
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
  methods: {
    clearfields() {
      this.atbash = ''
      this.atbash_result = ''
    },
    atbash_convert() {
      var result = ''
      var str = this.atbash
      str.split('').map(letter => {
        result += this.reverse_letter(letter)
      })
      this.atbash_result = result
    },
    reverse_letter(letter) {
      switch (letter) {
        case 'a':
          return 'z'
        case 'A':
          return 'Z'
        case 'b':
          return 'Y'
        case 'B':
          return 'y'
        case 'C':
          return 'X'
        case 'c':
          return 'x'
        case 'D':
          return 'W'
        case 'd':
          return 'w'
        case 'E':
          return 'V'
        case 'e':
          return 'v'
        case 'F':
          return 'U'
        case 'f':
          return 'u'
        case 'G':
          return 'T'
        case 'g':
          return 't'
        case 'H':
          return 'S'
        case 'h':
          return 's'
        case 'I':
          return 'R'
        case 'i':
          return 'r'
        case 'J':
          return 'Q'
        case 'j':
          return 'q'
        case 'K':
          return 'P'
        case 'k':
          return 'p'
        case 'L':
          return 'O'
        case 'l':
          return 'o'
        case 'M':
          return 'N'
        case 'm':
          return 'n'
        case 'N':
          return 'M'
        case 'n':
          return 'm'
        case 'O':
          return 'L'
        case 'o':
          return 'l'
        case 'P':
          return 'K'
        case 'p':
          return 'k'
        case 'Q':
          return 'J'
        case 'q':
          return 'j'
        case 'R':
          return 'I'
        case 'r':
          return 'i'
        case 'S':
          return 'H'
        case 's':
          return 'h'
        case 'T':
          return 'G'
        case 't':
          return 'g'
        case 'U':
          return 'F'
        case 'u':
          return 'f'
        case 'V':
          return 'E'
        case 'v':
          return 'e'
        case 'W':
          return 'D'
        case 'w':
          return 'd'
        case 'X':
          return 'C'
        case 'x':
          return 'c'
        case 'Y':
          return 'B'
        case 'y':
          return 'b'
        case 'Z':
          return 'A'
        case 'z':
          return 'a'
        // Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
        // Zz Yy Xx Ww Vv Uu Tt Ss Rr Qq Pp Oo Nn Mm Ll Kk Jj Ii Hh Gg Ff Ee Dd Cc Bb Aa
        default:
          // case letter:
          return letter
      }
    }
  },
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
