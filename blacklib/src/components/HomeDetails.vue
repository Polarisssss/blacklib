<template>
    <v-container>
        <v-layout column>
            <v-flex  class="display-2 text-xs-center my-5 ">Black Library</v-flex>
            <v-flex>
                <div class="headline mt-3 text-xs-center">Знайди свою книжку</div>
                <p class="subheading mt-3 text-xs-center">Пошук в електронному каталозі ведеться за елементами (полями) бібліографічних записів українською, російською, кримськотатарською, англійською та іншими мовами.

Пошук може здійснюватись у будь-якому каталозі, в будь-якій комбінації, для цього необхідно позначити "галочкою" ті каталоги, в яких здійснюватиметься пошук. Для пошуку інформації про окремі видання (книги, періодичні видання або статті) рекомендується працювати в окремих каталогах.

При здійсненні пошуку в меню зліва обирається критерій пошуку: автор, назва, ключові слова, ISBN, географічна рубрика, предметна рубрика.

Після обрання критерію пошуку (автор, назва, ключові слова тощо), введіть в обране поле великими або малими літерами слова для пошуку (можна вводити тільки початок слів, але не менше 3-х символів).

Уточнити запит дозволяють додаткові пошукові елементи, які об’єднуються логікою "І" (Розширений пошук). Щоб здійснити пошук за кількома полями, використовується оператор І (знак «+», що знаходиться справа від кнопки "Шукати"), після чого в меню зліва обирається необхідний елемент пошуку.</p>
            </v-flex>
            
            <template>
  <v-layout justify-center mt-5 mb-5>
    <v-flex xs12 sm8>
      

      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.title"
              v-bind="{ [`xs${card.flex}`]: true }"
            >
              <v-card>
                <v-img
                  :src="card.src"
                  height="400px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeDetails'
};
</script>

<style scoped>
</style>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Big library', src: 'https://images.wallpaperscraft.ru/image/biblioteka_okno_zdanie_117186_1280x720.jpg', flex: 12 },
        { title: 'ADD your story', src: 'https://images.wallpaperscraft.ru/image/pechatnaia_mashinka_ruki_starinnyj_128025_1280x720.jpg', flex: 6 },
        { title: 'Best book', src: 'https://a-static.besthdwallpaper.com/autumn-leaves-and-very-old-books-wallpaper-12073_L.jpg', flex: 6 },
        
      ]
    })
  }
</script>