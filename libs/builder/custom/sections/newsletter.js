Vvveb.SectionsGroup['Newsletter Section'] = ["bootstrap4/newsletter_1", "bootstrap4/newsletter_2", "bootstrap4/newsletter_3", "bootstrap4/newsletter_4", "bootstrap4/newsletter_5"];


Vvveb.Sections.add("bootstrap4/newsletter_1", {
    name: "newsletter_1 Demo",
    dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
    image: "http://localhost/PageBuilderZtrios/img/section_img/news_1.png",
    html: `
    
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<style>

.pn-newsletter-area {
  background: rgba(248, 248, 248, 0.8) url("https://whistling.in/images/website/hbg_hdsound.jpg");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.pn-news-bg {
  position: relative;
}

.pn-newsletter-text {
  margin: 70px 0;
  padding: 30px 40px;
}

.pn-news-text> h2 {
  color: #fff;
  font-size: 44px;
  font-weight: 500;
  line-height: 50px;
}

.pn-news-text p {
  font-size: 18px;
  color: #fff;
}

.pn-newsletter-text .section-headline p {
  margin-bottom: 0;
}

.subs-feilds {
  border: 1px solid #fff;
  display: inline-block;
  height: 52px;
  margin-top: 30px;
  width: 60%;
  border-radius: 30px;
  overflow: hidden;
}

.subscribe-input input {
  background: transparent none repeat scroll 0 0;
  border: medium none;
  color: #fff;
  float: left;
  font-size: 15px;
  line-height: 2px;
  padding: 11px 15px;
  width: 80%;
  height: 50px;
}

.subscribe-input button {
  background: #3ec1d5 none repeat scroll 0 0;
  border: medium none;
  border-radius: 0 20px 20px 0;
  color: #fff;
  float: left;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  width: 20%;
}

.subscribe-input button:hover {
  background: #fff none repeat scroll 0 0;
  color: #3ec1d5;
}


.test-overly {
  background: rgba(0, 0, 0, 0.80);
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>

<section>
<div class="news_1">

<div class="pn-newsletter-area">
    <div class="pn-news-bg">
        <div class="test-overly"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="pn-newsletter-text">
                        <div class="pn-news-text text-center">
                            <h2>Our Newsletter</h2>
                            <p>Subscribe our newsletter</p>
                            <div class="subs-feilds">
                                <div class="subscribe-input">
                                    <input type="email" class="email form-control width-80" id="sus_email"
                                        placeholder="Email">
                                    <button type="submit" id="sus_submit"
                                        class="add-btn width-20">Subscribe</button>
                                    <div id="msg_Submit" class="h3 text-center hidden"></div>
                                </div>
                            </div>
                        </div>
                    </div>
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


Vvveb.Sections.add("bootstrap4/newsletter_2", {
    name: "newsletter_2 Demo",
    dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
    image: "http://localhost/PageBuilderZtrios/img/section_img/news_2.png",
    html: `

    <style>
       
        .news_2 {
            display: flex;
            justify-content: center;
            height: 40vh;
            color: red;;
            background-color: #ffffff;
            font-family: "Poppins", sans-serif;
        }
    </style>
 
    <section>
        <div>
        <!-- Start Newsletter Area -->

        <div class="news_2">
        <div class="w-full p-5">
    
            <div class="container flex flex-col gap-y-8 md:gap-y-10 mx-auto px-5 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-gray-200 bg-gray-800 rounded-2xl">
    
                <div class="w-full text-center">
                    <div class="mb-4 text-white text-3xl md:text-4xl font-extrabold">Sign up for our newsletter</div>

                    <div class="text-base sm:text-lg">Be the first to know about releases and industry news and insights.
                    </div>
                </div>
    
                <div class="w-full">
                    <div class="flex flex-col justify-center sm:flex-row gap-3 w-full">
    
                        <input type="text" placeholder="Enter your email"
                            class="sm:w-2/4 sm:max-w-[400px] h-12 p-3 text-gray-900 border border-solid border-gray-300 rounded-lg shadow" >
    
                        <button type="submit"
                            class="sm:w-1/4 sm:max-w-[180px] h-12 text-white bg-purple-600 rounded-lg shadow transition-all duration-300 ease-in-out hover:bg-purple-700 ">Subscribe</button>
                    </div>
    
                    <div class="mt-3 text-sm text-center">We care about your data in our <u class="cursor-pointer transition-all duration-300 ease-in-out    hover:text-gray-50">privacy policy</u>.
                    </div>
    
                </div>
    
            </div>
    
        </div>
        <!-- End Newsletter Area -->

        </div>
        </div>

        <!--Tailwind CSS-->
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" referrerpolicy="no-referrer" />

        <script src="https://cdn.tailwindcss.com/3.3.1"></script>

        <script></script>
    </section>

    `
});