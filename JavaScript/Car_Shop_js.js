// on this v4.js I try to give the funcion name to indcate what is the function purpose.
// and try to style the paragraph's
// make the image the same size
// add more style on paragraph

const wash = document.getElementById("wash");
const glass = document.getElementById("glass");
const wheel = document.getElementById("wheel");
const oil = document.getElementById("oil");
const engine = document.getElementById("engine");
const tires = document.getElementById("tire");
const myImage = document.getElementById("myImage");
const myTitle = document.getElementById("title");
const firstParagraph = document.getElementById("para-first");
const secondParagraph = document.getElementById("para-second");

switch (wash) {
  case wash:
    wash.addEventListener("click", firstService);
    function firstService() {
      myImage.src = "./Image/png/Wash car.png";
      myTitle.innerHTML = 'Car <span class="back-color-1"> Wash </span>';
      firstParagraph.textContent =
        "Necessitatibus dignissimos perspiciatis, doloribus ut nobis architecto veritatis ipsa unde magni enim saepe error quos velit tenetur ducimus voluptate magnam beatae recusandae";
      firstParagraph.style.color = "green";
      secondParagraph.textContent =
        "Necessitatibus dignissimos perspiciatis, doloribus ut nobis architecto veritatis ipsa unde magni enim saepe error quos velit tenetur ducimus voluptate magnam beatae recusandae";
      secondParagraph.style.background = "orangered";
    }
    break;
}

// the change above is instead of creating a function for each action (chnageImage,changeHeading,changeFirstParagraph, and chnageSecondParagraph), we just give one function name (firstService) like above, and when this function called by click event all 4 desire change will be excuted. so i will leave the below code as exmaple and comparition.

switch (glass) {
  case glass:
    glass.addEventListener("click", changeImage);
    function changeImage() {
      myImage.src = "./Image/png/car meter.png";
    }
    glass.addEventListener("click", changeHeading);
    function changeHeading() {
      myTitle.innerHTML = 'Car <span class="back-color-1"> Glass </span>';
    }

    glass.addEventListener("click", changeFirstParagraph);
    function changeFirstParagraph() {
      firstParagraph.textContent =
        "Necessitatibus dignissimos perspiciatis, doloribus ut nobis architecto veritatis ipsa unde magni enim saepe error quos velit tenetur ducimus voluptate magnam beatae recusandae";
      firstParagraph.style.color = "#33475b";
    }

    glass.addEventListener("click", changeSecondParagraph);
    function changeSecondParagraph() {
      secondParagraph.textContent =
        "Necessitatibus dignissimos perspiciatis, doloribus ut nobis architecto veritatis ipsa unde magni enim saepe error quos velit tenetur ducimus voluptate magnam beatae recusandae";
      secondParagraph.style.background = "rgba(255, 255, 255, 0.2);";
    }
    break;
}

switch (wheel) {
  case wheel:
    wheel.addEventListener("click", thirdService);
    function thirdService() {
      myImage.src = "./Image/png/inside car gear.png";
      myTitle.innerHTML = 'Car <span class="back-color-1"> Wheel </span>';
      firstParagraph.textContent =
        "Necessitatibus dignissimos perspiciatis, doloribus ut nobis architecto veritatis ipsa unde magni enim saepe error quos velit tenetur ducimus voluptate magnam beatae recusandae";
      firstParagraph.style.color = "#33475b";
      secondParagraph.textContent =
        "Necessitatibus dignissimos perspiciatis, doloribus ut nobis architecto veritatis ipsa unde magni enim saepe error quos velit tenetur ducimus voluptate magnam beatae recusandae";
      secondParagraph.style.background = "#00bda5";
    }
    break;
}

switch (oil) {
  case oil:
    oil.addEventListener("click", fourthService);
    function fourthService() {
      myImage.src = "./Image/png/oil cahange.png";
      myTitle.innerHTML = 'Car <span class="back-color-1"> Oil </span>';
      firstParagraph.textContent =
        "Necessitatibus dignissimos perspiciatis, doloribus ut nobis architecto veritatis ipsa unde magni enim saepe error quos velit tenetur ducimus voluptate magnam beatae recusandae";
      firstParagraph.style.color = "#ff7a59";
      secondParagraph.textContent =
        "Necessitatibus dignissimos perspiciatis, doloribus ut nobis architecto veritatis ipsa unde magni enim saepe error quos velit tenetur ducimus voluptate magnam beatae recusandae";
      secondParagraph.style.background = "435757";
    }
    break;
}

switch (engine) {
  case engine:
    engine.addEventListener("click", fifthService);
    function fifthService() {
      myImage.src = "./Image/png/electrical.png";
      myTitle.innerHTML = 'Car <span class="back-color-1"> Engine </span>';
      firstParagraph.textContent =
        "Necessitatibus dignissimos perspiciatis, doloribus ut nobis architecto veritatis ipsa unde magni enim saepe error quos velit tenetur ducimus voluptate magnam beatae recusandae";
      firstParagraph.style.color = "#00bda5";
      secondParagraph.textContent =
        "Necessitatibus dignissimos perspiciatis, doloribus ut nobis architecto veritatis ipsa unde magni enim saepe error quos velit tenetur ducimus voluptate magnam beatae recusandae";
      secondParagraph.style.background = "#33475b";
    }
    break;
}

switch (tire) {
  case tire:
    tire.addEventListener("click", sixthService);
    function sixthService() {
      myImage.src = "./Image/png/tier.png";
      myTitle.innerHTML = 'Car <span class="back-color-1"> Tires </span>';
      firstParagraph.textContent =
        "Necessitatibus dignissimos perspiciatis, doloribus ut nobis architecto veritatis ipsa unde magni enim saepe error quos velit tenetur ducimus voluptate magnam beatae recusandae";
      firstParagraph.style.color = "#ff7a59";
      secondParagraph.textContent =
        "Necessitatibus dignissimos perspiciatis, doloribus ut nobis architecto veritatis ipsa unde magni enim saepe error quos velit tenetur ducimus voluptate magnam beatae recusandae";
      secondParagraph.style.background = "#00bda5";
    }
    break;
}

// document.getElementById("navbar").addEventListener("scroll", myFunction);

// function myFunction() {
//   document.getElementById("navbar").style.Color = "red";
// }
// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".navbar");
//     $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//   });
// });
