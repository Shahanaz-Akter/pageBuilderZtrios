Vvveb.SectionsGroup['Form Section'] = ["bootstrap4/form_1", "bootstrap4/form_2", "bootstrap4/form_3", "bootstrap4/form_4", "bootstrap4/form_5"];

Vvveb.Sections.add("bootstrap4/form_1", {
  name: "Form1 Demo",
  dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
  image: "http://localhost/PageBuilderZtrios/img/intro/form_1.PNG",
  html: `

<section class="form_1">
<div>
<div class="contain">  
  <form id="contact" action="" method="post">
    <h3>Colorlib Contact Form</h3>
    <h4>Contact us for custom quote</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    <p class="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p>
  </form>
</div>
<style>

@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);


.form_1 .contain {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

.form_1 #contact {
  background: #F9F9F9;
  padding: 25px;
  margin: 150px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form_1 #contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

.form_1 #contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

.form_1 fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

.form_1 #contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

.form_1 #contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #4CAF50;
  color: #FFF;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

.form_1 #contact button[type="submit"]:hover {
  background: #43A047;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

.form_1 #contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.form_1 .copyright {
  text-align: center;
}

.form_1 #contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

.form_1 ::-webkit-input-placeholder {
  color: #888;
}

.form_1 :-moz-placeholder {
  color: #888;
}

.form_1 ::-moz-placeholder {
  color: #888;
}

.form_1 :-ms-input-placeholder {
  color: #888;
}
 
</style>

<script id="form-1_script"></script>

<div>
</section>
`
});




Vvveb.Sections.add("bootstrap4/form_2", {
  name: "Form2 Demo",
  dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
  image: "http://localhost/PageBuilderZtrios/img/intro/form_2.png",
  html: `



  
 <style>
 
 .form2 input, button {
  border: none;
  outline: none;
  background: none;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}
.form2 .tip {
  font-size: 20px;
  margin: 40px auto 50px;
  text-align: center;
}
.form2 .cont {
  overflow: hidden;
  position: relative;
  width: 900px;
  height: 550px;
  margin: 0 auto 100px;
  background: #fff;
}
.form2 .form {
  position: relative;
  width: 640px;
  height: 100%;
  transition: transform 1.2s ease-in-out;
  padding: 50px 30px 0;
}
.form2 .sub-cont {
  overflow: hidden;
  position: absolute;
  left: 640px;
  top: 0;
  width: 900px;
  height: 100%;
  padding-left: 260px;
  background: #fff;
  transition: transform 1.2s ease-in-out;
}
.form2 .cont.s--signup .sub-cont {
  transform: translate3d(-640px, 0, 0);
}
.form2 button {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}
.form2 .img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
  padding-top: 360px;
}
.form2 .img:before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 900px;
  height: 100%;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg');
  background-size: cover;
  transition: transform 1.2s ease-in-out;
}
.form2 .img:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.form2 .cont.s--signup .img:before {
  transform: translate3d(640px, 0, 0);
}
.form2 .img__text {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  transition: transform 1.2s ease-in-out;
}
.form2 .img__text h2 {
  margin-bottom: 10px;
  font-weight: normal;
}
.form2 .img__text p {
  font-size: 14px;
  line-height: 1.5;
}
.form2 .cont.s--signup .img__text.m--up {
  transform: translateX(520px);
}
.form2 .img__text.m--in {
  transform: translateX(-520px);
}
.form2 .cont.s--signup .img__text.m--in {
  transform: translateX(0);
}
.form2 .img__btn {
  overflow: hidden;
  z-index: 2;
  position: relative;
  width: 100px;
  height: 36px;
  margin: 0 auto;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
}
.form2 .img__btn:after {
  content: '';
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 30px;
}
.form2 .img__btn span {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: transform 1.2s;
}
.form2 .img__btn span.m--in {
  transform: translateY(-72px);
}
.form2 .cont.s--signup .img__btn span.m--in {
  transform: translateY(0);
}
.form2 .cont.s--signup .img__btn span.m--up {
  transform: translateY(72px);
}
.form2 h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
}
.form2 label {
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}
.form2 label span {
  font-size: 12px;
  color: #cfcfcf;
  text-transform: uppercase;
}
.form2 input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
}
.form2 .forgot-pass {
  margin-top: 15px;
  text-align: center;
  font-size: 12px;
  color: #cfcfcf;
}
.form2 .submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background: #d4af7a;
  text-transform: uppercase;
}
.form2 .fb-btn {
  border: 2px solid #d3dae9;
  color: #8fa1c7;
}
.form2 .fb-btn span {
  font-weight: bold;
  color: #455a81;
}
.form2 .sign-in {
  transition-timing-function: ease-out;
}
.form2 .cont.s--signup .sign-in {
  transition-timing-function: ease-in-out;
  transition-duration: 1.2s;
  transform: translate3d(640px, 0, 0);
}
.form2 .sign-up {
  transform: translate3d(-900px, 0, 0);
}
.form2 .cont.s--signup .sign-up {
  transform: translate3d(0, 0, 0);
}
.form2 .icon-link {
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 32px;
}
.form2 .icon-link img {
  width: 100%;
  vertical-align: top;
}
.form2 .icon-link--twitter {
  left: auto;
  right: 5px;
}
</style>


<section class="form2">

<p class="tip">Click on button in image container</p>
<div class="cont">
  <div class="form sign-in">
    <h2>Welcome back,</h2>
    <label>
      <span>Email</span>
      <input type="email" />
    </label>
    <label>
      <span>Password</span>
      <input type="password" />
    </label>
    <p class="forgot-pass">Forgot password?</p>
    <button type="button" class="submit">Sign In</button>
    <button type="button" class="fb-btn">Connect with <span>facebook</span></button>
  </div>
  <div class="sub-cont">
    <div class="img">
      <div class="img__text m--up">
        <h2>New here?</h2>
        <p>Sign up and discover great amount of new opportunities!</p>
      </div>
      <div class="img__text m--in">
        <h2>One of us?</h2>
        <p>If you already has an account, just sign in. We've missed you!</p>
      </div>
      <div class="img__btn">
        <span class="m--up">Sign Up</span>
        <span class="m--in">Sign In</span>
      </div>
    </div>
    <div class="form sign-up">
      <h2>Time to feel like home,</h2>
      <label>
        <span>Name</span>
        <input type="text" />
      </label>
      <label>
        <span>Email</span>
        <input type="email" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" />
      </label>
      <button type="button" class="submit">Sign Up</button>
      <button type="button" class="fb-btn">Join with <span>facebook</span></button>
    </div>
  </div>
</div>

<a href="https://dribbble.com/shots/3306190-Login-Registration-form" target="_blank" class="icon-link">
  <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png">
</a>
<a href="https://twitter.com/NikolayTalanov" target="_blank" class="icon-link icon-link--twitter">
  <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png">
</a>



 <script id="form_2_script">
 

 //jQuery time
 var current_fs, next_fs, previous_fs; //fieldsets
 var left, opacity, scale; //fieldset properties which we will animate
 var animating; //flag to prevent quick multi-click glitches
 
 $(".next").click(function(){
   if(animating) return false;
   animating = true;
   
   current_fs = $(this).parent();
   next_fs = $(this).parent().next();
   
   //activate next step on progressbar using the index of next_fs
   $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
   
   //show the next fieldset
   next_fs.show(); 
   //hide the current fieldset with style
   current_fs.animate({opacity: 0}, {
     step: function(now, mx) {
       //as the opacity of current_fs reduces to 0 - stored in "now"
       //1. scale current_fs down to 80%
       scale = 1 - (1 - now) * 0.2;
       //2. bring next_fs from the right(50%)
       left = (now * 50)+"%";
       //3. increase opacity of next_fs to 1 as it moves in
       opacity = 1 - now;
       current_fs.css({
         'transform': 'scale('+scale+')',
         'position': 'absolute'
       });
       next_fs.css({'left': left, 'opacity': opacity});
     }, 
     duration: 800, 
     complete: function(){
       current_fs.hide();
       animating = false;
     }, 
     //this comes from the custom easing plugin
     easing: 'easeInOutBack'
   });
 });
 
 $(".previous").click(function(){
   if(animating) return false;
   animating = true;
   
   current_fs = $(this).parent();
   previous_fs = $(this).parent().prev();
   
   //de-activate current step on progressbar
   $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
   
   //show the previous fieldset
   previous_fs.show(); 
   //hide the current fieldset with style
   current_fs.animate({opacity: 0}, {
     step: function(now, mx) {
       //as the opacity of current_fs reduces to 0 - stored in "now"
       //1. scale previous_fs from 80% to 100%
       scale = 0.8 + (1 - now) * 0.2;
       //2. take current_fs to the right(50%) - from 0%
       left = ((1-now) * 50)+"%";
       //3. increase opacity of previous_fs to 1 as it moves in
       opacity = 1 - now;
       current_fs.css({'left': left});
       previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
     }, 
     duration: 800, 
     complete: function(){
       current_fs.hide();
       animating = false;
     }, 
     //this comes from the custom easing plugin
     easing: 'easeInOutBack'
   });
 });
 
 

</script>
 
    </div>
    </section>
    `
});





Vvveb.Sections.add("bootstrap4/form_3", {
  name: "Form3 Demo",
  dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
  image: "http://localhost/PageBuilderZtrios/img/intro/form_3.png",
  html: `

<section>
      <div class="form_3">
     
        <div class="row">
      <div class="col-md-12">
        <form action="index.html" method="post">
          <h1> Sign Up </h1>
          
          <fieldset>
            
            <legend><span class="number">1</span> Your Basic Info</legend>
          
            <label for="name">Name:</label>
            <input type="text" id="name" name="user_name">
          
            <label for="email">Email:</label>
            <input type="email" id="mail" name="user_email">
         
            <label for="password">Password:</label>
            <input type="password" id="password"       name="user_password">
          
            <label>Age:</label>
            <input type="radio" id="under_13" value="under_13" name="user_age"><label for="under_13" class="light">Under 13</label><br>
            <input type="radio" id="over_13" value="over_13" name="user_age"><label for="over_13" class="light">Over 13</label>
            
          </fieldset>
          <fieldset>  
          
            <legend><span class="number">2</span> Your Profile</legend>
            
           <label for="bio">Bio:</label>
            <textarea id="bio" name="user_bio"></textarea>
          
          
           <label for="job">Job Role:</label>
            <select id="job" name="user_job">
              <optgroup label="Web">
                <option value="frontend_developer">Front-End Developer</option>
                <option value="php_developer">PHP Developer</option>
                <option value="python_developer">Python Developer</option>
                <option value="rails_developer">Rails Developer</option>
                <option value="web_designer">Web Designer</option>
                <option value="wordpress_developer">Wordpress Developer</option>
              </optgroup>
              <optgroup label="Mobile">
                <option value="android_developer">Android Developer</option>
                <option value="ios_developer">IOS Developer</option>
                <option value="mobile_designer">Mobile Designer</option>
              </optgroup>
              <optgroup label="Business">
                <option value="business_owner">Business Owner</option>
                <option value="freelancer">Freelancer</option>
              </optgroup>
            </select>
            
            <label>Interests:</label>
            <input type="checkbox" id="development" value="interest_development" name="user_interest"><label class="light" for="development">Development</label><br>
            <input type="checkbox" id="design" value="interest_design" name="user_interest"><label class="light" for="design">Design</label><br>
            <input type="checkbox" id="business" value="interest_business" name="user_interest"><label class="light" for="business">Business</label>
            
           </fieldset>
         
          <button type="submit">Sign Up</button>
          
         </form>
          </div>
        </div>
          <style>    
          .form_3 form {
            max-width: 300px;
            margin: 10px auto;
            padding: 10px 20px;
            background: #f4f7f8;
            border-radius: 8px;
          }
          
          .form_3 h1 {
            margin: 0 0 30px 0;
            text-align: center;
          }
          
          .form_3 input[type="text"],
          .form_3 input[type="password"],
          .form_3 input[type="date"],
          .form_3 input[type="datetime"],
          .form_3 input[type="email"],
          .form_3 input[type="number"],
          .form_3  input[type="search"],
          .form_3 input[type="tel"],
          .form_3 input[type="time"],
          .form_3 input[type="url"],
          .form_3  textarea,
          .form_3 select {
            background: rgba(255,255,255,0.1);
            border: none;
            font-size: 16px;
            height: auto;
            margin: 0;
            outline: 0;
            padding: 15px;
            width: 100%;
            background-color: #e8eeef;
            color: #8a97a0;
            box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
            margin-bottom: 30px;
          }
          
          .form_3 input[type="radio"],
          .form_3 input[type="checkbox"] {
            margin: 0 4px 8px 0;
          }
          
          .form_3 select {
            padding: 6px;
            height: 32px;
            border-radius: 2px;
          }
          
          .form_3 button {
            padding: 19px 39px 18px 39px;
            color: #FFF;
            background-color: #4bc970;
            font-size: 18px;
            text-align: center;
            font-style: normal;
            border-radius: 5px;
            width: 100%;
            border: 1px solid #3ac162;
            border-width: 1px 1px 3px;
            box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;
            margin-bottom: 10px;
          }
          
          .form_3 fieldset {
            margin-bottom: 30px;
            border: none;
          }
          
          .form_3 legend {
            font-size: 1.4em;
            margin-bottom: 10px;
          }
          
          .form_3 label {
            display: block;
            margin-bottom: 8px;
          }
          
          .form_3 label.light {
            font-weight: 300;
            display: inline;
          }
          
          .form_3 .number {
            background-color: #5fcf80;
            color: #fff;
            height: 30px;
            width: 30px;
            display: inline-block;
            font-size: 0.8em;
            margin-right: 4px;
            line-height: 30px;
            text-align: center;
            text-shadow: 0 1px 0 rgba(255,255,255,0.2);
            border-radius: 100%;
          }
          
          @media screen and (min-width: 480px) {
          
            .form_3 form {
              max-width: 480px;
            }
          
          }
          
          </style>

          <script id="form_3_script"></script>

      </div>
</section>
  `
});




Vvveb.Sections.add("bootstrap4/form_4", {
  name: "Form4 Demo",
  dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
  image: "http://localhost/PageBuilderZtrios/img/intro/form_4.png",
  html: `



  <style>
  :root {
    /* COLORS */
    --white: #e9e9e9;
    --gray: #333;
    --blue: #0367a6;
    --lightblue: #008997;
  
    /* RADII */
    --button-radius: 0.7rem;
  
    /* SIZES */
    --max-width: 758px;
    --max-height: 420px;
  
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  
 
  
  .form_4 .form__title {
    font-weight: 300;
    margin: 0;
    margin-bottom: 1.25rem;
  }
  
  .form_4.form_4 .link {
    color: var(--gray);
    font-size: 0.9rem;
    margin: 1.5rem 0;
    text-decoration: none;
  }
  
  .form_4.form_4 .container {
    background-color: var(--white);
    border-radius: var(--button-radius);
    box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
      0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
    height: var(--max-height);
    max-width: var(--max-width);
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  
 .form_4.form_4  .container__form {
    height: 100%;
    position: absolute;
    top: 0;
    transition: all 0.6s ease-in-out;
  }
  
  .container--signin {
    left: 0;
    width: 50%;
    z-index: 2;
  }
  
  .container.right-panel-active .container--signin {
    transform: translateX(100%);
  }
  
  .container--signup {
    left: 0;
    opacity: 0;
    width: 50%;
    z-index: 1;
  }
  
  .container.right-panel-active .container--signup {
    animation: show 0.6s;
    opacity: 1;
    transform: translateX(100%);
    z-index: 5;
  }
  
  .container__overlay {
    height: 100%;
    left: 50%;
    overflow: hidden;
    position: absolute;
    top: 0;
    transition: transform 0.6s ease-in-out;
    width: 50%;
    z-index: 100;
  }
  
  .container.right-panel-active .container__overlay {
    transform: translateX(-100%);
  }
  
  .overlay {
    background-color: var(--lightblue);
    background: url("https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    left: -100%;
    position: relative;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    width: 200%;
  }
  
  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }
  
 .form_4.form_4  .overlay__panel {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: absolute;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    width: 50%;
  }
  
  .form_4.form_4 .overlay--left {
    transform: translateX(-20%);
  }
  
  .form_4 .container.right-panel-active .overlay--left {
    transform: translateX(0);
  }
  
  .form_4 .overlay--right {
    right: 0;
    transform: translateX(0);
  }
  
  .form_4 .container.right-panel-active .overlay--right {
    transform: translateX(20%);
  }
  
  .form_4 .btn {
    background-color: var(--blue);
    background-image: linear-gradient(90deg, var(--blue) 0%, var(--lightblue) 74%);
    border-radius: 20px;
    border: 1px solid var(--blue);
    color: var(--white);
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    padding: 0.9rem 4rem;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }
  
  .form_4 .form > .btn {
    margin-top: 1.5rem;
  }
  
  .form_4 .btn:active {
    transform: scale(0.95);
  }
  
  .form_4 .btn:focus {
    outline: none;
  }
  
  .form_4 .form {
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 3rem;
    height: 100%;
    text-align: center;
  }
  
  .form_4 .input {
    background-color: #fff;
    border: none;
    padding: 0.9rem 0.9rem;
    margin: 0.5rem 0;
    width: 100%;
  }
  
  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }
  
    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }
  .form_4{
    
  }
  
  </style>


  <section>
  <div class="form_4">

  <div class="container">
	<!-- Sign Up -->
	<div class="container__form container--signup">
		<form action="#" class="form" id="form1">
			<h2 class="form__title">Sign Up</h2>
			<input type="text" placeholder="User" class="input" />
			<input type="email" placeholder="Email" class="input" />
			<input type="password" placeholder="Password" class="input" />
			<button class="btn">Sign Up</button>
		</form>
	</div>

	<!-- Sign In -->
	<div class="container__form container--signin">
		<form action="#" class="form" id="form2">
			<h2 class="form__title">Sign In</h2>
			<input type="email" placeholder="Email" class="input" />
			<input type="password" placeholder="Password" class="input" />
			<a href="#" class="link">Forgot your password?</a>
			<button class="btn">Sign In</button>
		</form>
	</div>

	<!-- Overlay -->
	<div class="container__overlay">
		<div class="overlay">
			<div class="overlay__panel overlay--left">
				<button class="btn" id="signIn">Sign In</button>
			</div>
			<div class="overlay__panel overlay--right">
				<button class="btn" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>



   <script id="form_4_script">
   
   const signInBtn = document.getElementById("signIn");
   const signUpBtn = document.getElementById("signUp");
   const fistForm = document.getElementById("form1");
   const secondForm = document.getElementById("form2");
   const container = document.querySelector(".container");
   
   signInBtn.addEventListener("click", () => {
     container.classList.remove("right-panel-active");
   });
   
   signUpBtn.addEventListener("click", () => {
     container.classList.add("right-panel-active");
   });
   
   fistForm.addEventListener("submit", (e) => e.preventDefault());
   secondForm.addEventListener("submit", (e) => e.preventDefault());
   
  </script>

  </div>
  </section>
  `
  });



Vvveb.Sections.add("bootstrap4/form_5", {
  name: "Form5 Demo",
  dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
  image: "http://localhost/PageBuilderZtrios/img/intro/form_5.png",
  html: `


 <style>

*:focus {
 outline: none !important;
}


main {
 background: white;
 height: 100%;
}
main aside {
 position: relative;
 display: flex;
 flex-flow: row wrap;
 align-items: center;
 align-content: center;
 justify-content: center;
 height: calc(100% / 3);
 padding: 12px;
 background: #dfb72c url('https://images.unsplash.com/photo-1443131307017-4097c8ac7763?dpr=2&auto=format&fit=crop&w=1500&h=1909&q=80&cs=tinysrgb') no-repeat center center / cover;
}
main aside div:empty {
 opacity: 0.5;
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: #dfb72c url('https://images.unsplash.com/photo-1443131307017-4097c8ac7763?dpr=2&auto=format&fit=crop&w=1500&h=1909&q=80&cs=tinysrgb') no-repeat center center / cover;
 background-blend-mode: screen;
}
main aside svg {
 position: relative;
 margin-top: -24px;
 width: 150px;
 height: 150px;
}
main aside div:not(:empty) {
 position: relative;
 width: 100%;
 margin-top: -24px;
}
main aside p {
 position: relative;
 width: 100%;
 margin: 0;
 color: white;
 font-size: 18px;
 line-height: 1.2;
 text-align: center;
 text-shadow: 0 0 10px rgba(133, 117, 103, .5);
}
main aside p strong {
 font-weight: 700;
}
main aside p:nth-child(2) {
 position: absolute;
 top: 0;
 left: 0;
}
main aside p.active {
 visibility: visible;
 opacity: 1;
 transform: none;
}
main aside p:not(.active) {
 visibility: hidden;
 opacity: 0;
 transform: translateY(100px);
}
main section {
 position: relative;
 height: calc(100% / 3 * 2);
}
main section h1 {
 display: flex;
 justify-content: center;
 padding: 12px;
 color: #dfb72c;
 font-size: 28px;
 line-height: 1;
 text-align: center;
 text-transform: lowercase;
}
main section h1 a {
 display: block;
 margin: 0 6px;
 cursor: pointer;
 transform: none;
}
main section h1 a:hover, main section h1 a:focus {
 color: #976a36;
}
main section h1 a:active {
 color: #857567;
}
main section h1 a.active {
 font-weight: 500;
}
main section h1 a:not(.active) {
 font-weight: 300;
}
main section form {
 display: flex;
 flex-flow: row wrap;
 position: absolute;
 bottom: 0;
 left: 0;
 width: 100%;
 height: calc(100% - 40px);
}
main section form > div, main section form > ul {
 width: 100%;
 padding: 6px;
}
main section form fieldset {
 padding: 6px;
}
main section form fieldset div {
 display: flex;
 border-radius: 2px;
 overflow: hidden;
}
main section form fieldset div label {
 display: block;
 margin: 0;
 padding: 6px 9px;
 background: #dfb72c;
 color: white;
 font-size: 16px;
 cursor: pointer;
 line-height: 25px;
}
main section form fieldset div input {
 display: block;
 background: white;
 border: 1px solid #dfb72c;
 border-left: 0;
 border-radius: 0 2px 2px 0;
 box-shadow: none;
 margin: 0;
 padding: 6px 9px;
 width: 100%;
 color: #857567;
 font-family: "brandon-grotesque", "Brandon Grotesque", "Source Sans Pro", "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
 font-size: 16px;
}
main section form fieldset div input::placeholder {
 color: rgba(133, 117, 103, .4);
}
main section form fieldset div input:focus {
 background: rgba(233, 226, 213, .5);
}
main section form fieldset div input:focus::placeholder {
 color: rgba(133, 117, 103, .6);
}
main section form li {
 padding: 6px;
}
main section form li button {
 display: block;
 margin: 0 auto;
 appearance: none;
 font-family: "brandon-grotesque", "Brandon Grotesque", "Source Sans Pro", "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
 border: 0;
 border-radius: 100px;
 color: white;
 font-size: 16px;
 padding: 6px 12px;
 cursor: pointer;
}
main section form li button.fb {
 background: #3b5998;
}
main section form li button.fb:hover, main section form li button.fb:focus {
 background: #5f7ec1;
}
main section form li button.fb:active {
 background: #263961;
}
main section form li button.tw {
 background: #00aced;
}
main section form li button.tw:hover, main section form li button.tw:focus {
 background: #3bc9ff;
}
main section form li button.tw:active {
 background: #0074a1;
}
main section form input[type="submit"] {
 display: block;
 align-self: flex-end;
 appearance: none;
 width: 100%;
 margin: 0;
 border: 0;
 border-radius: 0;
 font-family: "brandon-grotesque", "Brandon Grotesque", "Source Sans Pro", "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
 font-size: 24px;
 text-transform: lowercase;
 line-height: 2;
 background: #dfb72c;
 color: white;
 cursor: pointer;
}
main section form input[type="submit"]:hover, main section form input[type="submit"]:focus {
 background: #976a36;
}
main section form input[type="submit"]:active {
 background: #857567;
}
main section form.active {
 opacity: 1;
 z-index: 1;
}
main section form.active fieldset, main section form.active li, main section form.active input[type="submit"] {
 transform: translateY(0px);
 opacity: 1;
}
main section form:not(.active) {
 opacity: 0;
 z-index: 0;
}
main section form:not(.active) fieldset, main section form:not(.active) li, main section form:not(.active) input[type="submit"] {
 transform: translateY(100px);
 opacity: 0;
}
main.with-hover aside p {
 transition: all 250ms ease-out;
}
main.with-hover section h1 a {
 transition: all 150ms ease-out;
}
main.with-hover section h1 a:hover, main.with-hover section h1 a:focus {
 transition: all 300ms ease-out;
}
main.with-hover section h1 a:active {
 transition: all 150ms ease-in;
}
main.with-hover section form {
 transition: all 1000ms ease-out;
}
main.with-hover section form fieldset, main.with-hover section form li, main.with-hover section form input[type="submit"] {
 transition: all 500ms ease-out;
}
main.with-hover section form button, main.with-hover section form input {
 transition: all 150ms ease-out;
}
main.with-hover section form button:hover, main.with-hover section form input:hover, main.with-hover section form button:focus, main.with-hover section form input:focus {
 transition: all 300ms ease-out;
}
main.with-hover section form button:active, main.with-hover section form input:active {
 transition: all 150ms ease-in;
}
main.with-hover section form.active#form-signup fieldset:nth-child(2) {
 transition-delay: 50ms;
}
main.with-hover section form.active#form-signup fieldset:nth-child(3) {
 transition-delay: 100ms;
}
main.with-hover section form.active#form-signup li:nth-child(1) {
 transition-delay: 150ms;
}
main.with-hover section form.active#form-signup li:nth-child(2) {
 transition-delay: 200ms;
}
main.with-hover section form.active#form-signup input[type="submit"] {
 transition-delay: 250ms;
}
main.with-hover section form.active#form-login fieldset:nth-child(2) {
 transition-delay: 50ms;
}
main.with-hover section form.active#form-login li:nth-child(1) {
 transition-delay: 100ms;
}
main.with-hover section form.active#form-login li:nth-child(2) {
 transition-delay: 150ms;
}
main.with-hover section form.active#form-login input[type="submit"] {
 transition-delay: 200ms;
}
main.with-hover section form:not(.active)#form-signup fieldset:nth-child(1) {
 transition-delay: 250ms;
}
main.with-hover section form:not(.active)#form-signup fieldset:nth-child(2) {
 transition-delay: 200ms;
}
main.with-hover section form:not(.active)#form-signup fieldset:nth-child(3) {
 transition-delay: 150ms;
}
main.with-hover section form:not(.active)#form-signup li:nth-child(1) {
 transition-delay: 100ms;
}
main.with-hover section form:not(.active)#form-signup li:nth-child(2) {
 transition-delay: 50ms;
}
main.with-hover section form:not(.active)#form-login fieldset:nth-child(1) {
 transition-delay: 200ms;
}
main.with-hover section form:not(.active)#form-login fieldset:nth-child(2) {
 transition-delay: 150ms;
}
main.with-hover section form:not(.active)#form-login li:nth-child(1) {
 transition-delay: 100ms;
}
main.with-hover section form:not(.active)#form-login li:nth-child(2) {
 transition-delay: 50ms;
}
main.pre-enter aside {
 transform-origin: center top;
 transform: scaleY(0);
 visibility: hidden;
}
main.pre-enter aside svg {
 transform-origin: center center;
 transform: scale(0) rotate(90deg);
 visibility: hidden;
}
main.pre-enter aside p.active {
 opacity: 0;
 transform: translateY(100px);
 visibility: hidden;
}
main.pre-enter section h1 a {
 visibility: hidden;
 opacity: 0;
}
main.pre-enter section h1 a:first-child {
 transform-origin: right center;
 transform: translateX(200px) scaleX(0);
}
main.pre-enter section h1 a:last-child {
 transform-origin: left center;
 transform: translateX(-200px) scaleX(0);
}
main.pre-enter section form fieldset, main.pre-enter section form li {
 opacity: 0;
 transform: translateY(100px);
 visibility: hidden;
}
main.pre-enter section form input[type="submit"] {
 transform-origin: center bottom;
 transform: scaleY(0);
 color: #dfb72c;
 visibility: hidden;
}
main.on-enter aside {
 animation: scaleYIn 1000ms linear forwards;
 visibility: visible;
}
main.on-enter aside svg {
 animation: bounceIn-rotate 1000ms linear forwards 250ms;
 visibility: visible;
}
main.on-enter aside p.active {
 animation: slideInUp-fadeIn 1000ms linear forwards 500ms;
 visibility: visible;
}
main.on-enter section h1 a {
 visibility: visible;
}
main.on-enter section h1 a:first-child {
 animation: scaleX-slideInRight 1000ms linear forwards 750ms;
}
main.on-enter section h1 a:last-child {
 animation: scaleX-slideInLeft 1000ms linear forwards 750ms;
}
main.on-enter section form fieldset, main.on-enter section form li {
 animation: slideInUp-fadeIn 1000ms linear forwards;
 visibility: visible;
}
main.on-enter section form fieldset:nth-child(1) {
 animation-delay: 1250ms;
}
main.on-enter section form fieldset:nth-child(2) {
 animation-delay: 1350ms;
}
main.on-enter section form fieldset:nth-child(3) {
 animation-delay: 1450ms;
}
main.on-enter section form li:nth-child(1) {
 animation-delay: 1550ms;
}
main.on-enter section form li:nth-child(2) {
 animation-delay: 1650ms;
}
main.on-enter section form input[type="submit"] {
 animation: scaleYIn 1000ms linear forwards 1750ms, lemon-white 250ms linear forwards 2150ms;
 visibility: visible;
}
@media only screen and (min-width: 624px) {
 body {
   display: flex;
   align-items: center;
   align-content: center;
   justify-content: center;
   background: #52504e;
}
 main {
   display: flex;
   border-radius: 2px;
   overflow: hidden;
   height: 100%;
   max-height: 400px;
   box-shadow: 0 0 10px rgba(56, 54, 53, 0.5);
}
 main aside, main section {
   height: 100%;
   width: 300px;
}
 main.pre-enter {
   opacity: 0;
   visibility: hidden;
}
 main.pre-enter aside {
   transform: none;
}
 main.on-enter {
   animation: slideDown-fadeIn 1000ms linear forwards;
   visibility: visible;
}
 main.on-enter aside {
   animation: none;
}
}
@keyframes lemon-white {
 0% {
   color: #dfb72c;
}
 100% {
   color: white;
}
}
/* https://goo.gl/U6p2Ra */
@keyframes slideDown-fadeIn {
 0% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -400, 0, 1);
   opacity: 0;
}
 4% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -227.213, 0, 1);
}
 7.91% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -44.516, 0, 1);
}
 11.91% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 75.765, 0, 1);
}
 15.82% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 110.328, 0, 1);
   opacity: 1;
}
 20.42% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 78.474, 0, 1);
}
 24.92% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 23.745, 0, 1);
}
 29.53% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -16.119, 0, 1);
}
 34.03% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -27.704, 0, 1);
}
 43.14% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -5.859, 0, 1);
}
 52.15% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 6.958, 0, 1);
}
 70.37% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.747, 0, 1);
}
 88.59% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.439, 0, 1);
}
 100% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
   opacity: 1;
}
}
/* https://goo.gl/gsBg5l */
@keyframes scaleYIn {
 0% {
   transform: matrix3d(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 4% {
   transform: matrix3d(1, 0, 0, 0, 0, 0.432, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 7.91% {
   transform: matrix3d(1, 0, 0, 0, 0, 0.889, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 11.91% {
   transform: matrix3d(1, 0, 0, 0, 0, 1.189, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 15.82% {
   transform: matrix3d(1, 0, 0, 0, 0, 1.276, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 20.42% {
   transform: matrix3d(1, 0, 0, 0, 0, 1.196, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 24.92% {
   transform: matrix3d(1, 0, 0, 0, 0, 1.059, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 29.53% {
   transform: matrix3d(1, 0, 0, 0, 0, 0.96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 34.03% {
   transform: matrix3d(1, 0, 0, 0, 0, 0.931, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 43.14% {
   transform: matrix3d(1, 0, 0, 0, 0, 0.985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 52.15% {
   transform: matrix3d(1, 0, 0, 0, 0, 1.017, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 70.37% {
   transform: matrix3d(1, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 88.59% {
   transform: matrix3d(1, 0, 0, 0, 0, 1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 100% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
}
/* https://goo.gl/XC1o6q */
@keyframes scaleX-slideInLeft {
 0% {
   transform: matrix3d(0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
   opacity: 0;
}
 5.71% {
   transform: matrix3d(0.354, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -44.297, 0, 0, 1);
}
 6.31% {
   transform: matrix3d(0.384, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -45.449, 0, 0, 1);
}
 11.31% {
   transform: matrix3d(0.583, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -42.536, 0, 0, 1);
}
 12.51% {
   transform: matrix3d(0.621, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -39.889, 0, 0, 1);
}
 17.02% {
   transform: matrix3d(0.735, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -28.059, 0, 0, 1);
}
 18.82% {
   transform: matrix3d(0.771, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -23.316, 0, 0, 1);
}
 22.62% {
   transform: matrix3d(0.832, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -14.419, 0, 0, 1);
}
 25.03% {
   transform: matrix3d(0.862, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -9.822, 0, 0, 1);
}
 28.33% {
   transform: matrix3d(0.895, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -4.859, 0, 0, 1);
}
 33.93% {
   transform: matrix3d(0.935, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.401, 0, 0, 1);
   opacity: 1;
}
 37.54% {
   transform: matrix3d(0.952, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.162, 0, 0, 1);
}
 45.15% {
   transform: matrix3d(0.975, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 3.335, 0, 0, 1);
}
 50.05% {
   transform: matrix3d(0.984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 3.109, 0, 0, 1);
}
 72.57% {
   transform: matrix3d(0.998, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.773, 0, 0, 1);
}
 75.08% {
   transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.613, 0, 0, 1);
}
 100% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
   opacity: 1;
}
}
/* https://goo.gl/4dYUn6 */
@keyframes scaleX-slideInRight {
 0% {
   transform: matrix3d(0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
   opacity: 0;
}
 5.71% {
   transform: matrix3d(0.354, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 44.297, 0, 0, 1);
}
 6.31% {
   transform: matrix3d(0.384, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 45.449, 0, 0, 1);
}
 11.31% {
   transform: matrix3d(0.583, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 42.536, 0, 0, 1);
}
 12.51% {
   transform: matrix3d(0.621, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 39.889, 0, 0, 1);
}
 17.02% {
   transform: matrix3d(0.735, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 28.059, 0, 0, 1);
}
 18.82% {
   transform: matrix3d(0.771, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 23.316, 0, 0, 1);
}
 22.62% {
   transform: matrix3d(0.832, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 14.419, 0, 0, 1);
}
 25.03% {
   transform: matrix3d(0.862, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 9.822, 0, 0, 1);
}
 28.33% {
   transform: matrix3d(0.895, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4.859, 0, 0, 1);
}
 33.93% {
   transform: matrix3d(0.935, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.401, 0, 0, 1);
   opacity: 1;
}
 37.54% {
   transform: matrix3d(0.952, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -2.162, 0, 0, 1);
}
 45.15% {
   transform: matrix3d(0.975, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -3.335, 0, 0, 1);
}
 50.05% {
   transform: matrix3d(0.984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -3.109, 0, 0, 1);
}
 72.57% {
   transform: matrix3d(0.998, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.773, 0, 0, 1);
}
 75.08% {
   transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.613, 0, 0, 1);
}
 100% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
   opacity: 1;
}
}
/* https://goo.gl/lNPiqQ */
@keyframes slideInUp-fadeIn {
 0% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 100, 0, 1);
   opacity: 0;
}
 5.81% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 51.656, 0, 1);
}
 11.61% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 11.991, 0, 1);
}
 17.42% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -8.985, 0, 1);
}
 23.12% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -14.246, 0, 1);
}
 30.33% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -9.789, 0, 1);
}
 37.44% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -3.262, 0, 1);
}
 44.54% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.625, 0, 1);
   opacity: 1;
}
 51.65% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1.624, 0, 1);
}
 80.28% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.185, 0, 1);
}
 100% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
   opacity: 1;
}
}
/* https://goo.gl/mrRSVv */
@keyframes bounceIn-rotate {
 0% {
   transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 4% {
   transform: matrix3d(0.174, -0.395, 0, 0, 0.395, 0.174, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 6.31% {
   transform: matrix3d(0.405, -0.588, 0, 0, 0.588, 0.405, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 7.91% {
   transform: matrix3d(0.583, -0.67, 0, 0, 0.67, 0.583, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 11.91% {
   transform: matrix3d(0.965, -0.695, 0, 0, 0.695, 0.965, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 12.51% {
   transform: matrix3d(1.006, -0.681, 0, 0, 0.681, 1.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 15.82% {
   transform: matrix3d(1.145, -0.564, 0, 0, 0.564, 1.145, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 18.82% {
   transform: matrix3d(1.159, -0.435, 0, 0, 0.435, 1.159, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 20.42% {
   transform: matrix3d(1.137, -0.371, 0, 0, 0.371, 1.137, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 24.92% {
   transform: matrix3d(1.034, -0.23, 0, 0, 0.23, 1.034, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 25.03% {
   transform: matrix3d(1.032, -0.227, 0, 0, 0.227, 1.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 29.53% {
   transform: matrix3d(0.949, -0.142, 0, 0, 0.142, 0.949, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 34.03% {
   transform: matrix3d(0.926, -0.095, 0, 0, 0.095, 0.926, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 37.54% {
   transform: matrix3d(0.941, -0.071, 0, 0, 0.071, 0.941, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 43.14% {
   transform: matrix3d(0.984, -0.045, 0, 0, 0.045, 0.984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 50.05% {
   transform: matrix3d(1.016, -0.025, 0, 0, 0.025, 1.016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 52.15% {
   transform: matrix3d(1.017, -0.021, 0, 0, 0.021, 1.017, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 70.37% {
   transform: matrix3d(0.996, -0.003, 0, 0, 0.003, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 75.08% {
   transform: matrix3d(0.997, -0.002, 0, 0, 0.002, 0.997, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 88.59% {
   transform: matrix3d(1.001, 0, 0, 0, 0, 1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
 100% {
   transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
}

 
 </style>


 <section>
 <div class="form_5">
 
 <main ontouchstart class="with-hover">
	<aside>
		<div></div>
		<svg viewBox="0 0 100 100">
			<g stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path d="M65.892702,73 C70.3362168,68.5836139 73.0845878,62.4824333 73.0845878,55.7432553 C73.0845878,49.0040774 70.3362168,42.9028968 65.892702,38.4865107 C61.4491873,34.0701246 55.3105288,31.338533 48.5299539,31.338533 C41.749379,31.338533 35.6107205,34.0701246 31.1672058,38.4865107 C26.723691,42.9028968 23.97532,49.0040774 23.97532,55.7432553 C23.97532,62.4824333 26.723691,68.5836139 31.1672058,73 C31.1672058,73 65.892702,73 65.892702,73 Z M73.0594097,62.3985471 C76.4680437,61.2200182 88.5607213,56.1793944 85.5117743,37.8371245 L81.6924976,37.9360303 C80.8526284,43.134546 77.152648,46.6051883 72.4845099,46.6051883 M24.4062209,60.319036 C24.3904842,60.3191058 24.3747393,60.3191408 24.3589862,60.3191408 C18.6378761,60.3191408 14,55.70958 14,50.0233985 C14,44.3372171 18.6378761,39.7276563 24.3589862,39.7276563 C26.0569266,39.7276563 27.6594543,40.133673 29.0736464,40.8533508 M65.8946819,38.4867877 L31.1652244,38.4844448 M37.6782363,44.9577899 C34.9010396,47.7180312 33.1833077,51.5312691 33.1833077,55.7432553 C33.1833077,59.9552416 34.9010396,63.7684794 37.6782363,66.5287208 M45.4606247,29.0505903 L51.5992831,29.0505903 M48.5299539,26 L48.5299539,31.338533"></path>
			</g>
		</svg>
		<div>
			<p id="intro-signup" class="active"><strong>Cup o' Tea</strong> is even better with&nbsp;an&nbsp;account.</p>
			<p id="intro-login">Welcome back to<br/><strong>Cup o' Tea</strong>!</p>
		</div>
	</aside>
	<section>
		<h1>
			<a id="link-signup" class="active">Sign Up</a>
			<a id="link-login">Log In</a>
		</h1>
		<form id="form-signup" class="active">
			<div>
				<fieldset>
					<div>
						<label for="name">Name</label>
						<input id="name" type="text" placeholder="Marcia Polo"/>
					</div>
				</fieldset>
				<fieldset>
					<div>
						<label for="email">Email</label>
						<input id="email" type="email" placeholder="marcia@polo.com"/>
					</div>
				</fieldset>
				<fieldset>
					<div>
						<label for="password">Password</label>
						<input id="password" type="password" placeholder="••••••••"/>
					</div>
				</fieldset>
			</div>

			<ul>
				<li>
					<button class="fb">Connect with Facebook</button>
				</li>
				<li>
					<button class="tw">Connect with Twitter</button>
				</li>
			</ul>
			
			<input type="submit" value="Sign Up"/>
		</form>
		<form id="form-login">
			<div>
				<fieldset>
					<div>
						<label for="email">Email</label>
						<input id="email" type="email" placeholder="marcia@polo.com"/>
					</div>
				</fieldset>
				<fieldset>
					<div>
						<label for="password">Password</label>
						<input id="password" type="password" placeholder="••••••••"/>
					</div>
				</fieldset>
			</div>

			<ul>
				<li>
					<button class="fb">Connect with Facebook</button>
				</li>
				<li>
					<button class="tw">Connect with Twitter</button>
				</li>
			</ul>
			
			<input type="submit" value="Log In"/>
		</form>
	</section>
</main>



<script id="form_5_script">
    $("main").addClass("pre-enter").removeClass("with-hover");
    setTimeout(function(){
      $("main").addClass("on-enter");
    }, 500);
    setTimeout(function(){
      $("main").removeClass("pre-enter on-enter");
      setTimeout(function(){
        $("main").addClass("with-hover");
      }, 50);
    }, 3000);
    
    $("h1 a").click(function(){
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
      if ($(this).is("#link-signup")) {
        $("#form-login").removeClass("active");
        $("#intro-login").removeClass("active");
        setTimeout(function(){
          $("#form-signup").addClass("active");
          $("#intro-signup").addClass("active");
        }, 50);
      } else {
        $("#form-signup").removeClass("active");
        $("#intro-signup").removeClass("active");
        setTimeout(function(){
          $("#form-login").addClass("active");
          $("#intro-login").addClass("active");
        }, 50);
      }
    });
    </script>
</div>
</section>
`
});





// Vvveb.Sections.add("bootstrap4/form_4", {
//   name: "Form4 Demo",
//   dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
//   image: "http://localhost/PageBuilderZtrios/img/intro/card.png",
//   html: `

//   <style>
//   @property --rotate {
//     syntax: "<angle>";
//     initial-value: 132deg;
//     inherits: false;
//   }
  
//   :root {
//     --card-height: 65vh;
//     --card-width: calc(var(--card-height) / 1.5);
//   }
  
  
//   body {
//     min-height: 100vh;
//     background: #212534;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     padding-top: 2rem;
//     padding-bottom: 2rem;
//     box-sizing: border-box;
//   }
  
  
//   .card {
//     background: #191c29;
//     width: var(--card-width);
//     height: var(--card-height);
//     padding: 3px;
//     position: relative;
//     border-radius: 6px;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     display: flex;
//     font-size: 1.5em;
//     color: rgb(88 199 250 / 0%);
//     cursor: pointer;
//     font-family: cursive;
//   }
  
//   .card:hover {
//     color: rgb(88 199 250 / 100%);
//     transition: color 1s;
//   }
//   .card:hover:before, .card:hover:after {
//     animation: none;
//     opacity: 0;
//   }
  
  
//   .card::before {
//     content: "";
//     width: 104%;
//     height: 102%;
//     border-radius: 8px;
//     background-image: linear-gradient(
//       var(--rotate)
//       , #5ddcff, #3c67e3 43%, #4e00c2);
//       position: absolute;
//       z-index: -1;
//       top: -1%;
//       left: -2%;
//       animation: spin 2.5s linear infinite;
//   }
  
//   .card::after {
//     position: absolute;
//     content: "";
//     top: calc(var(--card-height) / 6);
//     left: 0;
//     right: 0;
//     z-index: -1;
//     height: 100%;
//     width: 100%;
//     margin: 0 auto;
//     transform: scale(0.8);
//     filter: blur(calc(var(--card-height) / 6));
//     background-image: linear-gradient(
//       var(--rotate)
//       , #5ddcff, #3c67e3 43%, #4e00c2);
//       opacity: 1;
//     transition: opacity .5s;
//     animation: spin 2.5s linear infinite;
//   }
  
//   @keyframes spin {
//     0% {
//       --rotate: 0deg;
//     }
//     100% {
//       --rotate: 360deg;
//     }
//   }
  
//   a {
//     color: #212534;
//     text-decoration: none;
//     font-family: sans-serif;
//     font-weight: bold;
//     margin-top: 2rem;
//   }
//   </>
//   <section>
//       <div class="form_3">

// <div class="card">
//   Magic Card
// </div>

// <a href="https://mythrillfiction.com/" target="_blank">Mythrill</a>
  
//       </div>
//       <script id="form_4_script"></script>
//       </section>
//   `
// });

