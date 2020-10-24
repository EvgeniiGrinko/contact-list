<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar },
};
</script>

<style>
h1 {
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}
form {
  padding-left: 25px;
}
#submit-btn {
  background-color: black;
  color: white;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #11010c;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 10px 12px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  color: white;
  background-color: #0c6bf4;
}
</style>
