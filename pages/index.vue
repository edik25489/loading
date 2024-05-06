<script setup>
const drawer = ref(false)
</script>


<template>

    <v-app-bar
        class="px-3"
        density="compact"
        flat
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
            class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
      </template>

      <v-spacer></v-spacer>

      <v-tabs
          color="grey-darken-2"
      >
        <v-tab>
          <NuxtLink
              class="text-decoration-none"
              to="/about">
            примеры работ
          </NuxtLink>
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <v-avatar
          class="hidden-sm-and-down"
          color="grey-darken-1"
          size="32"
      ></v-avatar>
    </v-app-bar>

  <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'left' : undefined"
      temporary
  >
    <div>
      <NuxtLink to="/about">примеры работ</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
  </v-navigation-drawer>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col
              class="mx-auto"
              cols="10"
              md="8"
          >
            <v-sheet
                min-height="300"
                rounded="lg"
            >
              <v-card
                  class="mx-auto"
              >
                <v-img
                    class="align-end text-white"
                    height="200"
                    src="/img/alfa.jpg"
                    cover
                >
                  <v-card-title>Получи подарок от меня</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">

                </v-card-subtitle>

                <v-card-text>

                  <div>Закажи Альфа-карту по моей ссылке и получи 500 руб.</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                      href="https://alfa.me/rQ7iOS"
                      color="orange"
                      text="перейти к предложению"
                      target="_blank"
                  ></v-btn>

                </v-card-actions>
              </v-card>
            </v-sheet>
          </v-col>

          <v-col
              cols="12"
              md="4"
          >
            <v-sheet
                min-height="300"
                rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

</template>