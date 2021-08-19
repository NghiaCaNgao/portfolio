<template>
  <div class="page home">
    <div class="content">
      <h1 class="hello wow animate__bounceIn">Hello !</h1>
      <div class="text-move">
        <h1>I</h1>
        <div id="wrap_text" class="wrap-text">
          <h1 class="text-item">am Nghia</h1>
          <h1 class="text-item">wants to become a fullstack dev</h1>
          <h1 class="text-item">like writing, love listening, and more ...</h1>
        </div>
      </div>
      <h1 class="text-more wow animate__bounceIn">
        Change your thoughts and you will change your world
      </h1>
      <div class="social wow animate__bounceIn">
        <a href="/"
          ><unicon name="facebook-f" width="30" height="30"></unicon
        ></a>
        <a href="/"><unicon name="youtube" width="30" height="30"></unicon></a>
        <a href="/"><unicon name="github" width="30" height="30"></unicon></a>
        <a href="/"><unicon name="linkedin" width="30" height="30"></unicon></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    textMove() {
      const element = document.getElementsByClassName("text-item");
      const container = document.getElementById("wrap_text");
      const length = element.length;
      let count = 0;
      element[0].classList.add("visible");
      container.addEventListener("animationiteration", function () {
        element[count].classList.remove("visible");
        count = ++count >= length ? 0 : count;
        element[count].classList.add("visible");
      });
    },
  },
  mounted() {
    this.textMove();
  },
};
</script>
<style lang="scss">
@import "../assets/styles/home.style.scss";
</style>