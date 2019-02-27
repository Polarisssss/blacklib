<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black --text text-xs-center ">Black Library</div>
            <div class="display-4 font-weight-black --text text-xs-center mb-3">Discover yourself</div>
            <div class="display-1 font-weight-bold white--text text-xs-center"></div>
            <v-btn fab class="black">
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
    background: url('https://images.wallpaperscraft.ru/image/treugolnik_svet_temnyy_forma_88545_1680x1050.jpg');
    

    background-size: cover;
    width: 100%;
    height: 100vh;
    
}
</style>