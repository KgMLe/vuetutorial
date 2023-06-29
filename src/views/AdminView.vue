<template>
    <div>
        <div class="container" id="admin">
    <div class="row">
      <h2 class="display-2 text-lg-center" >ADMINISTRATOR</h2>
    </div>
    <div class="admin_button">
      <button class="btn btn-light" id="sort" @click="sortProd()">Sort Product <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-alpha-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
        <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"/>
      </svg></button>
      <button class="btn btn-light" id="add" data-bs-toggle="modal" data-bs-target="#exampleModal" >Add Product(s) <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus-fill" viewBox="0 0 16 16">
        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z"/>
      </svg></button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Product(s)</h1> <!-- ADD PROD-->
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>  <!--close-->
          </div>
          <div class="container">
            <div class="row">
          <div class="modal-body">
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"> Brand</label>
          <input type="text" class="form-control" id="brand" > 
          </div>
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Image Link</label>
          <input type="url" class="form-control" id="imgSrc">
          </div>
          <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Description</label>
          <textarea class="form-control" id="description" rows="3"> </textarea>
         </div>
         <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label"> Price(R)</label>
         <input type="number" class="form-control" id="price"> 
         </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" id="save" onclick="addProd()">Save Changes</button>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Brand</th>
          <th scope="col">Image</th>
          <th scope="col">Description</th>
          <th scope="col">Price </th>
          <th scope="col">Edit</th>
          <th scope="col">Del</th>
        </tr>
      </thead>
      <tbody class="table-group-divider"  v-for="item in data" :key="item.ID">
        <tr>
  <th scope="row">{{item.id}}</th>
  <td><span>{{item.brand}}</span></td>
  <td><img :src= item.src alt="specs" style="width: 85px;height: 60px;"></td>
  <td>{{item.description}}</td>
  <td> R{{item.price}}</td>

  <td><button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exModal-${item.id}" >Edit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg>
  </button>
  <div class="modal fade" id="exModal-${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
  <div class="modal-content">
  <div class="modal-header">
  <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product Information</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
 
  <div class="modal-body" >
  <form id="editProduct-${item.id}">
  <div class="mb-3">
  <label for="brand" class="form-label">Brand</label>
  <input type="text" class="form-control" id="brand-${item.id}" value="${item.brand}">
  </div>
  <div class="mb-3">
  <label for="imgSrc" class="form-label">Image</label>
  <input type="url" class="form-control" id="imgSrc-${item.id}" value="${item.src}" >
  </div>
  <div class="mb-3">
  <label for="description" class="form-label">Description</label>
  <input type="text" class="form-control" id="description-${item.id}" value="${item.description}">
  </div>
  <div class="mb-3">
  <label for="price" class="form-label">Price (R)</label>
  <input type="number" class="form-control" id="price-${item.id}" value="${item.price}">
  </div>
  </form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn" onClick ='new EditProduct(${JSON.stringify(item)})' data-bs-dismiss="modal">Save Changes</button>
  </div>
  </div>
  </div>
  </div>
  </td>
  <td><button class="btn btn-danger" id= "del" onclick="delProduct()">Delete <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
  </svg> </button></td>
  </tr>
      </tbody>
    </table>
       
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
        sortProd(){
  this.data.sort(function(a, b) {
    const brandA = a.brand.toUpperCase(); 
    const brandB = b.brand.toUpperCase(); 
      
  
    if (brandA < brandB) {
      return -1;
    }
    if (brandA > brandB) {
      return 1;
    }

    return 0;
  })
 }
}
</script>

<style scoped>

</style>