const track = document.getElementById('carouselTrack');
const totalImages = 6;
let index = 0;

function slideNext() {
  index++;
  if (index >= totalImages) {
    index = 0;
  }
  const offset = -index * 100;
  track.style.transform = `translateX(${offset}%)`;
}



// change every 3 seconds
setInterval(slideNext, 3000);


// scroll button

const scrollBtn = document.querySelector(".fa-angle-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollBtn.classList.add("showScrollBtn");
  }
  else {
    scrollBtn.classList.remove("showScrollBtn")
  }
});

function scrollUp() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

let homeApi = `https://api-server-zecj.onrender.com/Home`;

const wineImagesData = async () => {
  try {
    const resImg = await fetch(homeApi);
    const resImgData = await resImg.json();
    appendWineData(resImgData["discover-wine"], resImgData["family-wine"], resImgData["spotlight-wine"], resImgData["gift-wine"], resImgData["best-seller"], resImgData["new-arrival"], resImgData["beer-mead"], resImgData["brand"], resImgData["mixed-collection"], resImgData["wine-accessories"],resImgData["blog"]);
  }
  catch (error) {
    console.log(error);
  }
}

const appendWineData = (discoverValue, familyValue, spotlightValue, giftValue, bestSellerValue, newArrivalValue, beerValue, brandValue, mixedValue, accessoriesValue,blogValue) => {

  // <============ discover wine start =============>

  const discoverImageContainer = document.querySelector(".discover_images_container");
  discoverValue.forEach((el) => {
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("discoverImgContainer")

    let img = document.createElement("img");
    img.src = `${el.img}`

    let discoverImgCaption = document.createElement("p");
    discoverImgCaption.classList.add("discoverImgCaption");
    discoverImgCaption.innerText = `${el.img_caption}`

    imgDiv.append(img, discoverImgCaption);
    discoverImageContainer.append(imgDiv);
  });
  // <============ discover wine end =============>


  // <============ family wine start =============>

  const familyImages = document.querySelector(".family_wine_img_container");
  for (i = 0; i < 10; i++) {

    familyValue.forEach((el) => {
      let familyDiv = document.createElement("div");
      familyDiv.classList.add("familyWineContainer");

      let familyWineImg = document.createElement("img");
      familyWineImg.src = `${el.img}`;

      let captionContainer = document.createElement("div");
      captionContainer.classList.add("captionContainer");

      let familyImgCaption = document.createElement("p");
      familyImgCaption.innerText = el.img_caption;

      let price = document.createElement("p");
      price.innerHTML = el.price;
      price.classList.add("price")

      let cartBtn = document.createElement("button");
      cartBtn.innerText = "ADD TO CART"

      captionContainer.append(familyImgCaption, price, cartBtn)
      familyDiv.append(familyWineImg, captionContainer);
      familyImages.append(familyDiv)

    });

  }
  // <============ family wine end =============>


  // <============ spotlight start =============>

  const spotlightImgContainer = document.querySelector(".spotlight_img_container");

  spotlightValue.forEach((el) => {
    let spotlightImgDiv = document.createElement("div");
    spotlightImgDiv.classList.add("spotlightImgDiv");

    let spotImg = document.createElement("img");
    spotImg.src = el.img;

    let spotImgCap = document.createElement("p");
    spotImgCap.innerText = el.img_caption;

    spotlightImgDiv.append(spotImg, spotImgCap);
    spotlightImgContainer.append(spotlightImgDiv);

  });
  // <============ spotlight wine end =============>

  // <============ gift wine start =============>

  const giftImgContainer = document.querySelector(".gift_img_container");

  giftValue.forEach((el) => {
    let giftImgDiv = document.createElement("div");
    giftImgDiv.classList.add("giftImgDiv");

    let giftImg = document.createElement("img");
    giftImg.src = el.img;

    let giftImgCap = document.createElement("p");
    giftImgCap.innerText = el.img_caption;

    giftImgDiv.append(giftImg, giftImgCap);
    giftImgContainer.append(giftImgDiv);

  });
  // <============ gift wine end =============>

  // <============ best seller wine start =============>

  const bestSellerImgContainer = document.querySelector(".bestSeller_wine_img_container");
  for (i = 0; i < 10; i++) {

    bestSellerValue.forEach((el) => {
      let bestSellerImgDiv = document.createElement("div");
      bestSellerImgDiv.classList.add("bestSellerImgDiv");

      let bestSellerImg = document.createElement("img");
      bestSellerImg.src = `${el.img}`;

      let captionContainer = document.createElement("div");
      captionContainer.classList.add("captionContainer");

      let bestSellerImgCaption = document.createElement("p");
      bestSellerImgCaption.innerText = el.img_caption;

      let price = document.createElement("p");
      price.innerHTML = el.price;
      price.classList.add("price")

      let cartBtn = document.createElement("button");
      cartBtn.innerText = "ADD TO CART"

      captionContainer.append(bestSellerImgCaption, price, cartBtn)
      bestSellerImgDiv.append(bestSellerImg, captionContainer);
      bestSellerImgContainer.append(bestSellerImgDiv)

    });

  }
  // <============ best seller wine end =============>

  // <============ new arrival wine start =============>

  const newArrivalImgContainer = document.querySelector(".newArrival_wine_img_container");
  for (i = 0; i < 10; i++) {

    newArrivalValue.forEach((el) => {
      let newArrivalImgDiv = document.createElement("div");
      newArrivalImgDiv.classList.add("newArrivalImgDiv");

      let newArrivalImg = document.createElement("img");
      newArrivalImg.src = `${el.img}`;

      let captionContainer = document.createElement("div");
      captionContainer.classList.add("captionContainer");

      let newArrivalImgCaption = document.createElement("p");
      newArrivalImgCaption.innerText = el.img_caption;

      let price = document.createElement("p");
      price.innerHTML = el.price;
      price.classList.add("price")

      let cartBtn = document.createElement("button");
      cartBtn.innerText = "ADD TO CART"

      captionContainer.append(newArrivalImgCaption, price, cartBtn)
      newArrivalImgDiv.append(newArrivalImg, captionContainer);
      newArrivalImgContainer.append(newArrivalImgDiv)

    });

  }
  // <============ new arrival wine end =============>

  // <============ beer & mead start =============>

  const beerImgContainer = document.querySelector(".beer_img_container");
  for (i = 0; i < 10; i++) {

    beerValue.forEach((el) => {
      let beerImgDiv = document.createElement("div");
      beerImgDiv.classList.add("beerImgDiv");

      let beerImg = document.createElement("img");
      beerImg.src = `${el.img}`;

      let captionContainer = document.createElement("div");
      captionContainer.classList.add("captionContainer");

      let beerImgCaption = document.createElement("p");
      beerImgCaption.innerText = el.img_caption;

      let price = document.createElement("p");
      price.innerHTML = el.price;
      price.classList.add("price")

      captionContainer.append(beerImgCaption, price)
      beerImgDiv.append(beerImg, captionContainer);
      beerImgContainer.append(beerImgDiv)

    });

  }
  // <============ beer & mead end =============>

  // <============ brand start =============>

  const brandImgContainer = document.querySelector(".brand_img_container");

  brandValue.forEach((el) => {
    let brandImgDiv = document.createElement("div");
    brandImgDiv.classList.add("brandImgDiv");

    let brandImg = document.createElement("img");
    brandImg.src = el.img;

    let brandImgCap = document.createElement("p");
    brandImgCap.innerText = el.img_caption;

    brandImgDiv.append(brandImg, brandImgCap);
    brandImgContainer.append(brandImgDiv);

  });
  // <============ brand end =============>

  // <============ mixed collection start ==============>

  const mixedImagesContainer = document.querySelector(".mixed_collection_img_container");
  for (i = 0; i < 10; i++) {

    mixedValue.forEach((el) => {
      let mixedDiv = document.createElement("div");
      mixedDiv.classList.add("mixedImgDiv");

      let mixedWineImg = document.createElement("img");
      mixedWineImg.src = `${el.img}`;

      let captionContainer = document.createElement("div");
      captionContainer.classList.add("captionContainer");

      let mixedImgCaption = document.createElement("p");
      mixedImgCaption.innerText = el.img_caption;

      let price = document.createElement("p");
      price.innerHTML = el.price;
      price.classList.add("price")

      let cartBtn = document.createElement("button");
      cartBtn.innerText = "ADD TO CART"

      captionContainer.append(mixedImgCaption, price, cartBtn)
      mixedDiv.append(mixedWineImg, captionContainer);
      mixedImagesContainer.append(mixedDiv)

    });

  }
  // <============ mixed collection end ==============>

  // <============ accessories start ==============> 

  const accessoriesContainer = document.querySelector(".accessories_Img_container");
  for (i = 0; i < 10; i++) {

    accessoriesValue.forEach((el) => {
      let accessoriesDiv = document.createElement("div");
      accessoriesDiv.classList.add("accessoriesDiv");

      let accessoriesImg = document.createElement("img");
      accessoriesImg.src = `${el.img}`;

      let captionContainer = document.createElement("div");
      captionContainer.classList.add("accessoriesCaptionContainer");

      let accessoriesImgCaption = document.createElement("p");
      accessoriesImgCaption.innerText = el.img_caption;

      let price = document.createElement("p");
      price.innerHTML = el.price;
      price.classList.add("price")

      let cartBtn = document.createElement("button");
      cartBtn.innerText = "ADD TO CART"

      captionContainer.append(accessoriesImgCaption, price, cartBtn)
      accessoriesDiv.append(accessoriesImg, captionContainer);
      accessoriesContainer.append(accessoriesDiv)

    });

  }
  // <============ accessories end ==============> 

    // <============ blog start ==============>

  const blogImagesContainer = document.querySelector(".blog_Img_container");
  for (i = 0; i < 10; i++) {

    blogValue.forEach((el) => {
      let blogImgDiv = document.createElement("div");
      blogImgDiv.classList.add("blogImgDiv");
      
      let imgParaDiv = document.createElement("div");
      imgParaDiv.classList.add("imgParaDiv");
      
      let blogImg = document.createElement("img");
      blogImg.src = `${el.img}`;

      let blogImgCaption = document.createElement("p");
      blogImgCaption.innerText = el.img_caption;
      blogImgCaption.classList.add("blogCaption");

      let blogImgPara = document.createElement("p");
      blogImgPara.innerText = el.para;
      blogImgPara.classList.add("paraImg")

      imgParaDiv.append(blogImg,blogImgCaption)
      blogImgDiv.append(imgParaDiv, blogImgPara);
      blogImagesContainer.append(blogImgDiv)

    });

  }
  // <============ blog end ==============>

}