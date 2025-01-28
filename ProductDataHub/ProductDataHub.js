const source = `https://fakestoreapi.com/products`
const getProduct = async(url) =>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        showCart(data);

    } catch(error){
        console.log(error);
    
    }
}

getProduct(source)




const productContainer =  document.querySelector(".productContainer");

// const reduceOverview = (overview)=>{
//         if (overview.length > 200){
//             return overview.substring(0,200) + "...";
//         }
//         return overview;
//     }


// const showProducts = (products) => {
//     productContainer.innerHTML = "";
//     products.forEach((prod) =>{
//         const{title, description, price, image}= prod;
//         console.log(title, description, price, image);
//         const productCard = document.createElement('div');
//         productCard.classList.add('product');
//         productCard.innerHTML = `
//             <img src="${prod.image}" alt="${prod.title}">
//             <p>${prod.price}</p>
//             <p>${prod.description}</p>
//             <button>ADD TO CART</button>
//         `;

//          productContainer.innerHTML +=productCard;
//      } );
//  };


const reduceDescription =(description)=>{
    if(description.length > 100){
        return description.substring(0,100) + "...";
    }
    return description;
}

 const cart = document.querySelector('.productContainer');
 const showCart = (carts)=>{
        cart.innerHTML = "";
        carts.forEach((cartItemData)=>{
            const{title, description, price, image}= cartItemData;
            const cartItem = document.createElement('div');
            cartItem.classList.add('product');
            cartItem.innerHTML = `
                <img src="${image}" alt="product" />
          <div class="textContent">
            <h3>${title}</h3>
            <h5>${price}</h5>
            <p>${reduceDescription(description)}</p>
            <button>ADD TO CART</button>
            </div>
            `;
            cart.appendChild(cartItem) ;
        });
 }

 const validCategories = ["electronics", "jewelery", "men's clothing", "women's clothing"];


 const search =async(url)=>{
    try{
    const response = await fetch(url);
    const data = await response.json();
    showCart(data);
    }
    catch(error){
        console.log(error);
    }
 }


 const searchBox = document.querySelector('#searchField');
 searchBox.addEventListener('keyup', (event)=>{
     const searchValue = event.target.value.trim().toLowerCase();
   
    const matchedCategory = validCategories.find((category)=> category.toLowerCase().includes(searchValue));
    if(matchedCategory){

     const searchUrl = `https://fakestoreapi.com/products/category/${matchedCategory}`;
     console.log("Search Url: ", searchUrl);
     search(searchUrl);
    }
 })


