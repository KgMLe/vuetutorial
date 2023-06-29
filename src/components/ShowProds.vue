<template>
    <div>
    <div class="row" id="sortFilter">  
      <h2 class="display-2 text-lg-center" >Shop Our Collection</h2>
      <form class="d-sm-table-row" role="search">
        <input id="searchText" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-dark" type="submit" onclick="search()">Search</button>
      </form>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
         Sort Products By
        </button>
        <br>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" onclick="sortPrice()">Price</a></li>
          <li><a class="dropdown-item" href="#" onclick="sortName()">Alphabet</a></li>
        </ul>
      </div>
    </div>
    <br>
    <div class="row gap-3 justify-content-center"  id="products">
    </div>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" v-for="item in data" :key="item.ID"> 
                    <!-- this is for the key value pairs -->
                    <div class="card" style="width: 18rem">
                        <img :src="item.src" class="card-img-top" alt="..">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.brand }}</h5>
                           <p class="card-text">{{item.description}}</p>
                             <ul class="list-group list-group-flush">
                             <li class="list-group-item">Price: R{{ item.price }}</li>
                             <li class="list-group-item"> <button class="btn">Add to Cart</button></li>
                              </ul>  
                        </div> 
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</template>

<script>
    export default {
        data() {
            return{
                data: []
            }
        },
        methods: {
        async fetchData(){
        const  res = await fetch ('https://kgmle.github.io/vuejson/products.json');
        let parsedData =  await res.json()
        this.data = parsedData.products
            }
        },
        mounted (){
            this.fetchData()
        },

    }
</script>

<style scoped>
.card-img-top{
  width: 10 rem;
  object-fit: contain;
  aspect-ratio: 3/2;

}

.card {
    
    border: 3px solid #923d50;
    color: rgba(250, 250, 250, 0.8);
    margin-bottom: 2rem;
  }


</style>