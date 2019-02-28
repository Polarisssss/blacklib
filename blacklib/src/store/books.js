

export default ({
    state: {
        books: [
            {
                id: 'fdsdfsdf324234sdf',
                title: 'Super gen GOD- 1',
                description: 'Перша частина',
                imageid: 'dfdfdff232fd',
                parts:12,
                rating: 4,
                ratingsCount: 100,
                youtube_playlist_id: 'sddsffe233'


            },
            {
                id: 'fdsdfsdf324234sdf23',
                title: 'Super gen GOD- 2',
                description: 'друга частина',
                imageid: 'dfdfdff232fd',
                parts:12,
                rating: 4,
                ratingsCount: 100,
                youtube_playlist_id: 'sddsffe233ds'
                

            },
            {
                id: 'fdsdfsdf324234sdf22',
                title: 'Super gen GOD- 3',
                description: 'друга частина',
                imageid: 'dfdfdff232fd',
                parts:12,
                rating: 4,
                ratingsCount: 100,
                youtube_playlist_id: 'sddsffe233ds1'
                

            }


        ]
        
    },
    mutations: {
        SET_BOOKS(state, payload){
        state.books = payloat
    },

    },
    getters: {
        getBooks:(state) => tate.books,

    }
});
