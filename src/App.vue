<template>
    <Suspense>
        <router-view/>
    </Suspense>
</template>

<style>
html {
    background: url("assets/background-roulette.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin: 0;
    padding: 0;
    max-width: 1080px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
