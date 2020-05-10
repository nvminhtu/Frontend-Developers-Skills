<template>
    <v-container fluid fill-height class="home-intro">
        <v-layout  justify-center align-center column pa-5>
            <div class="display-3 mb-10 font-weight-black white--text text-xs-center">LEARNING ENGLISH</div>
            <div class="display-2 font-weight-black white--text text-xs-center mb-3">FOR FREE</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Quizzes, Test, Practice, Lessons</div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeIntro'
}
</script>

<style scoped>
    .home-intro {
        background: url('http://source.unsplash.com/0BhSKStVtdM');
        background-size: cover;
        width: 100%;
        height: 100%;
    }
</style>