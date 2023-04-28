Vvveb.SectionsGroup['Footer Section'] = ["bootstrap4/footer_1", "bootstrap4/footer_2", "bootstrap4/footer_3", "bootstrap4/footer_4", "bootstrap4/footer_5", "bootstrap4/footer_6"];

Vvveb.Sections.add("bootstrap4/footer_1", {
  name: "footer_1 Demo",
  dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
  image: "http://localhost/PageBuilderZtrios/img/section_img/footer1.png",
  html: `

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<style>
.f1 .content1 {
    /* border: 4px solid red; */
    /* position: relative; */
    background:peru;
    margin: 200px auto;
    text-align: center;
    padding: 10px 0px;
}

.f1 .content1 .text {
    font-size: 2.5rem;
    font-weight: 600;
    color: #202020;
}

.f1 .content1 .p {
    font-size: 2.1875rem;
    font-weight: 600;
    color: #202020;
}

.f1 footer {
    /* border: 4px solid blue; */
    /* padding: 10px; */
    position: relative;
    bottom: 100px;
    width: 100%;
    margin-right: 100px;
    background: #111;
}

.f1 .main-content {
    display: flex;
    background: whitesmoke;
}

.f1 .main-content .box {
    flex-basis: 50%;
    padding: 10px 20px;
}

.f1 .box h2 {
    font-size: 1.125rem;
    font-weight: 600;
    text-transform: uppercase;
}

.f1 .box .content {
    position: relative;
    margin: 20px 0 0 0;
    /* border: 1px solid black; */
}

.f1 .box .content:before {
    position: absolute;
    content: '';
    top: -20px;
    height: 2px;
    width: 20%;
    background: #1a1a1a;
}

.f1 .box .content:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 20%;
    background: #f12020;
    top: -20px;
    left: 45px;
}

.f1 .left .content p {
    text-align: justify;
}

.f1 .left .content .social {
    margin: 20px 0 0 0;
}

.f1 .left .content .social a {
    padding: 0 2px;
}

.f1 .left .content .social a span {
    height: 40px;
    width: 40px;
    background: #1a1a1a;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    border-radius: 5px;
    transition: 0.3s;
}

.f1 .left .content .social a span:hover {
    background: #f12020;
}

.f1 .center .content .fas {
    font-size: 1.4375rem;
    background: #1a1a1a;
    height: 45px;
    width: 45px;
    line-height: 45px;
    text-align: center;
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;
}

.f1 .center .content .fas:hover {
    background: #f12020;
}

.f1 .center .content .text {
    font-size: 1.0625rem;
    font-weight: 500;
    padding-left: 10px;
}

.f1 .center .content .phone {
    margin: 15px 0;
}

.f1 .right form .text {
    font-size: 1.0625rem;
    margin-bottom: 2px;
    color: #656565;
}

.f1 .right form .msg {
    margin-top: 10px;
}

.f1 .right form input,
.f1 .right form .msgForm {
    width: 100%;
    font-size: 1.0625rem;
    background: #151515;
    padding-left: 10px;
    border: 1px solid #222222;
}

.f1 .right form input:focus,
.f1 .right form .msgForm:focus {
    outline-color: #3498db;
}

.f1 .right form input {
    height: 35px;
}

.f1 .right form .btn {
    margin-top: 10px;
}

.f1 .right form .btn button {
    height: 40px;
    width: 100%;
    border: none;
    outline: none;
    background: #f12020;
    font-size: 1.0625rem;
    font-weight: 500;
    cursor: pointer;
    transition: .3s;
}

.f1 .right form .btn button:hover {
    background: #000;
}

.f1 .bottom center {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    font-size: 0.9375rem;
    background: white;
}

.f1 .bottom center span {
    color: #656565;
}

.f1 .bottom center a {
    color: #f12020;
    text-decoration: none;
}

.f1 .bottom center a:hover {
    text-decoration: underline;
}

@media screen and (max-width: 900px) {
    .f1 footer {
        position: relative;
        bottom: 0px;
    }

    .f1 .main-content {
        flex-wrap: wrap;
        flex-direction: column;
    }

    .f1 .main-content .box {
        margin: 5px 0;
    }

    .f1 .bottom center {
        padding: 100px auto;
        border: 2px solid red;
    }
}
</style>
  
<section class="main_sec">
<div class="f1" style="padding: 20px;">

    <div class="content1">
        <div class="text">
            Fully Responsive Footer Section
        </div>
        <div class="p">
            HTML and CSS (Flexbox)</div>
    </div>

    <footer class="foot_div">

        <div class="main-content">

            <div class="left box">
                <h2>About us</h2>
                <div class="content">
                    <p>This is a Instagram account where you can learn web designing, web development,
                        ui/ux designing, html css tutorial, hover animation and effects, javascript and jquery
                        tutorial and related so on.</p>
                    <div class="social" style="border: 4px solid white;">
                        <p style="text-align:center;">You can write here any message</p>
                        <a href="https://facebook.com/coding.np"><span class="fab fa-facebook-f"></span></a>
                        <a href="#"><span class="fab fa-twitter"></span></a>
                        <a href="https://instagram.com/coding.np"><span class="fab fa-instagram"></span></a>
                        <a href="https://youtube.com/c/codingnepal"><span class="fab fa-youtube"></span></a>
                    </div>
                </div>
            </div>

            <div class="center box">
                <h2>Address</h2>
                <div class="content">
                    <div class="place">
                        <span class="fas fa-map-marker-alt"></span>
                        <span class="text">Jogja, Indonesia</span>
                    </div>

                    <div class="phone">
                        <span class="fas fa-phone-alt"></span>
                        <span class="text">+089-765432100</span>
                    </div>

                    <div class="email">
                        <span class="fas fa-envelope"></span>
                        <span class="text">abc@vivo.com</span>
                    </div>

                </div>
            </div>

            <div class="right box">
                <h2>Contact us</h2>
                <div class="content">
                    <div action="#">

                        <div class="email">

                            <div class="text">Email *</div>
                            <input type="email" required>

                        </div>
                        <div class="msg">
                            <div class="text">Message *</div>
                            <input type="message" required>
                        </div>
                        <div class="msg">
                            <div class="text">

                                <!-- NOTE: Due to more textarea tag I got an error. So I changed the textarea name to changeit. Please change that changeit name to textarea -->
                                <changeit id=".msgForm" rows="2" cols="25" required></changeit>
                                <!-- replace this changeit name to textarea -->

                                <br />
                                <div class="btn" style="margin-bottom:20px;">
                                    <button type="submit">Send</button>
                                </div>
                                <div class="bottom">
                                    <center>
                                        <span class="credit">Created By <a
                                                href="https://youtube.com/c/codingnepal">Aldy Kusuma Ardhana</a>
                                            | </span>
                                        <span class="far fa-copyright"></span> 2020 All rights reserved.
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </footer>

  <script id="footer_1"></script> 

  </div>
</section>
   
  `
});

Vvveb.Sections.add("bootstrap4/footer_2", {
  name: "footer_2 Demo",
  dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
  image: "http://localhost/PageBuilderZtrios/img/section_img/footer2.png",
  html: `
 <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

<section>
    <div class="f2">
    <footer class="footer-sec">
        <div class="main">
            <div class="logo row">
                <div class="footer-header">

                <!-- https://i.postimg.cc/tgk8X2w7/manik-low-resolution-logo-white-on-transparent-background.png -->

                <img src="https://images.unsplash.com/photo-1447875569765-2b3db822bec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  width: 200px; height:auto;  class="manik" alt="">
                </div>
                <div class="logo-des">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour.</p>

                    <a href="#" class="btn-know">Know More</a>
                </div>
            </div>

            <div class="office row">
                <div class="footer-header">
                    <h3>Office</h3>
                </div>
                <div class="office-des">
                    <p>here are <br> many variations of passages<br>of Lorem Ipsum<br>available</p>

                    <a href="#">manikmaity.haker2003@gmail.com</a>

                    <p class="num">+91-9999999999</p>
                </div>
            </div>


            <div class="link row">
                <div class="footer-header">
                    <h3>Links</h3>
                </div>

                <div class="link-des">
                    <a href="#" class="footer-links">Home</a>
                    <a href="#" class="footer-links">About</a>
                    <a href="#" class="footer-links">Services</a>
                    <a href="#" class="footer-links">Galary</a>
                    <a href="#" class="footer-links">Contact</a>
                </div>

            </div>


            <div class="newsletter row">
                <div class="footer-header">
                    <h3>Newsletter</h3>
                </div>
                <div class="newsletter-des">
                    <div class="subcribe"><i class="sub-icon ri-mail-check-fill"></i>
                        <input type="mail" placeholder="Enter Email ID" required>
                        <i class="sub-icon ri-arrow-right-line"></i>
                    </div>
                    <div class="icons">
                        <a href="#"><i class="social-icon ri-facebook-fill"></i></a>
                        <a href="#"><i class="social-icon ri-instagram-line"></i></a>
                        <a href="#"><i class="social-icon ri-linkedin-fill"></i></a>
                        <a href="#"><i class="social-icon ri-github-line"></i></a>

                    </div>
                </div>
            </div>


        </div>
        <div class="copyright">
            <hr>

            <p>© Copyright 2022 Mimi Maity.</p>
        </div>
    </footer>

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

    .f2 footer {
        color: #fff;
        background-image: linear-gradient(90deg, rgba(39, 27, 111, 1) 0%, rgba(87, 25, 45, 1) 100%);
        position: relative;
        width: 100%;
        height: 100%;
        top: 350px;
        border-top-left-radius: 70px;
        font-size: 0.8rem;
    }
    
    
    
    @media (max-width:960px) {
        .f2 footer {
            width: 100%;
            top: 120px;
        }
    
        .f2 .main {
            margin: 50px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr 1fr;
        }
    
        .f2 .logo {
            grid-column: 1/3;
        }
    
        .f2 .office {
            grid-column: 3/5;
        }
    
        .f2 .link {
            grid-column: 1/3;
        }  
    }
  
    @media (max-width:660px) {
        .f2 .main {
            gap: 10px;
            margin: 0;
    
        }
    
        .f2 .icons {
            display: flex;
        }
        .f2 .row {
            grid-column: 1/4;
        }
    }
  
    .f2 .manik {
        width: 120px;
    }
    
    .f2 .main {
        margin: 50px;
        padding-top: 20px;
        padding-bottom: 50px;
        display: grid;
        gap: 50px;
        grid-template-columns: repeat(4, 1fr);
    }
    
    .f2 .row {
        margin-top: 50px;
    }
    
    .f2 .footer-header {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
    
    .f2 .office-des {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .f2 .office a {
        text-decoration: none;
        color: #98A8F8;
    
    }
    
    .f2 .office a:hover {
        color: #fff;
    }
    
    .f2 .num {
        font-size: 1rem;
        font-weight: 500;
    }
    
    .f2 .link-des {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .f2 .link-des a {
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
    }
    
    .f2 .link-des a:hover {
        color: #FB2576;
        transition: linear 0.3s;
    }
    
    .f2 .btn-know {
        text-decoration: none;
        background-color: #fff;
        padding: 10px;
        position: relative;
        top: 30px;
        background-color: transparent;
        border: 1px solid #98A8F8;
        color: #98A8F8;
        text-transform: uppercase;
        border-radius: 10px;
    }
    .f2 .btn-know:hover {
        color: white;
        background-color: #98A8F8;
        transition: linear 0.3s;
    }
    
    .f2 .subcribe {
        display: flex;
    }
    
    .f2 input[type=mail] {
        border: none;
        padding-bottom: 5px;
        border-bottom: 1px solid #fff;
        background-color: transparent;
        font-size: 0.8rem;
    }
    
    .f2 .sub-icon {
        margin: 7px;
        margin-right: 15px;
        margin-left: 0;
        font-size: 1.5rem;
    }
    
    .f2 .ri-arrow-right-line {
        margin-left: 0;
    
    }
    
    .f2 .icons a {
        text-decoration: none;
        color: #fff;
        border: 1px solid #fff;
        justify-content: center;
        padding: 10px;
        border-radius: 50%;
        align-items: center;
        font-size: 1.1rem;
        margin: 2%;
    }
    
    
    .f2 .social-icon {
        position: relative;
        top: 2px;
    }
    
    .f2 .icons a:hover {
        color: #fff;
        background-color: #FB2576;
        border-color: #FB2576;
    }
    
    .f2 .newsletter-des {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    
    .f2 .copyright {
        text-align: center;
    }
    
    .f2 hr {
        width: 90%;
        margin: 2px auto;
        opacity: 40%;
        border: 0.01px solid white;
    }
    
    .f2 .copyright p {
        padding: 20px;
    }
    
    </style>

    <script></script>

    </div>
</section>
  `
});

Vvveb.Sections.add("bootstrap4/footer_3", {
  name: "footer_3 Demo",
  dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
  image: "http://localhost/PageBuilderZtrios/img/section_img/footer3.png",
  html: `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
  crossorigin="anonymous" referrerpolicy="no-referrer" />

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css
" rel="stylesheet">

<section>
<style>
.f3 .site-footer {
  background-color: #26272b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}

.f3 .site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5
}

.f3 .site-footer hr.small {
  margin: 20px 0
}

.f3 .site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px
}

.f3 .site-footer a {
  color: #737373;
}

.f3 .site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}

.f3 .footer-links {
  padding-left: 0;
  list-style: none
}

.f3 .footer-links li {
  display: block
}

.f3 .footer-links a {
  color: #737373
}

.f3 .footer-links a:active,
.f3 .footer-links a:focus,
.f3 .footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}

.f3 .footer-links.inline li {
  display: inline-block
}

.f3 .site-footer .social-icons {
  text-align: right
}

.f3 .site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d
}

.f3 .copyright-text {
  margin: 0
}

@media (max-width:991px) {
  .f3 .site-footer [class^=col-] {
      margin-bottom: 30px
  }
}

@media (max-width:767px) {
  .f3 .site-footer {
      padding-bottom: 0
  }

  .f3 .site-footer .copyright-text,
  .f3 .site-footer .social-icons {
      text-align: center
  }
}

.f3 .social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none
}

.f3 .social-icons li {
  display: inline-block;
  margin-bottom: 4px
}

.f3 .social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px
}

.f3 .social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all .2s linear;
  -o-transition: all .2s linear;
  transition: all .2s linear
}

.f3 .social-icons a:active,
.f3 .social-icons a:focus,
.f3 .social-icons a:hover {
  color: #fff;
  background-color: #29aafe
}

.f3 .social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px
}

.f3 .social-icons a.facebook:hover {
  background-color: #3b5998
}

.f3 .social-icons a.twitter:hover {
  background-color: #3b5998
}

.f3 .social-icons a.linkedin:hover {
  background-color: #3b5998
}

.f3 .social-icons a.dribbble:hover {
  background-color: #3b5998
}

@media (max-width:767px) {
  .f3 .social-icons li.title {
      display: block;
      margin-right: 0;
      font-weight: 600
  }
}
</style>


<div class="f3">
<!-- Site footer -->
<footer class="site-footer">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <h6>About</h6>
                <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
                    help the upcoming programmers with the code. Scanfcode focuses on providing the most
                    efficient code or snippets as the code wants to be simple. We will help programmers
                    build up concepts in different programming languages that include C, C++, Java, HTML,
                    CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
            </div>

            <div class="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul class="footer-links">
                    <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                    <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                    <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                    <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                    <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                    <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                </ul>
            </div>

            <div class="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                    <li><a href="http://scanfcode.com/about/">About Us</a></li>
                    <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                    <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                    <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                </ul>
            </div>
        </div>
        <hr>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                    <a href="#">Scanfcode</a>.
                </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                    <li><a class="facebook" href="#"><i
                                class="fa-brands fa-facebook fa-beat fa-2xs"></i></a></li>
                    <li><a class="twitter" href="#"><i class="fa-brands fa-twitter fa-beat"></i></i></a></li>
                    <li><a class="dribbble" href="#"><i class="fa-brands fa-dribbble fa-beat-fade"></i></a></li>
                    <li><a class="linkedin" href="#"><i class="fa-brands fa-linkedin-in fa-beat"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

</div>

<script></script>
</section>

  `
});



Vvveb.Sections.add("bootstrap4/footer_4", {
  name: "footer_4 Demo",
  dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
  image: "http://localhost/PageBuilderZtrios/img/section_img/footer4.png",
  html: `
 
<style>

.dummy_page {
  height: 200px;
  width: 100%;
  background-color: #f0f0f0;
  text-align: center;
  box-sizing: border-box;
  padding: 20px 0px;
}
/* STYLES SPECIFIC TO FOOTER  */
.footer {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #070617;
}
.footer .col {
  width: 190px;
  height: auto;
  float: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0px 20px 20px 20px;
}
.footer .col h1 {
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: 12px;
  line-height: 17px;
  padding: 20px 0px 5px 0px;
  color: rgba(255,255,255,0.2);
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.250em;
}
.footer .col ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.footer .col ul li {
  color: #999999;
  font-size: 14px;
  font-family: inherit;
  font-weight: bold;
  padding: 5px 0px 5px 0px;
  cursor: pointer;
  transition: .2s;
  -webkit-transition: .2s;
  -moz-transition: .2s;
}
.social ul li {
  display: inline-block;
  padding-right: 5px !important;
}

.footer .col ul li:hover {
  color: #ffffff;
  transition: .1s;
  -webkit-transition: .1s;
  -moz-transition: .1s;
}
.clearfix {
  clear: both;
}
@media only screen and (min-width: 1280px) {
  .contain {
    width: 1200px;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 1139px) {
  .contain .social {
    width: 1000px;
    display: block;
  }
  .social h1 {
    margin: 0px;
  }
}
@media only screen and (max-width: 950px) {
  .footer .col {
    width: 33%;
  }
  .footer .col h1 {
    font-size: 14px;
  }
  .footer .col ul li {
    font-size: 13px;
  }
}
@media only screen and (max-width: 500px) {
    .footer .col {
      width: 50%;
    }
    .footer .col h1 {
      font-size: 14px;
    }
    .footer .col ul li {
      font-size: 13px;
    }
}
@media only screen and (max-width: 340px) {
  .footer .col {
    width: 100%;
  }
}
</style>

<div class="f4">
<div class="dummy_page">
  Mobile responsive footer
</div>
<!-- FOOTER START -->
<div class="footer">
  <div class="contain">
  <div class="col">
    <h1>Company</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div class="col">
    <h1>Products</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div class="col">
    <h1>Accounts</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div class="col">
    <h1>Resources</h1>
    <ul>
      <li>Webmail</li>
      <li>Redeem code</li>
      <li>WHOIS lookup</li>
      <li>Site map</li>
      <li>Web templates</li>
      <li>Email templates</li>
    </ul>
  </div>
  <div class="col">
    <h1>Support</h1>
    <ul>
      <li>Contact us</li>
      <li>Web chat</li>
      <li>Open ticket</li>
    </ul>
  </div>
  <div class="col social">
    <h1>Social</h1>
    <ul>
      <li><img src="https://svgshare.com/i/5fq.svg" width="32" style="width: 32px;"></li>
      <li><img src="https://svgshare.com/i/5eA.svg" width="32" style="width: 32px;"></li>
      <li><img src="https://svgshare.com/i/5f_.svg" width="32" style="width: 32px;"></li>
    </ul>
  </div>
<div class="clearfix"></div>
</div>
</div>
<!-- END OF FOOTER -->
</div>

<script></script>
</section>

  `
});











Vvveb.Sections.add("bootstrap4/footer_5", {
  name: "footer_5 Demo",
  dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
  image: "http://localhost/PageBuilderZtrios/img/section_img/footer5.png",
  html: `
  <style>
  
  a {
    color: #fff;
    text-decoration: none;
  }
  .pg-footer {
    font-family: 'Roboto', sans-serif;
  }
  

  

  .footer {
    background-color: #004658;
    background-image: none!important;
    color: #fff;
}
  .footer-wave-svg {
      background-color: transparent;
      display: block;
      height: 30px;
      position: relative;
      top: -1px;
      width: 100%;
  }
  .footer-wave-path {
      fill: #fffff2;
  }

  /* .footer-content{
    background-color: black;
  } */
  
  .footer-content {
      margin-left: auto;
      margin-right: auto;
      max-width: 1230px;
      padding: 40px 15px 450px;
      position: relative;
  }

 
  
  .footer-content-column {
      box-sizing: border-box;
      float: left;
      padding-left: 15px;
      padding-right: 15px;
      width: 100%;
      color: #fff;
  }
  
  .footer-content-column ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  .footer-logo-link {
      display: inline-block;
  }
  .footer-menu {
      margin-top: 30px;
  }
  
  .footer-menu-name {
      color: #fffff2;
      font-size: 15px;
      font-weight: 900;
      letter-spacing: .1em;
      line-height: 18px;
      margin-bottom: 0;
      margin-top: 0;
      text-transform: uppercase;
  }
  .footer-menu-list {
      list-style: none;
      margin-bottom: 0;
      margin-top: 10px;
      padding-left: 0;
  }
  .footer-menu-list li {
      margin-top: 5px;
  }
  
  .footer-call-to-action-description {
      color: #fffff2;
      margin-top: 10px;
      margin-bottom: 20px;
  }
  .footer-call-to-action-button:hover {
      background-color: #fffff2;
      color: #00bef0;
  }
  .button:last-of-type {
      margin-right: 0;
  }
  .footer-call-to-action-button {
      background-color: #027b9a;
      border-radius: 21px;
      color: #fffff2;
      display: inline-block;
      font-size: 11px;
      font-weight: 900;
      letter-spacing: .1em;
      line-height: 18px;
      padding: 12px 30px;
      margin: 0 10px 10px 0;
      text-decoration: none;
      text-transform: uppercase;
      transition: background-color .2s;
      cursor: pointer;
      position: relative;
  }
  .footer-call-to-action {
      margin-top: 30px;
  }
  .footer-call-to-action-title {
      color: #fffff2;
      font-size: 14px;
      font-weight: 900;
      letter-spacing: .1em;
      line-height: 18px;
      margin-bottom: 0;
      margin-top: 0;
      text-transform: uppercase;
  }
  .footer-call-to-action-link-wrapper {
      margin-bottom: 0;
      margin-top: 10px;
      color: #fff;
      text-decoration: none;
  }
  .footer-call-to-action-link-wrapper a {
      color: #fff;
      text-decoration: none;
  }
  .footer-social-links {
      bottom: 0;
      height: 54px;
      position: absolute;
      right: 0;
      width: 236px;
  }
  
  .footer-social-amoeba-svg {
      height: 54px;
      left: 0;
      display: block;
      position: absolute;
      top: 0;
      width: 236px;
  }
  
  .footer-social-amoeba-path {
      fill: #027b9a;
  }
  
  .footer-social-link.linkedin {
      height: 26px;
      left: 3px;
      top: 11px;
      width: 26px;
  }
  
  .footer-social-link {
      display: block;
      padding: 10px;
      position: absolute;
  }
  
  .hidden-link-text {
      position: absolute;
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px,1px,1px,1px);
      -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
      clip-path: inset(0px 0px 99.9% 99.9%);
      overflow: hidden;
      height: 1px;
      width: 1px;
      padding: 0;
      border: 0;
      top: 50%;
  }
  
  .footer-social-icon-svg {
      display: block;
  }
  
  .footer-social-icon-path {
      fill: #fffff2;
      transition: fill .2s;
  }
  
  .footer-social-link.twitter {
      height: 28px;
      left: 62px;
      top: 3px;
      width: 28px;
  }
  
  .footer-social-link.youtube {
      height: 24px;
      left: 123px;
      top: 12px;
      width: 24px;
  }
  
  .footer-social-link.github {
      height: 34px;
      left: 172px;
      top: 7px;
      width: 34px;
  }
  
  .footer-copyright {
      background-color: #027b9a;
      color: #fff;
      padding: 15px 30px;
    text-align: center;
  }
  
  .footer-copyright-wrapper {
      margin-left: auto;
      margin-right: auto;
      max-width: 1200px;
  }
  
  .footer-copyright-text {
    color: #fff;
      font-size: 13px;
      font-weight: 400;
      line-height: 18px;
      margin-bottom: 0;
      margin-top: 0;
  }
  
  .footer-copyright-link {
      color: #fff;
      text-decoration: none;
  }

  /* Media Query For different screens */
  @media (min-width:320px) and (max-width:479px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    .footer-content {
      margin-left: auto;
      margin-right: auto;
      max-width: 1230px;
      padding: 40px 15px 1050px;
      position: relative;
    }
  }
  @media (min-width:480px) and (max-width:599px)  { /* smartphones, Android phones, landscape iPhone */
    .footer-content {
      margin-left: auto;
      margin-right: auto;
      max-width: 1230px;
      padding: 40px 15px 1050px;
      position: relative;
    }
  }
  @media (min-width:600px) and (max-width: 800px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
    .footer-content {
      margin-left: auto;
      margin-right: auto;
      max-width: 1230px;
      padding: 40px 15px 1050px;
      position: relative;
    }
  }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */
  
  }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */
  
  }
  @media (min-width:1281px) { /* hi-res laptops and desktops */
  
  }

  @media (min-width: 760px) {
    .footer-content {
        margin-left: auto;
        margin-right: auto;
        max-width: 1230px;
        padding: 40px 15px 450px;
        position: relative;
    }
  
    .footer-wave-svg {
        height: 50px;
    }
  
    .footer-content-column {
        width: 24.99%;
    }
  }
  @media (min-width: 568px) {
    /* .footer-content-column {
        width: 49.99%;
    } */
  }
    </style>

    <section>
    <div class="f5">
    <div class="pg-footer">
        <footer class="footer">
            <svg  class="footer-wave-svg fusfus_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100"preserveAspectRatio="none" style="background-color: peru !important;">
                <path class="footer-wave-path"
                    d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z">
                </path>
            </svg>
            <div class="footer-content">
                <div class="footer-content-column">
                    <div class="footer-logo">
                        <a class="footer-logo-link" href="#">
                            <span class="hidden-link-text">LOGO</span>
                            <h1>LOGO</h1>
                        </a>
                    </div>
                    <div class="footer-menu">
                        <h2 class="footer-menu-name"> Get Started</h2>
                        <ul id="menu-get-started" class="footer-menu-list">
                            <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                <a href="#">Start</a>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                <a href="#">Documentation</a>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                <a href="#">Installation</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-content-column">
                    <div class="footer-menu">
                        <h2 class="footer-menu-name"> Company</h2>
                        <ul id="menu-company" class="footer-menu-list">
                            <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                <a href="#">Contact</a>
                            </li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                                <a href="#">News</a>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                <a href="#">Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-menu">
                        <h2 class="footer-menu-name"> Legal</h2>
                        <ul id="menu-legal" class="footer-menu-list">
                            <li
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                                <a href="#">Privacy Notice</a>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                <a href="#">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-content-column">
                    <div class="footer-menu">
                        <h2 class="footer-menu-name"> Quick Links</h2>
                        <ul id="menu-quick-links" class="footer-menu-list">
                            <li class="menu-item menu-item-type-custom menu-item-object-custom">
                                <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                            </li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom">
                                <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                <a href="#">Security</a>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                <a href="#">Blog</a>
                            </li>
                            <li class="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                                <a href="#">Customers</a>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                <a href="#">Reviews</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-content-column">
                    <div class="footer-call-to-action">
                        <h2 class="footer-call-to-action-title"> Let's Chat</h2>
                        <p class="footer-call-to-action-description"> Have a support question?</p>
                        <a class="footer-call-to-action-button button" href="#" target="_self"> Get in Touch
                        </a>
                    </div>
                    <div class="footer-call-to-action">
                        <h2 class="footer-call-to-action-title"> You Call Us</h2>
                        <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link"
                                href="tel:0124-64XXXX" target="_self"> 0124-64XXXX </a></p>
                    </div>
                </div>
                <div class="footer-social-links"> <svg class="footer-social-amoeba-svg"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                        <path class="footer-social-amoeba-path"
                            d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z">
                        </path>
                    </svg>
                    <a class="footer-social-link linkedin" href="#" target="_blank">
                        <span class="hidden-link-text">Linkedin</span>
                        <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30">
                            <path class="footer-social-icon-path"
                                d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z">
                            </path>
                        </svg>
                    </a>
                    <a class="footer-social-link twitter" href="#" target="_blank">
                        <span class="hidden-link-text">Twitter</span>
                        <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 26 26">
                            <path class="footer-social-icon-path"
                                d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 ">
                            </path>
                        </svg>
                    </a>
                    <a class="footer-social-link youtube" href="#" target="_blank">
                        <span class="hidden-link-text">Youtube</span>
                        <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30">
                            <path class="footer-social-icon-path"
                                d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z">
                            </path>
                        </svg>
                    </a>
                    <a class="footer-social-link github" href="#" target="_blank">
                        <span class="hidden-link-text">Github</span>
                        <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32">
                            <path class="footer-social-icon-path"
                                d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z ">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="footer-copyright-wrapper">
                    <p class="footer-copyright-text">
                        <a class="footer-copyright-link" href="#" target="_self"> ©2020. | Designed By: Pooja
                            Nahelia. | All rights reserved. </a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</div>


<script></script>

</section>
`
});



Vvveb.Sections.add("bootstrap4/footer_6", {
  name: "footer_6 Demo",
  dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
  image: "http://localhost/PageBuilderZtrios/img/section_img/footer6.png",
  html: `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
  crossorigin="anonymous" referrerpolicy="no-referrer" />

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.footer {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("http://andreeabunget.co.uk/Img/footer.jpg");
  background-size: cover;

}



.first {
  margin-top: 40px;
  margin-bottom: 50px;
  color: rgb(206, 206, 206);
  font-family: 'Poppins', sans-serif;
}

.first h4 {
  font-size: 20px;
  letter-spacing: 3px;
  position: relative;
  margin-bottom: 20px;
  font-size: 1.6em;
  color: #fff;
  padding-bottom: 0.5em;
}

.first h4::after {
  content: '';
  background: #66c83d;
  width: 20%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.first p {
  font-size: 14px;
}

.second {
  margin-top: 40px;
  margin-bottom: 50px;
  color: rgb(206, 206, 206);
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

.second2 {
  margin-top: 40px;
  margin-bottom: 50px;
  color: rgb(206, 206, 206);
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

.second h4 {
  font-size: 20px;
  letter-spacing: 3px;
  position: relative;
  margin-bottom: 20px;
  font-size: 1.6em;
  color: #fff;
  padding-bottom: 0.5em;
}

.second h4::after {
  content: '';
  background: #66c83d;
  width: 20%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 40%;
}


.second li {
  list-style: none;
  padding-bottom: 30px;
}

.second a,
.second2 a {
  color: rgb(206, 206, 206);
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 14px;
  transition: 0.2s;
}

.second a:hover,
.second2 a:hover {
  color: #fff;
  transition: 0.2s;
  text-shadow: 1px 1px 20px rgba(0, 0, 0, 1);
  text-decoration: none
}



.third {
  margin-top: 40px;
  margin-bottom: 50px;
  color: rgb(206, 206, 206);
  font-family: 'Poppins', sans-serif;
  text-align: right;
}


.third h4 {
  font-size: 20px;
  letter-spacing: 3px;
  position: relative;
  margin-bottom: 20px;
  font-size: 1.6em;
  color: #fff;
  padding-bottom: 0.5em;
}


.third h4::after {
  content: '';
  background: #66c83d;
  width: 20%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 80%;
}



.third li {
  list-style: none;
  padding-bottom: 15px;
}


.third a {
  color: rgb(206, 206, 206);
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 14px;
  transition: 0.2s;
}


.third a:hover {
  color: #fff;
  transition: 0.2s;
  text-shadow: 1px 1px 20px rgba(0, 0, 0, 1);
}


@media screen and (max-width:1000px) {
  .first {
      text-align: center;
  }

  .first h4::after {
      left: 40%;
  }
}

@media screen and (max-width:1000px) {
  .third {
      text-align: center;
  }

  .third h4::after {
      left: 40% !important;
  }
}

.margin {
  margin-left: 20px;
}

.line {
  height: 2px;
  background-color: rgb(206, 206, 206);
  width: 100%;
}

.container h1 {
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>

<section>
<div class="f6">


<!-- footer -->
<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-xs-12">
                <div class="first">
                    <h4>My Skills</h4>
                    <p> Analytical Skills</p>
                    <p> Problem-solving skills</p>
                    <p> Critical-thinking skills</p>
                    <p> Detail-oriented</p>
                    <p> Multitasking</p>
                    <p> Self-motivated</p>
                </div>
            </div>

            <div class="col-md-4 col-xs-12">
                <div class="second">
                    <h4> Navigate</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-md-4 col-xs-12">
                <div class="third">
                    <h4> Contact</h4>
                    <ul>
                        <li>Andreea Mihaela Bunget </li>
                        <li></li>


                        <li><i class="far fa-envelope"></i> andreea@andreeabunget.co.uk</li>
                        <li><i class="far fa-envelope"></i> email@yahoo.com</li>


                        <li><i class="fas fa-map-marker-alt"></i> London, UK </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="line"></div>
                <div class="second2">
                    <a href="https://codepen.io/AndreeaBunget" target="_blank"> <i
                            class="fab fa-codepen fa-2x margin"></i></a>
                    <a href="https://github.com/WebDeveloperCodeRep" target="_blank"> <i
                            class="fab fa-github fa-2x margin"></i></a>
                    <a href="https://www.linkedin.com/in/andreea-mihaela-bunget-a4248812b/" target="_blank"> <i
                            class="fab fa-linkedin fa-2x margin"></i></a>
                    <a href="https://www.youtube.com/channel/UCX674BUbomzBCakbb75lhfA?view_as=subscriber"
                        target="_blank"><i class="fab fa-youtube fa-2x margin"></i></a>

                </div>

            </div>
        </div>
    </div>
</div>

</div>
<script></script>

</section>
`
});

