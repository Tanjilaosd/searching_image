function product(info){
    var htmlCode = `
  
      <div class="product">
            <img src="${info.productURL}"  alt="">
            <h3>${info.title}</h3>
            <p>${info.productDetailesURL}</p>
            <a href="${info.des}" target="_blank">
                <button>details</button>
            </a>
        </div>
    `;
    return htmlCode;
}





let form = document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    var title = e.target.title.value;
    var productURL = e .target.productURL.value;
    var detailsURL = e .target.productDetailesURL.value;
    var des = e.target.des.value;
    var productInfo = {
        title,
        productURL,
        detailsURL,
        des
    }
    var code = product(productInfo);
    var root = document.getElementById("root");
     root.innerHTML += code;
   
})