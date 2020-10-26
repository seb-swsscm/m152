<!-- single component that is called upon in App.vue -->
<template>
  <v-container>
    <v-row class="justify-center">
      <v-col>
        <video controls>
          <source src="../assets/Covid.webm" type="video/webm" />

          Sorry, your browser doesn't support embedded videos.
        </video>
      </v-col>
    </v-row>
    <v-row>
      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/EEIk7gwjgIM"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Video",
  components: {},

  data() {
    return {
      items: [],
    };
  },
};
</script>
