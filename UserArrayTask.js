const determineUsersAboveAge28 = (users)=> {
    let usersAbove28=[];
    users.filter((cart)=>{
        if(cart.age > 28){
            usersAbove28.push(cart.name)
        }
    })
    return usersAbove28;

};

const findMostExpensiveItem = (users)=>{

    const allPurchases = users.flatMap((user) => user.purchases);

   const mostExpensiveItem = allPurchases.reduce((maxItem, currentPurchase)=>{
            return currentPurchase.price > maxItem.price ? currentPurchase : maxItem;
        },
            {price:0});

   return mostExpensiveItem.item;

};

module.exports = {determineUsersAboveAge28, findMostExpensiveItem};