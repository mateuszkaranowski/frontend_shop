const retrieveProducts = () => {
    return new Promise ((resolve, reject) => {
        fetch('http://localhost:8080/api/product')
            .then(async result => {
                const data = await result.json();
                resolve(data);
            })
            .catch(err=> {
                reject(err);
            });
    });
}

const search = () => {
    const searchInput = document.querySelector('#search_input');
    const searchPhrase = searchInput.value;
    if(searchPhrase!=""){
        retrieveProducts()
    .then(products => {
        const wrapper = document.querySelector('#products__wrapper');
        wrapper.innerHTML = ``
        products.forEach(product => {
            if(product.name==searchPhrase) {
                wrapper.innerHTML += `
                <div class="product">
                <a href="product.html" onclick="location.href=this.href+'?product='+${product.id}; return false;"> 
                        <div class="product__img" style="background-image: url('img/${product.id}.png')">
                        </div>
                        </a>
                        <div class="product__content">
                            <h4>${product.name}</h4>
                            <div class="product__bottom">
                                <p class="product__price">${product.cost} zł</p>
                                <a href="basket.html"> 
                                <p class="product__buy" role="button">BUY</p>
                                </a>
                            </div>
                        </div>
                    </div>
                `
            }

        });
    })
    return false;
    }
    else {
        retrieveProducts()
    .then(products => {
        const wrapper = document.querySelector('#products__wrapper');
        products.forEach(product => {
            wrapper.innerHTML += `
            <div class="product">
            <a href="product.html"  > 
                    <div class="product__img" style="background-image: url('img/${product.id}.png')">
                    </div>
                    </a>
                    <div class="product__content">
                        <h4>${product.name}</h4>
                        <div class="product__bottom">
                            <p class="product__price">${product.cost} zł</p>
                            <a href="basket.html"> 
                            <p class="product__buy" role="button">BUY</p>
                            </a>
                        </div>
                    </div>
                </div>
            `
        });
    })
    }
    
}




    search()
