<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">Black Library</div>
            <div class="display-4 font-weight-black white--text text-xs-center mb-3">Discover yourself</div>
            <div class="display-1 font-weight-bold white--text text-xs-center"></div>
            <v-btn fab class="teal darken-1">
            <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('https://images.wallpaperscraft.ru/image/pirs_prichal_more_sumerki_bereg_118549_1920x1080.jpg');
    

    background-size: cover;
    width: 100%;
    height: 100vh;
    opacity: 
}
</style>