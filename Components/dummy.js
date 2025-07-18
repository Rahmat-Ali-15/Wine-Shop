export const dummy = (src, img_captions, price) => {
    return `
        <section class="newArrival_wine_container">
            <div class="newArrival_wine_heading">
                <span></span>
                <h3>New Arivvals at Wine Park</h3>
                <span></span>
            </div>
            <div class="arro_newArrival_wine_img">
                <i class="fa fa-angle-left"></i>
                <div class="newArrival_wine_img_container">
                <img src="${src}" alt=""/>
                <div class="captionContainer">
                <p>${img_captions}</p>
                <p class="price">${price}</p>
                <button>add to cart</button>
                </div>
                </div>
                <i class="fa fa-angle-right"></i>
            </div>
        </section>
    `
}
