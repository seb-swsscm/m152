<!-- single component that is called upon in App.vue -->
<template>
  <div>
    <Carousel
      v-for="(item, i) in items"
      :key="i"
      :items="item"
      style="margin-bottom: 50px"
    />
  </div>
</template>

<script>
import Carousel from "../components/Carousel";

export default {
  name: "Home",
  components: {
    Carousel,
  },

  data() {
    return {
      items: [
        [
          {
            src: require("../assets/Oliver_Bilder/Bearbeitet/2.jpg"),
            description:
              "Ein langer Tag. Sehr interessant: Lehrlinge in freier Wildbahn zu beobachten.",
          },
          {
            src: require("../assets/Oliver_Bilder/Original/2.jpg"),
            description: "Original: ISO:80 Blende:F/1.8 Verschlusszeit:1/100",
          },
          {
            src: require("../assets/Oliver_Bilder/Bearbeitet/1.jpg"),
            description:
              "Herbstliches Nachhausekommen mit dem Rad. Besonders schön: frisch gefallene Blätter. Bearbeitet.",
          },
          {
            src: require("../assets/Oliver_Bilder/Original/1.jpg"),
            description: "Original: ISO:80 Blende:F/1.8 Verschlusszeit:1/100",
          },
          {
            src: require("../assets/Oliver_Bilder/Bearbeitet/3.jpg"),
            description:
              "Der Mensch kommt und geht, die Treppe bleibt. Ein wundervolles Andenken an die Vergänglichkeit.",
          },
          {
            src: require("../assets/Oliver_Bilder/Original/3.jpg"),
            description: "Original: ISO:80 Blende:F/1.8 Verschlusszeit:1/100",
          },
        ],
        [
          {
            src: require("../assets/Bruno_Bilder/Bearbeitet/2.jpg"),
            description:
              "gut: Klarer Fokus auf Zeittafel,	schlecht: Blur auf den Stufen etwas schwach",
          },
          {
            src: require("../assets/Bruno_Bilder/Original/2.jpg"),
            description: "Original: ISO:320 Blende:2.52 Verschlusszeit:1/100",
          },
          {
            src: require("../assets/Bruno_Bilder/Bearbeitet/1.jpg"),
            description:
              "gut: Kamera haltung und Bild Komposition,	schlecht: Fokus ist schlecht erkennbar (Gang)",
          },
          {
            src: require("../assets/Bruno_Bilder/Original/1.jpg"),
            description: "Original: ISO:500 Blende:2.52 Verschlusszeit:1/50",
          },
          {
            src: require("../assets/Bruno_Bilder/Bearbeitet/3.jpg"),
            description:
              "gut: Neue Perspektive auf einen Gleisübergang,	schlecht: Fokus nicht klar auf das Blaue Schild.",
          },
          {
            src: require("../assets/Bruno_Bilder/Original/3.jpg"),
            description: "Original: ISO:640 Blende:2.52 Verschlusszeit:1/10",
          },
        ],
        [
          {
            src: require("../assets/Jeremy_Bilder/Bearbeitet/2.jpg"),
            description:
              "Endlich zuhause. Das blaue Fahrrad steht in einem schönen Kontrast zu dem roten Baum.",
          },
          {
            src: require("../assets/Jeremy_Bilder/Original/2.jpg"),
            description: "Original: ISO:40 Blende:F/1.7 Verschlusszeit:1/124",
          },
          {
            src: require("../assets/Jeremy_Bilder/Bearbeitet/1.jpg"),
            description:
              "Wundervoller Kontrast für den letzten Abschnitts des Heimwegs.",
          },
          {
            src: require("../assets/Jeremy_Bilder/Original/1.jpg"),
            description: "Original: ISO:50 Blende:F/1.7 Verschlusszeit:1/100",
          },
          {
            src: require("../assets/Jeremy_Bilder/Bearbeitet/3.jpg"),
            description: "Der letzte Schritt in die Heimat: Ein Andenken",
          },
          {
            src: require("../assets/Jeremy_Bilder/Original/3.jpg"),
            description: "Original: ISO:200 Blende:F/1.7Verschlusszeit:1/13",
          },
        ],
        [
          {
            src: require("../assets/Sebastian_Bilder/Bearbeitet/2.jpg"),
            description: "Gut gelungen: Der Fokus.",
          },
          {
            src: require("../assets/Sebastian_Bilder/Original/2.jpg"),
            description: "Original: ISO:64 Blende:F/1.8 Verschlusszeit:1/100",
          },
          {
            src: require("../assets/Sebastian_Bilder/Bearbeitet/1.jpg"),
            description:
              "Auf dem Heimweg lässt man die Schule rechts hinter sich liegen.",
          },
          {
            src: require("../assets/Sebastian_Bilder/Original/1.jpg"),
            description: "Original: ISO:50 Blende:F/4 Verschlusszeit:1/611",
          },
          {
            src: require("../assets/Sebastian_Bilder/Bearbeitet/3.jpg"),
            description:
              "Es war ein langer Weg. Fast so lang wie dieses Geländer. Faszienierende Symbolik.",
          },
          {
            src: require("../assets/Sebastian_Bilder/Original/3.jpg"),
            description: "Original: ISO:80 Blende:F/1.8 Verschlusszeit:1/123",
          },
        ],
      ],
    };
  },
};
</script>
