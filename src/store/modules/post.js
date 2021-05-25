import axios from "axios";


export default {
    state:{
        posts:[],
        apiKey:'26094334',
        movie:{},
        shoppingCart:[],
        imdbRating:null,
        products:[],
        categories:[],
        todos:[
            {
                id:1,
                title:"title1"
            },
            {
                id:2,
                title:"title2"
            }
        ]

    },
    actions: {
       async getCurrentProductData({commit},name) {
            const res = await axios.get(`http://www.omdbapi.com/?t=${name}&apikey=26094334`)
            commit("updateMovies",res.data)
       },
       async getProductCategories({commit}) {
            const response = await axios.get("/api/movies.json");
                commit("updateProductCategories",response.data)
        },
        getPostsAction: ({commit},apiKey) => {
            return new Promise((resolve, reject) => {
                axios({url:"http://www.omdbapi.com/?i=tt5095030&apikey="+ apiKey ,
                    method: 'GET'})
                    .then(response => {
                        commit('updatePosts', response.data)
                        resolve(response)
                    })
                    .catch(err => {
                        console.log(err)
                        reject(err)
                    })
            })
        },
        // async getMovie({commit}) {
        //  const response = await axios.get("http://www.omdbapi.com/?i=tt5095030&apikey=26094334");
        //         commit("updateMovies",response.data);
        // },
    },
    mutations:{
        updateProductCategories(state,products) {
            state.products = products
        },
        updateMovies(state,movie) {
            state.movie = movie
            state.imdbRating = movie.imdbRating
        },
        ADD_TO_CART(state,product) {
            try {
                if(state.shoppingCart.length) {
                    let dublicate = {};
                    state.shoppingCart.filter((value) =>
                        value.title === product.title
                    ).forEach((value)=> dublicate = value.value)
                    if(state.shoppingCart.some((value) =>
                        value.title === product.title)) {
                        dublicate.quantity++;
                        console.log(dublicate)
                    }else {
                        state.shoppingCart.push({
                            id:product.id,
                            price:product.price,
                            quantity:1,
                            title:product.title
                        })
                    }
                }
                else {
                    state.shoppingCart.push({
                        id:product.id,
                        price:product.price,
                        quantity:1,
                        title:product.title
                    })
                }
            }catch (err) {
                alert('error')
            }
        },
        CLEAR_CART(state) {
            state.shoppingCart = [];
        },
        DELETE_ITEM(state,index) {
            state.shoppingCart.splice(index,1)
        },
        PLUS(state,product) {
            product.quantity++;
        },
        MINUS(state,product) {
            product.quantity--;
            if(product.quantity <= 1) product.quantity = 1;
        }
    },

    getters:{
        allPosts(state) {
            return state.posts
        },
        getCurrentProduct:(state) => state.movie,
        allTodos:(state) => state.todos,
        getShoppingCart:(state) => state.shoppingCart,
        getTotalValue: state => {
            return state.shoppingCart.reduce((total,value)=> {
                    return total + (value.price*value.quantity);
             },0)
        },
        getTotalQuantity:state => {
          return state.shoppingCart.reduce((total,value) => {
              return total + value.quantity
          },0)
        },
        getCategories:state => state.products,
        GET_ALL_SINGLE_PRODUCTS:(state) => {
                    state.products.forEach((item)=>{
                        item.children.forEach((value)=> {
                            state.categories.push(value)
                        })
                    })
            return [...new Map(state.categories.map(item => [item.title, item])).values()]
        }
    }
}