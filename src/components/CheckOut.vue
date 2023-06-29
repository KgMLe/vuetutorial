<template>
 <div>
    <div class="container">
  <div class="row">
    <h2 class="display-6 text-lg-start" >CHECKOUT PAGE</h2>
  </div>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Order Summary</h5>
          <table class="table table-hover" id="checkOut">
            <thead>
              <tr>
                <th scope="col">Brand</th>
                <th scope="col">Image</th>
                <!-- possible quantity <th scope="col">Quantity</th> -->
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody class="checkOut">
            </tbody>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" id="priceSum">Total Price:</th>

          </table>
        </div>
       <button class="btn" onclick="clearCart()"> Clear Cart</button>
        
      </div>
     <!-- Message Us BUTTON-->

<p>Having some trouble? Leave a message and we will get back to you</p>
<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exModal">
  Leave a Message
 </button>
<br>
    </div>
    <br>


    <!-- BILLING INFORMATION -->
    
    <div class="col-sm-6" id="billing">
        <form>
          <div class="form-row">
            <h5 class="card-title"><u><b>Billing Information</b></u></h5>
            <br>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="youremail@email.com">
            </div>
          </div>
          <div class="form-group col-md-10">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
          </div>
          <div class="form-group col-md-10">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Province</label>
              <select id="inputState" class="form-control">
                <option selected>...Select</option>
                <option>Limpopo</option>
                <option>North West</option>
                <option>Northern Cape</option>
                <option>Mpumalanga</option>
                <option>Kwa-Zulu Natal</option>
                <option>Western Cape</option>
                <option>Gauteng</option>
                <option>Eastern Cape</option>
                <option>Free State</option>
                
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Postal Code</label>
              <input type="text" class="form-control" id="inputZip">
            </div>
          </div>
          <div class="form-group" id="contantBtn">

           <!-- Place Button trigger modal -->
<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Place Order <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
  </svg>
</button>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Order Placed!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <lord-icon
        src="https://cdn.lordicon.com/hgvwxhhl.json"
        trigger="hover"
        colors="primary:#000000,secondary:#848484"
        stroke="35"
        style="width:70px;height:70px">
    </lord-icon>
    Checkout Your Email for more updates
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
  </div> 
  <!--  -->
  </div>
</form>
  </div>
  
  <!-- CONTACT US BUTTON -->


<!-- Modal CONTACT INFO -->
<div class="modal fade" id="exModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Get in Touch</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
     
        <div class="modal-body">
          <!-- <div class="mb-3"> -->
            <form
            action="https://formspree.io/f/mzbqnpjn"
            method="POST"
          >
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Full Name(s)</label>
            <input type="text" name="fullname" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Leave a message </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>  
           
          </div>
            <!-- your other form fields go here -->
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary" value="submit" >Submit</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
             
            </div>  
          </form>
      </div>
    </div>
    </div>
  </div>
</div>     
</div>
 </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#billing{
    border: 3px solid #923d50
}

</style>