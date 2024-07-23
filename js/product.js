const API__URL = "https://dummyjson.com"
const content = document.querySelector(`.content`)


async function fetchSingleData(api) {
    let query = new URLSearchParams(window.location.search)
    let id = query.get("id")


    let response = await fetch (`${api}/products/${id}`)
    response 
            .json()
            .then(res => createContent(res))
            .catch(err => console.log(err))
}

fetchSingleData(API__URL)


function createContent(data) {
    console.log("ok");
    console.log(data);
    content.innerHTML = `
<div class="container"> 
    <div class="content__box"> 
        <div class="content__img">
            <div>
            <img width = "80%" src= ${data.images[0]} alt="">
            </div>
            <div class="little__img">
            ${
                data.images.map((item)=>(
                    `<img width="80px" src=${item} alt=""></img>`
                ))
             }
            </div>
        </div>
        <div class="bom">
                <h1 class ="content__title">${data.title}</h1>
                <p class ="content__desc">${data.description}</p>
            <div class="content__qr">
                <div class="content__info">
                <p>${data.warrantyInformation}</p>
                <p>${data.shippingInformation}</p>
                <p>${data.availabilityStatus}</p>
                 <p>${data.sku}</p>
                </div>
                <img src="${data.meta.qrCode}" alt="">
            </div>
          <button class ="now">Buy now</button>
       </div>
    </div>
</div>
    `
}