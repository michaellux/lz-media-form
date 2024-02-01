<template>
  <button :class="mode">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    mode: String,
  },
};
</script>

<style scoped>
button {
  border-radius: 2.06rem;
  width: 100%;
  height: 2.5rem;
  background: #9e896a;
  color: white;
  cursor: pointer;
  border: none;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 1rem;
}

button:hover,
button:active {
  background-color: #9e896a;
}

.default {
  background-color: transparent;
  color: #9e896a;
  border: none;
}

.default:hover,
.default:active {
  background-color: #eee;
}
</style>
