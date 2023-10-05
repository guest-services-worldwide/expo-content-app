<script setup>

import {onMounted} from "vue";
var poster = ["https://glpjt.s3.amazonaws.com/so/av/vs8s3.png", "https://glpjt.s3.amazonaws.com/so/av/vs12s3.png", "https://glpjt.s3.amazonaws.com/so/av/vs21s3.png", "https://glpjt.s3.amazonaws.com/so/av/vs2s3.png"]
var videos = ["videos/Gold-Chips.mp4", "videos/CHILL-Vertical-Video.mp4", "videos/Drifter-Expo-2023-Portrait.mp4", "https://glpjt.s3.amazonaws.com/so/av/vs2s3.mp4"]
var vid = window.document.getElementById("vid");
var n = videos.length;
var cnt = 0;
onMounted(() => {
    vid = window.document.getElementById("vid");
    vid.addEventListener('ended', next, false);
    console.log('Video:', vid);
});

function playVideo(x)
{
    var png = poster[x];
    console.log('poster: ' + png);
    var mp4 = videos[x];
    console.log('video: ' + mp4);
    vid.setAttribute('poster', png);
    vid.src = mp4;
    vid.load();
    vid.play();
}

function next() {
    cnt++;
    if (cnt < n) {
        playVideo(cnt);
    } else {
        cnt = 0;
        playVideo(cnt);
    }
}
</script>

<template>
    <video id="vid" src="https://glpjt.s3.amazonaws.com/so/av/vs2s3.mp4" poster="https://glpjt.s3.amazonaws.com/so/av/vs2s3.png" controls width="480" height="auto">
        Your browser sux, why haven't you upgraded to Chrome or Firefox? Do you live in a cave?
    </video>
</template>

<style scoped>

</style>