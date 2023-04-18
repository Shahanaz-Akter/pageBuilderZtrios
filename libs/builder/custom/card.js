

Vvveb.SectionsGroup['Cards'] =
    ["bootstrap4/card"];

Vvveb.Sections.add("bootstrap4/card", {
    name: "Card Example",
    dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/image.svg">',
    image: "https://assets.startbootstrap.com/img/screenshots/snippets/video-header.jpg",
    html: `
    <section class="__card" data-name="card">
        <div class="__flex">
            <h1 onclick="color(this)">CLicK me</h1>

            <style>

                .__card{
                    background:lightblue;
                    border:10px solid black;
                    width:100%;
                    height:100px;
                }
                .__flex{
                    display:flex;
                }
                
                .__child{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
                .flex_1{
                    color:red;
                }
                .flex_2{
                    color:blue;
                }

            </style>
            <script id="__card">
                    const color=(tag)=>{
                        if(tag.style.color=='red')
                           { tag.style.color='';}
                        else
                            {tag.style.color='red';}
                    }
                </script>
        </div>
    </section>

`,
});

