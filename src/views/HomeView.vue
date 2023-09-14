<script setup>
import {LocalBaseStore} from "@/LocalBaseStore";
import {ref} from "vue";

const db = new LocalBaseStore('app');

const inputName = ref(null);
const inputEmail = ref(null);
const completed = ref(false);
const validationError = ref(false);


const validate = () => !(inputName.value === null || inputEmail.value === null);

const store = () => {
    if ( ! validate()) {
        validationError.value = true;
        return;
    }
    db.add('contacts', {
        name: inputName.value,
        email: inputEmail.value,
    }).then(() => {
        completed.value = true;
        inputName.value = null;
        inputEmail.value = null;
        /* eslint-disable no-console */
        // import('../components/RouletteWheel.vue').then(view => {
        //     wheel.value = view.default;
        // })
    });
}

const clear = () => {
    validationError.value = false;
    completed.value = false;
}
</script>
<template>
  <section class="container max-w-7xl mx-auto">
      <div class="text-center">
          <img alt="Vue logo" src="../assets/vaping-group-logo.png" class="mx-auto">
      </div>
      <div class="text-center text-white mt-10">
          <h1 class="text-white text-6xl">Join Our Mailing List</h1>
          <p class="mt-8">
              By completing the form below you are agreeing to receive marketing emails from the The Vaping Group.
          </p>
          <div class="mt-28" v-if="completed">
              <h3 class="text-6xl text-center">
                  Spin the roulette wheel to win a prize
              </h3>
              <div class="mt-4">
<!--                  <component :is="wheel"></component>-->
                  <iframe width="800" height="800" src="/roulettewheel.html?v=2000" class="mx-auto"></iframe>
              </div>
              <button type="button" @click="clear" class="mt-28">
                  Clear
              </button>
          </div>
          <div class="mt-28" v-else>
              <div class="grid grid-cols-2 gap-4">
                  <div>
                      <label class="block">Name</label>
                      <input v-model="inputName" type="text" name="name" class="w-full" placeholder="Enter your name" />
                  </div>
                  <div>
                      <label class="block">Email Address</label>
                      <input v-model="inputEmail" type="email" name="email" class="w-full" placeholder="Enter your email address" />
                  </div>
              </div>
              <div class="mt-28" v-if="validationError">
                  <div class="w-2/4 mx-auto bg-red-400 text-red-800 p-4 rounded-lg">
                      Please enter your name and a valid email address
                  </div>
              </div>
              <div class="mt-28">
                  <button type="button" @click="store">
                      Submit
                  </button>
              </div>
          </div>
      </div>
  </section>
</template>
<style scoped>
label {
    font-weight: bold;
}
input {
    padding: 15px 20px;
    color: #000000 !important;
    border-radius: 20px;
    border: 2px solid #989898;
}
input:focus {
    border: 2px solid blue;
}
button {
    background-color: #989898;
    padding: 20px 60px;
    border-radius: 20px;
    font-weight: bold;
}
</style>
