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

window.addEventListener("scroll", () =>{
  if (window.scrollY > 100){
    scrollBtn.classList.add("showScrollBtn");
  }
  else{
    scrollBtn.classList.remove("showScrollBtn")
  }
});

function scrollUp(){
  window.scrollTo({top:0,behavior:"smooth"})
}

let homeApi = `https://api-server-zecj.onrender.com/Home`;

const wineImagesData = async() =>{
  try {
    const resImg = await fetch(homeApi);
    const resImgData = await resImg.json();
    appendWineData(resImgData["discover-wine"],resImgData["family-wine"],resImgData["spotlight-wine"],resImgData["gift-wine"],resImgData["best-seller"]);
  } 
  catch (error) {
    console.log(error);  
  }
}

const appendWineData = (discoverValue,familyValue,spotlightValue,giftValue,bestSellerValue) => {
  
  // <============ discover wine start =============>

  const discoverImageContainer = document.querySelector(".discover_images_container");
  discoverValue.forEach((el) =>{
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("discoverImgContainer")

    let img = document.createElement("img");
    img.src = `${el.img}`

    let discoverImgCaption = document.createElement("p");
    discoverImgCaption.classList.add("discoverImgCaption");
    discoverImgCaption.innerText = `${el.img_caption}`

    imgDiv.append(img,discoverImgCaption);
    discoverImageContainer.append(imgDiv);
  });
  // <============ discover wine end =============>


  // <============ family wine start =============>

  const familyImages = document.querySelector(".family_wine_img_container");
  for(i = 0; i<10;i++){

    familyValue.forEach((el)=>{
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
  
      captionContainer.append(familyImgCaption,price,cartBtn)
      familyDiv.append(familyWineImg,captionContainer);
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

      spotlightImgDiv.append(spotImg,spotImgCap);
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

      giftImgDiv.append(giftImg,giftImgCap);
      giftImgContainer.append(giftImgDiv);

    });
    // <============ gift wine end =============>

    // <============ best seller wine start =============>

    const bestSellerImgContainer = document.querySelector(".bestSeller_wine_img_container");
  for(i = 0; i<10;i++){

    bestSellerValue.forEach((el)=>{
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
  
      captionContainer.append(bestSellerImgCaption,price,cartBtn)
      bestSellerImgDiv.append(bestSellerImg,captionContainer);
      bestSellerImgContainer.append(bestSellerImgDiv)
  
    });
    
  }
  // <============ best seller wine end =============>

}