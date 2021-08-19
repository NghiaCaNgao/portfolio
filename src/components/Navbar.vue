<template>
  <div class="nav" id="nav">
    <div>
      <div class="logo">
        <div class="logo-icon">
          <img src="../assets/images/logo.png" alt="logo" />
        </div>
        <h1>NCN</h1>
      </div>
      <div class="links">
        <a href="/">Home</a>
        <a href="/">My hobby</a>
        <a href="/">Project</a>
        <a href="/">Contact</a>
        <button role="btn">ENG</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
@import "../assets/styles/navbar.style.scss";
</style>