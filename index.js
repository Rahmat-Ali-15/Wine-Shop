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
setInterval(slideNext, 5000);

let homeApi = `https://api-server-zecj.onrender.com/Home`;

const discoverImagesData = async() =>{
  try {
    const resImg = await fetch(homeApi);
    const resImgData = await resImg.json();
    appendDiscoverWine(resImgData["discover-wine"],resImgData["family-wine"]);
  } 
  catch (error) {
    console.log(error);  
  }
}

const appendDiscoverWine = (discoverValue,familyValue) => {
  
  // discover wine
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


  // Family wine

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
      familyImgCaption.innerText = el.para;
  
      let price = document.createElement("p");
      price.innerHTML = el.price;
      price.classList.add("price")
  
      let cartBtn = document.createElement("button");
      cartBtn.innerText = "ADD TO CART"
  
      captionContainer.append(familyImgCaption,price,cartBtn)
      familyDiv.append(familyWineImg,captionContainer);
      familyImages.append(familyDiv)
  
    })
  }

}