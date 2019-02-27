<template>
    <v-app>
        <app-navigation></app-navigation>

        <v-content transition="slide-x-transition">
            <router-view></router-view>
            <span>
        
        <Bot></Bot>
    </span>
        </v-content>
    </v-app>
     
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import Bot from '@/components/Bot';
export default {
    name: 'App',
    components: {
        AppNavigation,
        Bot
    }
};
</script>

<style>
</style>



