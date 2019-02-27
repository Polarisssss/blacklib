<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="teal darken-1" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="teal darken-3" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title>
            </router-link>
            
            <v-btn flat class="hidden-sm-and-down" to="/menu">Library</v-btn>
            <v-flex >
            <About />
            </v-flex>
            
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
              <v-btn color="teal darken-3" > search</v-btn>
                <v-btn color="teal darken-1" to="/join">Profile</v-btn>
            </div>
            <v-btn v-else outline color="white" @click="logout">Logout</v-btn>

        </v-toolbar>
    </span>
</template>

<script>
import About from '@/views/About'
export default {
    components:{About},
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Black Library',
            drawer: false,
            items: [{ title: 'Search' }, { title: 'Home' }, { title: 'Profile' }, { title: 'Library' },{ title: 'Add Story' }, ]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    }
};
</script>



<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>