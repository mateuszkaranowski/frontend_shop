const retrieveProduct = () => {
    return new Promise( (resolve, reject) => {
        fetch('http://localhost:8080/api/product/' + id)
            .then( async result => {

                const data = await result.json();
                resolve(data);

            } )
            .catch( err => {
                reject(err);
            } );
    } );
}




const retrieveCurrentProduct = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');


   
    alert('Product ID: ' + product);
    return product;
    
}
retrieveCurrentProduct();

retrieveProduct()
.then (productsDetail => {
    const wrapper = document.querySelector('#chosed_info')
    productsDetail.forEach(productDetail => {
    wrapper.innerHTML += `
    <div class="chosed__img" style="background-image: url('img/${productDetail.product.id}.png')">
        </div> 
            <div class="chosed_content">
            <br><p><strong>Name:</strong> </p>
            <p><strong>Cost:</strong> 100 zł</p> <br>
            <p>Descriotion: Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio esse et earum, porro molestias assumenda iusto reprehenderit dolorum aperiam tempora excepturi facilis a nam nemo neque dolorem modi. Necessitatibus, rem?</p>
            <p class="chosed__buy" role="button">BUY</p>
        </div>
    </div>`
});
})