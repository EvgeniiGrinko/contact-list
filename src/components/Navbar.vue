<template>
  <header class="navbar-block">
    <ul class="navbar-list">
      <li>
        <router-link class="navbar--li" to="/create">
          <a href="/create">Create contact</a>
        </router-link>
      </li>
      <li>
        <router-link class="navbar--li" to="/list">
          <a href="/list">List of Contacts</a>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
