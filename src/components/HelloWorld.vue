<template>
  <div>
    <section id="landing">
         <div class="row">
       <hr>   
      <h1 class="display-6 text-md-left" id="heading"> <span>SEE</span> THE WORLD <br> <span>THROUGH</span><br> STYLISH FRAMES</h1> 
    </div>
  </section>
  <br>
  <!-- ABOUT SECTION -->
<section class="container" id="about">

  <h2 class="text-md-center"><span>Why</span> We Do <span>What</span> We Do </h2>
  <p>  Eyeglasses were originally designed purely for vision correction, but over time they evolved into a fashion accessory, with frames being crafted from various materials and adorned with decorative elements.</p>

   <p> At Specs, we are dedicated to helping you discover frames that make you look and feel you best and to offer a seamless online shopping experience, ensuring that you can find the perfect frames that not only fit comfortably but also reflect your unique personality. </p>
</section>

  <section id="featured" >
    <div class="row">
      <hr>
      <h3 class="text-lg-center" >FEATURED PRODUCTS</h3>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <img class="card-img-top" src="https://i.postimg.cc/9Qft6xjq/16360935557651.jpg" alt="Card image cap" loading="lazy">
          
        </div>
        <div class="col">
          <img class="card-img-top" src="https://i.postimg.cc/8PszvMf1/16833593271408.jpg" alt="Card image cap" loading="lazy">
          
        </div>
        <div class="col">
          <img class="card-img-top" src="https://i.postimg.cc/3xsNYNR3/16360764398588.jpg" alt="Card image cap" loading="lazy">
        </div>
      </div>
      <br>
      <div class="d-grid gap-2 col-6 mx-auto">
        <a href="./html/product.html" class="btn" type="button" >SEE MORE</a>
      </div>
     <!-- Make the button skip to products page -->
        </div>
      </section>   
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#landing{
  height: fit-content;
  background-position: right;
  background-image: url("https://i.postimg.cc/Y0kMzJp7/cd93a5895e6954a1457a63-removebg-preview.png");
  /* background-repeat: no-repeat; */
  padding-top: 10.5%;
  padding-right: 5%;
  padding-bottom: 7.5%;
  background-color: #28272C;
  color: white;
}


#heading{
  padding-left: 10%;
  font-family: 'Inter';
  font-style: normal;
  font-size: 2.8rem;
  text-align: center;
 line-height: 190%;
 font-weight: bold;
}

hr
{
  border: 7px solid #923d50;
  border-radius: 5px;
  width: 30px;
}

#about{
padding-top: 1.5%;
justify-content: center;
text-align: justify;

}

span{
color: #923d50;
font-weight: bold;
}

</style>
