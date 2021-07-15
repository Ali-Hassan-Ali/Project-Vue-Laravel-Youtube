<template>
  <div>
    <p>Login uses the public layout.</p>
    <p>
      <router-link to="/login" class="button">Login Page</router-link>
    </p>

    <br>

    <p>Dashboard page uses the app layout.</p>
    <p>
      <router-link to="/dashboard" class="button">Dashboard Page</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
.button {
  background-color: #999999;
  padding: 1rem;
  border-radius: 0.5rem;
  color: #ffffff;
  text-decoration: none;
}
</style>
