<template>
  <section class="authentication">
    <p class="authentication-title">Welcome to lorem..!</p>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "TheAuthentication",
  props: {
    title: String,
  },
};
</script>

<style >
.authentication {
  position: relative;
  width: 50%;
  margin-top: 6.6875rem;
  margin-bottom: 6.6875rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 28.38rem;
}
.authentication-title {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 1rem;
  color: #000;
  position: absolute;
  left: 8.8rem;
}
@media screen and (width < 1248px) {
  .authentication-title {
    left: 0;
  }
}
@media screen and (width < 1024px) {
  .authentication-title {
    left: 8rem;
  }
}
@media screen and (width < 900px) {
  .authentication {
    width: 90%;
  }
  .authentication-title {
    left: 0;
  }
}
@media screen and (width <= 768px) {
}
</style>