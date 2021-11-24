<template>
  <div class="home">
    <img width="100" alt="Vue logo" src="../assets/marvel_logo.svg" />
    <HeroListVue />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { HeroListVue } from "@/heroes/primary/ui/hero-list";

@Options({
  name: "Home",
  components: {
    HeroListVue,
  },
})
export default class Home extends Vue {}
</script>