<template>
  <!-- lets use the base-card -->
  <base-card>
    <form class="form" id="register-form">
      <div class="form-control">
        <label for="email">Email Address</label>
        <input
          placeholder="Enter your Email Address"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div class="form-control">
        <label for="username">User name</label>
        <input
          placeholder="Enter your User name"
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          placeholder="Enter your Password"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div class="form-button">
        <base-button type="button" @click="postfunction()"
          >Register</base-button
        >
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  name: "Login",
  methods: {
    postfunction() {
      var ajax = new XMLHttpRequest();
      var data = document.getElementById("register-form");
      var formdata = new FormData(data);
      ajax.open("POST", "/register", true);
      ajax.send(formdata);
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1.85rem;
}
input {
  display: block;
  width: 100%;
  border: 1px solid #9e896a;
  border-radius: 2.5rem;
  height: 3.38rem;
  padding: 1rem 2rem;
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 0.94rem;
  color: #acacac;
}
input:focus {
  outline: none;
  border-color: 1px solid #9e896a;
  background-color: #fff;
}
.form-control label {
  display: block;
  margin-bottom: 0.75rem;
}
.form-button {
  text-align: right;
  margin-top: 0.7rem;
}
.form-button button {
  width: 14.5rem;
  height: 3.06rem;
  background-color: #553e19;
}
</style>
