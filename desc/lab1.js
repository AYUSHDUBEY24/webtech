
function placeOrder(item, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order confirmed:", item);
            resolve("order123");  
        }, delay);
    });
}


function assignRider(orderId, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Rider assigned for", orderId);
            resolve("rider45");  // riderId
        }, delay);
    });
}

function pickupOrder(riderId, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("On the way (picked by)", riderId);
            resolve("order123");
        }, delay);
    });
}


function deliverOrder(orderId, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Delivered:", orderId);
            resolve("Done");
        }, delay);
    });
}

placeOrder("Pizza", 1000)
    .then(orderId => assignRider(orderId, 2000))
    .then(riderId => pickupOrder(riderId, 2000))
    .then(orderId => deliverOrder(orderId, 3000))
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Tracking closed");
    });
