<script setup>
    import {LocalBaseStore} from "@/LocalBaseStore";
    import {onMounted, ref} from "vue";
    import RedButtonPrize from "@/components/RedButtonPrize.vue";

    const db = new LocalBaseStore('app');

    const inputName         = ref(null);
    const inputEmail        = ref(null);
    const completed         = ref(false);
    const validationError   = ref(false);
    const fireworks         = ref(false);
    const video             = ref(true);
    const game              = ref(false);
    let videoPlayer         = null;
    let cnt                 = 0;
    const videos = [
        'videos/Gold-Chips.mp4',
        'videos/CHILL-Vertical-Video.mp4',
        'videos/Gold-Chips.mp4',
        'videos/Drifter-Expo-2023-Portrait.mp4',
    ];
    let n = videos.length;

    const validate = () => !(inputName.value === null || inputEmail.value === null);

    const videoTimer = () => setTimeout(() => clear(), 20000);

    onMounted(() => {
        videoPlayer = window.document.getElementById('video');
        videoPlayer.addEventListener('ended', next, false);
        next(0);
    });

    const store = () => {
        if ( ! validate()) {
            validationError.value = true;
            return;
        }
        db.add('contacts', {
            name: inputName.value,
            email: inputEmail.value,
        }).then(() => {
            completed.value     = true;
            inputName.value     = null;
            inputEmail.value    = null;
            // videoTimer();
        });
    }

    const clear = () => {
        validationError.value   = false;
        completed.value         = false;
        fireworks.value         = false;
        game.value              = false;
        next(0)
    }

    const stopVideo = () => {
        game.value  = true;
        video.value = false;
        clearTimeout(videoTimer);
    }

    function next(start) {
        if ( ! isNaN(start)) {
            cnt = start;
        } else {
            cnt++;
        }
        if (cnt < n) {
            playVideo(cnt);
        } else {
            cnt = 0;
            playVideo(cnt);
        }
    }

    function playVideo(x)
    {
        let mp4 = videos[x];
        videoPlayer.src = mp4;
        videoPlayer.load();
        videoPlayer.play();
    }

    const redButton = () => {
        const audio = document.getElementById('audio');
        audio.play();
        fireworks.value = true;
        videoTimer();
    }
</script>
<template>
    <video playsinline muted src="videos/Gold-Chips.mp4" preload="none" poster="" class="z-50" id="video" v-show="video" @click="stopVideo()" />
<!--        <source src="videos/Gold-Chips.mp4" type="video/mp4" id="video-source">-->
<!--    </video>-->
    <div class="pyro" v-show="fireworks">
        <div class="before"></div>
        <div class="after"></div>
    </div>
    <RedButtonPrize v-show="fireworks" />
    <audio id="audio">
        <source src="Security-Breach-Alarm-Siren.mp3" type="audio/mpeg">
    </audio>
    <section class="container max-w-7xl mx-auto" v-show="game">
        <div class="text-center">
          <img alt="Vue logo" src="../assets/vapinggroup-logo.png" class="mx-auto">
        </div>
        <div class="text-center text-white mt-10">
            <h1 class="text-white text-6xl">Join Our Mailing List</h1>
            <p class="mt-8">
              By completing the form below you are agreeing to receive marketing emails from the The Vaping Group.
            </p>
            <div class="mt-28" v-if="completed">
              <div class="mt-4">
                  <iframe width="900" height="800" src="roulettewheel.html" class="mx-auto"></iframe>
              </div>
              <button type="button" @click="clear" class="btn-primary">
                  Reset
              </button>
              <br />
              <button @click="redButton" type="button" class="mt-28 btn-do-not-push">
                  Don't<br />Push
              </button>
            </div>
            <div class="mt-28" v-else>
                <div class="grid grid-cols-1 gap-4">
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
                  <button type="button" class="btn-primary" @click="store">
                      Enter
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
    max-width: 65%;
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
video {
    background-color: #000000;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}
</style>
