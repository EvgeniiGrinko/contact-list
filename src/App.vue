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
.inline-div {
  display: inline;
}
.tdc {
  width: 100px;
}
.td {
  max-width: 150px;
}
.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
table {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14px;
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
  border-color: balck;
}
th {
  background: #575e7f;
  color: white;
  text-shadow: 0 1px 1px #2d2020;
  padding: 10px 20px;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: black;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

td:hover {
  background: #f0faf9;
}

td {
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: black;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

td {
  padding: 10px 20px;
  background: white;
}

h1 {
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}
form {
  padding-left: 25px;
}
.button {
  background-color: #575e7f;
  color: white;
  text-shadow: 0 1px 1px black;
}
.button:hover {
  background-color: #858ba2;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #575e7f;
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
  background-color: #858ba2;
}
</style>
