const retrieveProductsInBasket = () => {
    return new Promise ((resolve, reject) => {
        fetch('http://localhost:8080/api/productinbasket')
            .then(async result => {
                const data = await result.json();
                resolve(data);
            })
            .catch(err=> {
                reject(err);
            });
    });
}

retrieveProductsInBasket()
    .then (productsInBaskets => {
        const wrapper = document.querySelector('#basket__retrieve')
        productsInBaskets.forEach(productInBasket => {
            wrapper.innerHTML += `
            <tr>
            <td><img class="image3" src="img/${productInBasket.productId}.png" alt="shop"></td>     
              <td>
                <div class="counter">
                  <p class="counter__title"><strong>Nazwa: </strong> ${productInBasket.product.name}</p>
                  <p class="counter__title"><strong>Cost: </strong> ${productInBasket.product.cost}</p>
                </div>
              </td>
              <td><img class="image__remove" src="remove.png" alt="remove"></td>
              <td><img class="image__add" src="add.png" alt="alt"></td>
            </tr>
          `
            
        });
    })