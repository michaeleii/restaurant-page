(()=>{"use strict";const e='<div class="card" id="about">\n            <h2>🍧 About</h2>\n            <p>\n                Welcome to our ice cream shop! We offer a wide selection of delicious and creamy ice cream flavors, as\n                well as a variety\n                of toppings to choose from. Our ice cream is made with only the freshest and highest quality\n                ingredients, ensuring that\n                every scoop is a treat for your taste buds.\n            </p>\n        </div>\n        <div class="card" id="hours">\n            <h2>🕒 Hours</h2>\n            <p>\n                We are open every day from 12:00 PM to 10:00 PM, so stop by and treat yourself to a\n                cold and\n                refreshing scoop of your\n                favorite flavor. We can\'t wait to serve you!\n            </p>\n        </div>\n        <div class="card" id="location">\n            <h2>📍 Location</h2>\n            <p>\n                123 Ice Cream Way\n                Scoopville, Sweet Treats State 12345\n            </p>\n        </div>',n=[e,'<div class="card product-card">\n            <div class="front">\n                <h2 class="product-title">Vanilla Ice Cream</h2>\n                <img src="vanilla.png" class="product-img" alt="">\n            </div>\n            <div class="back product-info">\n                <p>Our vanilla ice cream is a classic flavor that never goes out of style.</p>\n                <p>Creamy and smooth, it\'s the\n                    perfect base for\n                    your favorite toppings or a delicious treat all on its own.</p>\n                <p>Made with the highest quality ingredients\n                    and a touch of\n                    vanilla extract, this flavor is sure to satisfy your cravings for something sweet and simple.</p>\n            </div>\n        </div>\n        <div class="card product-card">\n            <div class="front">\n                <h2 class="product-title">Chocolate Ice Cream</h2>\n                <img src="chocolate.png" class="product-img" alt="">\n            </div>\n            <div class="back product-info">\n\n                <p>\n                    Our chocolate ice cream is sure to satisfy your cravings for\n                    something\n                    sweet and\n                    chocolatey.\n                </p>\n                <p>\n                    Made with real cocoa and the highest quality ingredients, this flavor is creamy, smooth, and\n                    packed with\n                    chocolate flavor in every bite.\n                </p>\n                <p>\n                    Whether you\'re in the mood for a classic ice cream sundae or just want a\n                    cold and\n                    refreshing scoop on its own, our chocolate ice cream is the perfect choice.\n                </p>\n            </div>\n        </div>\n        <div class="card product-card">\n            <div class="front">\n                <h2 class="product-title">Strawberry Ice Cream</h2>\n                <img src="strawberry.png" class="product-img" alt="">\n            </div>\n            <div class="back product-info">\n                <p>Made\n                    with\n                    real\n                    strawberries\n                    and a hint of tartness, this flavor is perfect for those who love a burst of flavor in every bite.\n                </p>\n                <p>\n                    The\n                    creamy base is\n                    made with the highest quality ingredients, ensuring that every scoop is smooth and satisfying.\n                </p>\n                <p>\n                    Whether\n                    you\'re looking\n                    for a cool treat on a hot summer day or a delicious dessert after a meal, our strawberry ice\n                    cream\n                    is\n                    sure to hit\n                    the spot.\n                </p>\n            </div>\n        </div>','<div class="card contact-card">\n            <form action="" class="form">\n                <label for="firstName">First Name</label>\n                <input type="text" name="firstName" id="">\n                <label for="lastName">Last Name</label>\n                <input type="text" name="lastName" id="">\n                <label for="email">Email</label>\n                <input type="email" name="email" id="">\n                <label for="comment">Comments</label>\n                <textarea name="comment" id="" cols="30" rows="10" placeholder="Type your comments here..."\n                    style="resize: none;"></textarea>\n                <button class="btn" type="submit">Submit</button>\n            </form>\n        </div>'],a=document.getElementById("home"),t=document.getElementById("menu"),o=document.getElementById("contact"),r=e=>{content.innerHTML=e},s=[a,t,o];s.forEach(((e,a)=>{e.addEventListener("click",(()=>{s.forEach((e=>e.classList.remove("hovered"))),r(n[a]),e.classList.add("hovered")}))})),r(e)})();