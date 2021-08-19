<template>
  <div id="app">
    <Navbar />
    <div id="fullpage">
      <Home class="section" />
      <Introduce class="section" />
      <Project class="section" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";
import Introduce from "./views/Introduce.vue";
import Project from "./views/Project.vue"
import { WOW } from "wowjs";
import fullpage from "fullpage.js";

export default {
  name: "App",
  components: {
    Home,
    Introduce,
    Project,
    Navbar,
  },
  mounted() {
    new fullpage("#fullpage", {
      autoScrolling: true,
      scrollHorizontally: true,
      scrollingSpeed: 400,
      onLeave: function (origin, destination) {
        if (destination.index === 0) {
          const nav = document.getElementById("nav");
          nav.style.backgroundColor = "transparent";
        }
        if (origin.index === 0) {
          const nav = document.getElementById("nav");
          nav.style.backgroundColor = "black";
        }
      },
    });
    new WOW().init();
  },
};
</script>