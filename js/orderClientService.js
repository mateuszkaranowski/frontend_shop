const retrieveOrderProduct = () => {
    return new Promise ((resolve, reject) => {
        fetch('http://localhost:8080/api/order')
            .then(async result => {
                const data = await result.json();
                resolve(data);
            })
            .catch(err=> {
                reject(err);
            });
    });
}

retrieveOrderProduct()
    .then(clientOrders => {
        const wrapper = document.querySelector('#order__content')
        clientOrders.forEach(clientOrder => {
            wrapper.innerHTML += `
            <h4 class="order__number">${clientOrder.orderDate}</h4>
            <p><strong>Name: </strong>${clientOrder.client.name}</p>
            <p><strong>Surname:</strong> ${clientOrder.client.surname}</p>
            <p><strong>Address: </strong>${clientOrder.address.country}, ${clientOrder.address.city} street: ${clientOrder.address.street} ${clientOrder.address.homeNumber}</p><br>
            <p><strong>Bought products:</strong></p>

            <table class="order__table">
                <tr>
                  <td><img class="image6" src="img/${clientOrder.product.id}.png" alt="product"></td>     
                    <td>
                        <p class="counter__title">${clientOrder.product.name}</p>
                    </td>
                    <td>
                        <p class="counter__title">$${clientOrder.product.cost}</p>
                    </td> 
                </tr>
            </table>
            <p class="order__total"><strong>Total cost:</strong> $${clientOrder.product.cost}</p>
            <p class="order__status"><strong>Status:</strong>  Paid</p>
            `
            
        });
    })
