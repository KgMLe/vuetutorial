<template>
    <div>
        <footer class="footer-distributed">

<div class="footer-left">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>476 Street Ave</span> Parow, Cape Town</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+2721 234 5432</p>
  </div>
  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">information@specs.co.za</a></p>
  </div>
  <div class="footer-icons">

    <a  href="wwww.facebook.com"><i class="fab fa-facebook"></i></a>
    <a href="www.twitter.com"><i class="fab fa-twitter"></i></a>
    <a href="www.instagram.com"><i class="fab fa-instagram"></i></a>
     <p class="footer-company-name">Specs © 2023</p>
  </div>
</div>
</footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
footer{
  background-color: #28272C;
  color: #F4F4F4;
  text-align: center;
  justify-content: space-between;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
	vertical-align: top;
}

.footer-distributed .footer-left{
	width: 35%;
}

.footer-distributed .footer-left i{
	background-color:  #33383b;
	color: #ffffff;
	font-size: 25px;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	text-align: center;
	line-height: 42px;
	margin: 10px 15px;
	vertical-align: middle;
}

.footer-distributed .footer-left i.fa-envelope{
	font-size: 17px;
	line-height: 38px;
}

.footer-distributed .footer-left p{
	display: inline-block;
	color: #ffffff;
  font-weight:400;
	vertical-align: middle;
	margin:0;
}

.footer-distributed .footer-icons{
	margin-top: 25px;
}

.footer-distributed .footer-icons a{
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	background-color:  #33383b;
	border-radius: 2px;

	font-size: 20px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;

	margin-right: 3px;
	margin-bottom: 5px;
}

</style>