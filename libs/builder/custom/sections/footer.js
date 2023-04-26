Vvveb.SectionsGroup['Footer Section'] = ["bootstrap4/footer_1", "bootstrap4/footer_2", "bootstrap4/footer_3", "bootstrap4/footer_4", "bootstrap4/footer_5"];

Vvveb.Sections.add("bootstrap4/footer_1", {
    name: "footer_1 Demo",
    dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
    image: "http://localhost/PageBuilderZtrios/img/intro/5.jpg",
    html: `

   
    <style>
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
  
    .content1{
      position: relative;
      margin: 130px auto;
      text-align: center;
      padding: 0 20px;
    }
    .content1 .text{
      font-size: 2.5rem;
      font-weight: 600;
      color: #202020;
    }
    .content1 .p{
      font-size: 2.1875rem;
      font-weight: 600;
      color: #202020;
    }
    footer{
      position: fixed;
      bottom: 0px;
      width: 100%;
      background: #111;
    }
    .main-content{
      display: flex;
    }
    .main-content .box{
      flex-basis: 50%;
      padding: 10px 20px;
    }
    .box h2{
      font-size: 1.125rem;
      font-weight: 600;
      text-transform: uppercase;
    }
    .box .content{
      margin: 20px 0 0 0;
      position: relative;
    }
    .box .content:before{
      position: absolute;
      content: '';
      top: -10px;
      height: 2px;
      width: 100%;
      background: #1a1a1a;
    }
    .box .content:after{
      position: absolute;
      content: '';
      height: 2px;
      width: 15%;
      background: #f12020;
      top: -10px;
    }
    .left .content p{
      text-align: justify;
    }
    .left .content .social{
      margin: 20px 0 0 0;
    }
    .left .content .social a{
      padding: 0 2px;
    }
    .left .content .social a span{
      height: 40px;
      width: 40px;
      background: #1a1a1a;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      border-radius: 5px;
      transition: 0.3s;
    }
    .left .content .social a span:hover{
      background: #f12020;
    }
    .center .content .fas{
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
    .center .content .fas:hover{
      background: #f12020;
    }
    .center .content .text{
      font-size: 1.0625rem;
      font-weight: 500;
      padding-left: 10px;
    }
    .center .content .phone{
      margin: 15px 0;
    }
    .right form .text{
      font-size: 1.0625rem;
      margin-bottom: 2px;
      color: #656565;
    }
    .right form .msg{
      margin-top: 10px;
    }
    .right form input, .right form .msgForm{
      width: 100%;
      font-size: 1.0625rem;
      background: #151515;
      padding-left: 10px;
      border: 1px solid #222222;
    }
    .right form input:focus,
    .right form .msgForm:focus{
      outline-color: #3498db;
    }
    .right form input{
      height: 35px;
    }
    .right form .btn{
      margin-top: 10px;
    }
    .right form .btn button{
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
    .right form .btn button:hover{
      background: #000;
    }
    .bottom center{
      padding: 5px;
      font-size: 0.9375rem;
      background: #151515;
    }
    .bottom center span{
      color: #656565;
    }
    .bottom center a{
      color: #f12020;
      text-decoration: none;
    }
    .bottom center a:hover{
      text-decoration: underline;
    }
    @media screen and (max-width: 900px) {
      footer{
        position: relative;
        bottom: 0px;
      }
      .main-content{
        flex-wrap: wrap;
        flex-direction: column;
      }
      .main-content .box{
        margin: 5px 0;
      }
    }
    </style>
  


<section>
            <div>
            <!DOCTYPE html>
            <!-- Created By Aldy Kusuma Ardhana -->
            <html lang="en" dir="ltr">
              <head>
                <meta charset="utf-8">
                <title>Responsive Footer Section | Aldy Kusuma Ardhana</title>
                <link rel="stylesheet" href="style.css">
                <script src="https://kit.fontawesome.com/a076d05399.js"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body>
                <div class="content1">
                  <div class="text">
            Fully Responsive Footer Section</div>
            <div class="p">
            HTML and CSS (Flexbox)</div>
            </div>
            <footer>
                  <div class="main-content">
                    <div class="left box">
                      <h2>
            About us</h2>
            <div class="content">
                        <p>
            aldywebdev_29  is a Instagram account where you can learn web designing, web development, ui/ux designing, html css tutorial, hover animation and effects, javascript and jquery tutorial and related so on.</p>
            <div class="social">
                          <a href="https://facebook.com/coding.np"><span class="fab fa-facebook-f"></span></a>
                          <a href="#"><span class="fab fa-twitter"></span></a>
                          <a href="https://instagram.com/coding.np"><span class="fab fa-instagram"></span></a>
                          <a href="https://youtube.com/c/codingnepal"><span class="fab fa-youtube"></span></a>
                        </div>
            </div>
            </div>
            <div class="center box">
                      <h2>
            Address</h2>
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
                      <h2>
            Contact us</h2>
            <div class="content">
                        <form action="#">
                          <div class="email">
                            <div class="text">
            Email *</div>
            <input type="email" required>
                          </div>
            <div class="msg">
                            <div class="text">
            Message *</div>
            <input type="message" required>
                          </div>
            <div class="msg">
                            <div class="text">
            <!-- NOTE: Due to more textarea tag I got an error. So I changed the textarea name to changeit. Please change that changeit name to textarea -->
            <changeit id=".msgForm" rows="2" cols="25" required></changeit> <!-- replace this changeit name to textarea -->
                          
                          <br />
            <div class="btn">
            <button type="submit">Send</button>
                          </div>
            <div class="bottom">
            <center>
                      <span class="credit">Created By <a href="https://youtube.com/c/codingnepal">Aldy Kusuma Ardhana</a> | </span>
                      <span class="far fa-copyright"></span> 2020 All rights reserved.
                    </center>
            </div>

            <script id="footer_1">//start js 

            </script> 
          
            </div>   
         
</section>
  `
});
