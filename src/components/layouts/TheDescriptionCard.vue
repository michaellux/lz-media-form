<template>
  <section class="description-card">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "TheDescriptionCard",
  props: {
    title: String,
  },
};
</script>

<style >
.description-card {
  width: 72%;
  margin-right: 3.4rem;
  max-width: 46.06rem;
}
@media screen and (width < 1024px) {
  .description-card {
    display: none;
  }
}
</style>