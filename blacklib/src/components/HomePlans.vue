<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Library</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="https://i.pinimg.com/originals/a5/8f/85/a58f85e0eada249b520ac23d19655c7a.png" height="400px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Harry Potter</h3>
                            <div>Затемнение в работе сайтов применяется часто. Типичные варианты — при наведении курсора мыши или после показа какого-либо элемента, чтобы подчеркнуть необходимость действий со стороны пользователя.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="blue" @click="showRecipes('Harry Potter')">Read</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="https://cdn.novelupdates.com/images/2017/09/Super-God-Gene.jpg" height="400px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Super God Gene</h3>
                            <div>Затемнение в работе сайтов применяется часто. Типичные варианты — при наведении курсора мыши или после показа какого-либо элемента, чтобы подчеркнуть необходимость действий со стороны пользователя.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="blue" @click="showRecipes('Super-God-Gene')">Read</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="https://tl.rulate.ru/i/book/19/2/19091.jpg" height="400px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                   
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">levl up</h3>
                            <div>Затемнение в работе сайтов применяется часто. Типичные варианты — при наведении курсора мыши или после показа какого-либо элемента, чтобы подчеркнуть необходимость действий со стороны пользователя.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="blue" @click="showRecipes('levl-up')">Read</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>
         <div class="text-xs-center">
    <v-pagination
      v-model="page"
      :length="15"
      :total-visible="7"
    ></v-pagination>
  </div>
    </v-container>
    
   
  
</template>
<script>
  export default {
    data () {
      return {
        page: 1
      }
    }
  }
</script>
<script>
export default {
    name: 'HomePlans',
    methods: {
        showRecipes(plan) {
            this.$store.dispatch('getRecipes', plan);
        }
    }
};
</script>

<style scoped>
</style>