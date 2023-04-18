
Vvveb.SectionsGroup['Coming Soon'] =
  ["bootstrap4/coming-section"];


Vvveb.Sections.add("bootstrap4/coming-section", {
  name: "MY custom section name",
  dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/product.png">',
  image: "https://demo.vvveb.com/themes/blog-default/screenshot.png",
  html: `
<section data-name="coming-section">    
<div>
<div class="cm-1">
  <header role="banner">
    <h1 class="visually-hidden">Base Apparel Coming Soon</h1>
    <a href="/" title="return to the homepage" id="logo">
      <img src="https://res.cloudinary.com/gb2020/image/upload/v1589217430/base%20apparel%20coming%20soon/logo_homs80.svg" alt="Base Apparel Logo">
    </a>
  </header>
<div class="side-image"></div>
<main class="[ main ] [ flow ]">
  <h2>
   <span class="heading--pink">
      We're
   </span>
   coming soon
  </h2>
  <p>
    Hello fellow shoppers! We're currently building our new fashion store. 
    Add your email below to stay up-to-date with announcements and our launch deals.
  </p>
  <form action="/" class="[ form ] [ flow ]" method="POST" id="form">
    <div class="form__control">
      <input type="email"
             name="email"
             id="email"
             value=""
             autocapitalize="none"
             autocomplete="false"
             autocorrect="off"
             required
             pattern="[^@]+@[^\.]+\..+" />
      <label for="email">Email Address</label>
      <button class="button">
        <span class="visually-hidden">Submit email</span>
        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671" /></svg>
      </button>
      <div class="alert_icon"></div>
    </div>
  </form>
  <div aria-atomic="true" role="alert" class="form__alert"></div>
</main>
<footer>
  <p>Coded by <a href="https://codepen.io/garyb1" _target="blank">Gary Byrne</a></p>
</footer>

</div>
 
<style>
 




.cm-1 {
  height: 100vh;
  font-family: 'Josefin Sans', sans-serif;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-areas:
    "header side-image"
    "main side-image"
    "main side-image"
    "footer side-image";
  background-image: url('https://res.cloudinary.com/gb2020/image/upload/v1589217438/base%20apparel%20coming%20soon/bg-pattern-desktop_ohtovt.svg');
  background-size: 100% 100%;
}

/**
* Utilities
**/

.cm-1 .visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}

.cm-1 .flow {
  --flow-space: var(--metric-rhythm);
}

.cm-1 .flow > * + * {
  margin-top: 1em;
  margin-top: var(--flow-space);
}

/**
* Header
**/

.cm-1 header {
  grid-area: header;
  height: 100px;
  padding-top: 3rem;
  padding-left: 10rem;
}

/**
* Side
**/

.cm-1 .side-image {
  grid-area: side-image;
  background-image: url('https://res.cloudinary.com/gb2020/image/upload/v1589217439/base%20apparel%20coming%20soon/hero-desktop_qd7w4w.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

/**
* Main
**/

.cm-1 .main {
  grid-area: main;
  max-width: 800px;
  padding-left: 10rem;
}

.cm-1 h2 {
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  word-spacing: 100vw;
  line-height: 1.1em;
}

.cm-1 h2 .heading--pink {
  font-weight: 300;
  color: hsl(0, 36%, 70%);
  letter-spacing: 0.33em;
}

.cm-1 .main p {
  color: hsl(0, 36%, 70%);
  line-height: 1.5em;
  width: 49ch;
}

.cm-1 .form {
    --flow-space: 3.5rem;
}

.cm-1 .form__control {
  display: flex;
  position: relative;
  width: 48ch;
  border: 1px solid hsl(0, 36%, 70%);
  border-radius: 999px;
  transition: 0.2s;
  --flow-space: 0.5rem;
}

.cm-1 .form__control:focus-within {
  border-width: 2px;
}

.cm-1 .form__control label {
  position: absolute;
  text-transform: capitalize;
  height: 100%;
  color: hsl(0, 36%, 70%);
  display: flex;
  align-items: center;
  padding-left: 2rem;
  width: 100%;
  transition: 0.2s;
}

.cm-1 input:-webkit-autofill,
.cm-1 input:-webkit-autofill:hover, 
.cm-1 input:-webkit-autofill:focus, 
.cm-1 input:-webkit-autofill:active  {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}

.cm-1 .form__control input {
  border: none;
  background-color: transparent;
  outline: 0;
  padding: 20px 0 20px 2rem;
  flex: auto;
}

.cm-1 input:focus + label, input:not([value=""]) + label {
    align-items: flex-start;
    opacity: 0.75;
    transform: translateY(-1.5rem);
}


.cm-1 .button {
  z-index: 1;
  background-image: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
  min-width: 7.5rem;
  border-radius: 999px;
  cursor: pointer;
}

.cm-1 .button:hover, .button:focus {
  filter: brightness(1.05);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  color: #fff;
  outline: 0;
}

.cm-1 .button svg {
  transform: translateY(1px); /* Optical adjustment */
}

/**
 * ALERT COMPONENT
 */

.cm-1 .form__alert {
    --flow-space: 0;
}

.cm-1 .alert {
  --alert-text: hsl(0, 36%, 70%);

  display: flex;
  align-items: flex-start;
  color: var(--alert-text);
  animation: slide-up 250ms ease;
}

.cm-1 .alert[data-state='success'] {
  --alert-text: green;
}

.cm-1 .alert__icon {
  font-size: 1.6em;
  flex-shrink: 0;
}

.cm-1 .alert__content {
  padding-left: 2rem;
}

.cm-1 .alert__content b {
  display: block;
}

/**
 * ANIMATIONS
 */
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(0.4rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/**
* Footer
**/

.cm-1 footer {
  grid-area: footer;
  display: flex;
  justify-content: center;
}

.cm-1 footer a {
  color: hsl(0, 36%, 70%);
}

/**
* Media Query
**/

@media screen and (-ms-high-contrast: active) {
  .cm-1 input[type],
  .cm-1  button {
    border: 1px solid;
  }
}
  

@media(max-width: 1000px) {
  .cm-1 {
    grid-template-columns: 100%;
    grid-template-areas:
      "header"
      "side-image"
      "main"
      "footer";
  }
  
 .cm-1  .side-image {
    min-height: 25rem;
    background-image: url('https://res.cloudinary.com/gb2020/image/upload/v1589217439/base%20apparel%20coming%20soon/hero-mobile_dv2qh6.jpg');
  }
  
  .cm-1  .main,.cm-1   header {
    padding: 2rem;
    width: 100vw;
    margin: 0 auto;
  }
  
  .cm-1 .main h2,.cm-1  .main p {
    text-align: center;
  }
  
  .cm-1 .main h2 {
    font-size: 3rem;
  }
  
  .cm-1 .main p,.cm-1  .form__control {
    width: 98%;
    margin: 0 auto;
  }
}

</style> 
<script>
    const renderAlert = (state) => {
      const messages = {
        error: 'Please provide a valid email',
        success: '<b>Yay! Thank you!</b> We’ve sent a confirmation link to your inbox.'
      };
    let di1 = document.createElement('div');
      di1.classList.add('alert');
      di1.setAttribute('data-state',state);
      
      let p1 = document.createElement('p');
      p1.classList.add('alert__content');
      p1.innerHTML = messages[state];
      
      di1.appendChild(p1);
      
      
      return di1;
    };


    const init = () => {
      const emailElement = document.querySelector('#email');
      const formElement = document.querySelector('#form');
      const alertElement = document.querySelector('[role="alert"]');
      const validationRegex = new RegExp(
        emailElement.getAttribute('pattern') || '[^@]+@[^.]+..+',
        'i'
      );
      
      emailElement.removeAttribute('required');
      emailElement.removeAttribute('pattern');
      formElement.setAttribute('novalidate', '');
      
      formElement.addEventListener('submit', evt => {
        evt.preventDefault();

        if (!validationRegex.test(emailElement.value.trim())) {
          let ele =renderAlert('error'); ;
          console.log(ele)
          console.log(alertElement)
          
          alertElement.innerHTML = '';
          alertElement.appendChild(ele);
          console.log(alertElement);
          
          emailElement.setAttribute('aria-invalid', 'true');
          return;
        }

        // POST YOUR FORM WITH AJAX OR WHATNOT THEN RUN THIS
        formElement.parentElement.removeChild(formElement);
        alertElement.innerHTML = renderAlert('success');
      });
    }

    init();
</script>
</div>
</section>
`,
});

