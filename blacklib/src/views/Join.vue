<template>
    <v-container grid-list-md >
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1>
            <v-tabs v-model="tabMode" color="accent" dark fixed-tabs slider-color="success">
            <v-tab :key="'data'" ripple>
            My data
            </v-tab>
            <v-tab :key="'books'" ripple>
            My books
            </v-tab>
            <v-tab :key="'words'" ripple>
            My words
            </v-tab>
            <v-tab-item :key="'data'">
            <user-profile-data></user-profile-data>
            </v-tab-item>
            <v-tab-item :key="'books'">
            <books-list :onlyMy="true"></books-list>
            </v-tab-item>
            <v-tab-item :key="'words'">
            </v-tab-item>
            </v-tabs>
            </v-flex>

        </v-layout>
    </v-container>
</template>
<script>

import userProfileData from '@/components/UserProfileData';
import booksList from '@/components/BooksList';
export default {
    data(){
        return{
            tabMode: 'data'
        }
    },
    components:{
        userProfileData,
        booksList
    }
        
        
    }
</script>
<style scoped>
</style>