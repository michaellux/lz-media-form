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
  margin-right: 6.9375rem;
}
</style>