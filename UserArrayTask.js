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

const calculateTotalSpent = (users)=>{
    const newUserDetails = users.map(user=>{
        const totalSpent = user.purchases.reduce((total, currentPurchase)=>{total += currentPurchase.price; return total; },0);

    return{
        // ...user,
        name: user.name,
        totalSpent
    }
    })
    return newUserDetails;
};

const returnNameAndTotalSpent = (users)=>{
    const newUserDetails = users.map(user=>{
        return{
            name:user.name,
            totalSpent: user.totalSpent
        };
    })
    return newUserDetails;
};

module.exports = {determineUsersAboveAge28, findMostExpensiveItem, calculateTotalSpent, returnNameAndTotalSpent};