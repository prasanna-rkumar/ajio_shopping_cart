export const getRupeesString = (amount) => {
    return "₹" + (amount).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}

export const getTotalItemsInBag = (cart) => {
	return cart.reduce((total, item) => total + item.quantity, 0)
}

export const getTotalCostOfItems = (cart) => {
	return cart.reduce((total, item) => total + (item.quantity * item.offerPrice), 0)
}