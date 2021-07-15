<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/dashboard/2">Dashboard 2</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLayout"
};
</script>

<style>
a {
  text-decoration: none;
}

nav ul {
  list-style-type: none;
  padding-left: 0;
  background: #999999;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #ffffff;
}

li {
  display: inline;
  padding-left: 1.5rem;
}
</style>