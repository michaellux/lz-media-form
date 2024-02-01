<template>
  <div class="container">
    <TheDescriptionCard>
      <base-card>
        <div class="descriptioncard-img">
          <div class="descriptioncard-textblock">
            <h1 class="descriptioncard-title">Lorem Ipsum is simply</h1>
            <h2 class="descriptioncard-subtitle">Lorem Ipsum is simply</h2>
          </div>
        </div>
      </base-card>
    </TheDescriptionCard>
    <TheAuthentication>
      <base-card class="authentication-switch">
        <base-button @click="switchTab('login')" :mode="setLoginActiveTab"
          >Login</base-button
        >
        <base-button @click="switchTab('register')" :mode="setRegisterActiveTab"
          >Register</base-button
        >
      </base-card>
      <p class="authentication-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div class="authentication-form">
        <keep-alive>
          <component :is="selectedTab"></component>
        </keep-alive>
      </div>
      <!-- Now Lets have them switch component -->
    </TheAuthentication>
  </div>
</template>

<script>
import TheDescriptionCard from "./components/layouts/TheDescriptionCard";
import TheAuthentication from "./components/layouts/TheAuthentication";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";

export default {
  name: "App",
  components: {
    TheDescriptionCard,
    TheAuthentication,
    Login,
    Register,
  },
  data() {
    return {
      title: "Authentication component in VUE JS",
      selectedTab: "login",
    };
  },
  methods: {
    switchTab(tab) {
      this.selectedTab = tab;
    },
  },
  computed: {
    setLoginActiveTab() {
      return this.selectedTab === "login" ? "" : "default";
    },
    setRegisterActiveTab() {
      return this.selectedTab === "register" ? "" : "default";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap");
* {
  margin: 0;
  box-sizing: border-box;
}
:root {
  --font-family: "Poppins", sans-serif;
}
.container {
  width: auto;
  margin: 2.38rem 2.56rem;
  display: flex;
}
.descriptioncard-img {
  position: relative;
  background-color: #c4c4c4;
  background: linear-gradient(
      180deg,
      rgba(151, 118, 68, 0.35) 0%,
      rgba(0, 0, 0, 0.35) 100%
    ),
    url("../src/assets/img/cat.jpg");
  height: 825px;
  background-size: 167%;
  background-repeat: no-repeat;
  background-position: -15.4rem 0rem;
  border-radius: 1.81rem;
}
.descriptioncard-textblock {
  position: absolute;
  left: 4.3125rem;
  bottom: 3.4375rem;
}
.descriptioncard-title {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 2.31rem;
  color: #fff;
  margin-bottom: 0.3125rem;
}
.descriptioncard-subtitle {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 1.56rem;
  color: #fff;
}
.authentication-switch {
  display: flex;
  align-items: center;
  border-radius: 2.06rem;
  width: 20.56rem;
  height: 3.69rem;
  background: #f8eddd;
  padding: 0.8125rem;
  position: absolute;
  left: 3.5rem;
  top: 3rem;
}
.authentication-text {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 1rem;
  color: #5b5b5b;
  position: absolute;
  top: 10rem;
  line-height: 1.5;
}
.authentication-form {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 1rem;
  color: #000;
  position: absolute;
  top: 15.6rem;
  width: 96%;
}
@media screen and (width < 1440px) {
  .descriptioncard-img {
    background-size: auto;
    background-position: top;
  }
  .descriptioncard-textblock {
    left: 5vw;
  }
}
@media screen and (width < 1248px) {
  .authentication-switch {
    left: 0;
  }
}
@media screen and (width < 1024px) {
  .authentication-switch {
    left: 3rem;
  }
}
@media screen and (width < 900px) {
  .authentication-switch {
    left: 0rem;
  }
}
@media screen and (width <= 768px) {
  .authentication-switch {
    width: 19.69rem;
    height: 3.69rem;
  }
}
@media screen and (width <= 425px) {
  .container {
    margin: 2.38rem 0 2.38rem 1.625rem;
  }
  .authentication-form {
    width: 91%;
  }
}
</style>
