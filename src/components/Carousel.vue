<template>
  <v-container class="heroBlock">
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-container fill-height fluid pa-0 ma-0 pb-3>
          <v-layout fill-height align-end pb-4 mb-4>
            <v-flex xs12>
              <v-card color="#084C61" class="pa-2">
                <span class="headline white--text" v-text="item.description">
                </span>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>