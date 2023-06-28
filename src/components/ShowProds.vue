<template>
    <div>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" v-for="item in data" :key="item.ID"> 
                    <!-- this is for the key value pairs -->
                    <div class="class" style="width: 18rem">
                        <img :src="item.src" class="card-img-top" alt="..">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.brand }}</h5>
                           <p class="card-text">{{item.description}}</p>
                             <ul class="list-group list-group-flush">
                             <li class="list-group-item">R{{ item.price }}</li>
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
        }
    }
</script>

<style scoped>


</style>