import { createStore } from 'vuex'
const dataURL = "https://kgmle.github.io/productsjson/data/"
export default createStore({
  state: {
    products: null,
  
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products =products
    },
    setSpinner (state, value){
      state.spinner =value
    }
  },
  actions: {
  async fetchProducts (context){
    try{
      let res = await fetch (dataURL)
      let {products} = await res.json() //use the key for what you described your array
      if (products){
        context.commit ('setProducts', products)
      }else{
        alert("Loading")
      }
    }catch(e){
      console.log(e.message);
    }
  },
  
  },
  modules: {
  }
})