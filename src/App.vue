<template>
  <div id="app">
    <div class="navigation">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/feature">Feature Page</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body,
html {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  margin: 0;
  padding: 0;
}

label {
  width: 100%;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  border: solid;
  display: block;
  border-color: #eee;
  margin: 0;
  font-size: 1rem;
}
button {
  padding: 10px;
  background-color: #eeee;
  border: solid;
  border-width: 1px;
  border-color: #b1b1b1;
  width: 100%;
  &:hover {
    background-color: #b1b1b1;
  }
  font-size: 1rem;
}
h1,
h2,
h3 {
  padding-top: 0;
  margin-top: 0;
}
.row {
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
}
.padding-top-30 {
  padding-top: 30px;
}
.padding-top-15 {
  padding-top: 15px;
}
.login {
  display: block;
  max-width: 500px;
  margin: 0 auto;
}
h1 {
  padding-left: 15px;
}
li {
  text-decoration: none;
  list-style-type: none;
  .router-link-exact-active {
    font-weight: bold;
  }
}
.navigation {
  width: 170px;
  height: 100%;
  position: fixed;
  background-color: #eee;
  padding: 15px;
}
.page {
  margin-left: 200px;
  padding: 15px;
}
.padding-15 {
  padding: 15px;
}
.check {
  display: block;
  padding-right: 15px;
  height: 50px;
  float: left;
  input {
    width: auto;
    margin: 0 auto;
  }
}
.features {
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  display: flex;
  & > div {
    width: 50%;
    text-align: center;
  }
}
</style>
