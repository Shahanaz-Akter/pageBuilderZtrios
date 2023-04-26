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
 let current_fs, next_fs, previous_fs; //fieldsets
 let left, opacity, scale; //fieldset properties which we will animate
 let animating; //flag to prevent quick multi-click glitches
 
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
<input type="password" id="password" name="user_password">

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
            max - width: 300px;
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
            margin - bottom: 30px;
          border: none;
}

          .form_3 legend {
            font - size: 1.4em;
          margin-bottom: 10px;
}

          .form_3 label {
            display: block;
          margin-bottom: 8px;
}

          .form_3 label.light {
            font - weight: 300;
          display: inline;
}

          .form_3 .number {
            background - color: #5fcf80;
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
            max - width: 480px;
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
  font - weight: 300;
margin: 0;
margin-bottom: 1.25rem;
}

.form_4.form_4 .link {
  color: let(--gray);
font-size: 0.9rem;
margin: 1.5rem 0;
text-decoration: none;
}

.form_4.form_4 .container {
  background - color: let(--white);
border-radius: let(--button-radius);
box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
height: let(--max-height);
max-width: let(--max-width);
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
  background - color: let(--lightblue);
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
  align - items: center;
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
  background - color: let(--blue);
background-image: linear-gradient(90deg, let(--blue) 0%, let(--lightblue) 74%);
border-radius: 20px;
border: 1px solid let(--blue);
color: let(--white);
cursor: pointer;
font-size: 0.8rem;
font-weight: bold;
letter-spacing: 0.1rem;
padding: 0.9rem 4rem;
text-transform: uppercase;
transition: transform 80ms ease-in;
}

.form_4 .form > .btn {
  margin - top: 1.5rem;
}

.form_4 .btn:active {
  transform: scale(0.95);
}

.form_4 .btn:focus {
  outline: none;
}

.form_4 .form {
  background - color: let(--white);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 3rem;
height: 100%;
text-align: center;
}

.form_4 .input {
  background - color: #fff;
border: none;
padding: 0.9rem 0.9rem;
margin: 0.5rem 0;
width: 100%;
}

@keyframes show {
  0 %,
  49.99 % {
    opacity: 0;
    z- index: 1;
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
  image: "http://localhost/PageBuilderZtrios/img/intro/5.jpg",
  html: `
<style>


.wrapper1{
background: #e9eaea;
font-family: roboto;
user-select: none;
}

.container1 {
width: 450px;
margin: 30px auto;
}

.signup1,
.login1 {
width: 50%;
background: #fff;
float: left;
height: 60px;
line-height: 60px;
text-align: center;
cursor: pointer;
text-transform: uppercase;
}

.signup-form1,
.login-form1 {
background: #fff;
padding: 40px;
clear: both;
width: 100%;
box-sizing: border-box;
height: 400px;
}

.input1 {
width: 100%;
padding: 20px;
box-sizing: border-box;
margin-bottom: 25px;
border: 2px solid #e9eaea;
color: #3e3e40;
font-size: 14px;
outline: none;
transform: all 0.5s ease;
}

.input1:focus {
border: 2px solid #34b3a0;
}

.btn1 {
width: 100%;
background: #34b3a0;
height: 60px;
text-align: center;
line-height: 60px;
text-transform: uppercase;
color: #fff;
font-weight: bold;
letter-spacing: 1px;
cursor: pointer;
margin-bottom: 30px;
}

span a {
text - decoration: none;
color: #000;
}

::-webkit-input-placeholder {
/* Chrome/Opera/Safari */
color: #3e3e40;
font-family: roboto;
}

::-moz-placeholder {
/* Firefox 19+ */
color: #3e3e40;
font-family: roboto;
}

:-ms-input-placeholder {
/* IE 10+ */
color: #3e3e40;
font-family: roboto;
}

:-moz-placeholder {
/* Firefox 18- */
color: #3e3e40;
font-family: roboto;
}

</style>

<section>
<div class="">

<div class="wrapper1" style="border: 2px solid red;">
<div class="container1">

<div class="signup1">Sign Up</div>
<div class="login1">Log In</div>

<div class="signup-form1">
<input type="text" placeholder="Your Email Address" class="input1"><br />
<input type="text" placeholder="Choose a Username" class="input1"><br />
<input type="password" placeholder="Choose a Password" class="input1"><br />
<div class="btn1">Create account</div>
</div>

<div class="login-form1">
<input type="text" placeholder="Email or Username" class="input1"><br />
<input type="password" placeholder="Password" class="input1"><br />
<div class="btn1">log in</div>
<span><a href="#">I forgot my username or password.</a></span>
</div>
</div>

<script id="form5_script">
document.querySelector(".login-form1").style.display = "none";
document.querySelector(".login1").style.background = "none";

document.querySelector(".login1").addEventListener("click", function() {
document.querySelector(".signup-form1").style.display = "none";
document.querySelector(".login-form1").style.display = "block";
document.querySelector(".signup1").style.background = "none";
document.querySelector(".login1").style.background = "#fff";
});

document.querySelector(".signup1").addEventListener("click", function() {
document.querySelector(".signup-form1").style.display = "block";
document.querySelector(".login-form1").style.display = "none";
document.querySelector(".login1").style.background = "none";
document.querySelector(".signup1").style.background = "#fff";
});

var buttons = document.querySelectorAll(".btn1");
buttons.forEach(function(button) {
button.addEventListener("click", function () {
var inputs = document.querySelectorAll(".input1");
inputs.forEach(function (input) {
input.value = "";
});
});
});
</script>
 
</div>
</section>
`
});






