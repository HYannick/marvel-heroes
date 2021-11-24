<template src="./HeroList.html"></template>

<script lang="ts" src="./HeroList.component.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero-list-wrapper {
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  > div {
    flex: 1;
    .hero-thumbnail {
      width: 200px;
      height: 200px;
      overflow: hidden;
      border-radius: 10px;
      object-fit: cover;
    }
  }
}
</style>
