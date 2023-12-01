<template>
    <div class="sidebar">
      <p class="logo">Logo</p>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    msg: String
  }
}
</script>

<style>
    .sidebar {
        padding: 20px;
        background-color: #656565;
        height: 100vh;
    }
    .logo {
    background-color: #DBDBDB;
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    text-align: center;
    border-radius: 5px;
    font-weight: bold;
    color: #656565;
    }

    nav {
    display: flex;
    flex-direction: column;
    }

    nav a {
    text-decoration: none;
    max-width: 100%;
    padding-left: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-weight: bold;
    color: #2c3e50;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    }

    nav a.router-link-exact-active {
    color: #656565;
    background-color: #FFFFFF;
    border-radius: 5px;
    }
</style>