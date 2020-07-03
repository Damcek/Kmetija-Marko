if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
    
}

function ready() {
        var removeCartItemButtons = document.getElementsByClassName('item__delete--btn')


    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)        
        
    }
    var quantytyInputs = document.getElementsByClassName('item__kol') 
    for (var i = 0; i < quantytyInputs.length; i++) {
       var input = quantytyInputs[i]
       input.addEventListener('change', quantityChanged)
    }
    var addToCartButtons = document.getElementsByClassName('potrdi')
    for (var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }    
    
    var addToPopup = document.getElementsByClassName('kg')
    for (var i = 0; i < addToPopup.length; i++){
        var button = addToPopup[i]
        button.addEventListener('change', addToCartPopup)
    }     
    
    
    var popup = document.getElementsByClassName('popup')
    for (var i = 0; i < popup.length; i++){
        var button = popup[i]
        button.addEventListener('click', addToCartPopup)
    }
    
    

} 

function onchange(){
    console.log(s)
}

function addToCartPopup(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement
    var priceKgElement = shopItem.getElementsByClassName('cena')[0]  
    var priceKg = parseFloat(priceKgElement.innerText.replace('€', ''))
    var quantity = shopItem.getElementsByClassName('kg')[0].value
    var total = (Math.round(priceKg * quantity * 100) / 100).toFixed(2)
    shopItem.getElementsByClassName('popupPrice')[0].innerText = total
} 



function removeCartItem(event){
       var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
            updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    } 
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var priceKgElement = shopItem.getElementsByClassName('cena')[0]  
    var priceKg = parseFloat(priceKgElement.innerText.replace('€', ''))
    var quantity = shopItem.getElementsByClassName('kg')[0].value
    var total = (Math.round(priceKg * quantity * 100) / 100).toFixed(2)
    shopItem.getElementsByClassName('popupPrice')[0].innerText = total
    
    addItemToCart(title, total, quantity, priceKg)
    updateCartTotal()
} 

function addItemToCart(title, total, quantity, priceKg) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cartItemContainer')
    var cartItems = document.getElementsByClassName('cartItemContainer')[0]
    var cartItemsNames = cartItems.getElementsByClassName('item__description')
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        } 
    }
    var id = 0
    id = (document.getElementById("cartItemContainer").childElementCount) % 2;

    var cartRowContent = `                        
                        <div class="item clearfix" id="income-${id}">
                            <div class="item__description">${title}</div>
                            <div class="right clearfix">
                                <input class="item__kol" type="number" value="${quantity}">
                                <div class="item__delete">
                                    <button class="item__delete--btn">
                                        <ion-icon name="close"></ion-icon>
                                    </button>
                                </div>
                                <div class="item__value">€${total}</div>
                                <span class="hidden">${priceKg}</span>
                            </div>
                        </div>`
    cartRow.innerHTML = cartRowContent
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('item__delete--btn')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('item__kol')[0].addEventListener('change', quantityChanged)
    cartRow.getElementsByClassName('item__kol')[0].addEventListener('change', quantityChanged)
    
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cartItemContainer')[0]
    var cartRows = cartItemContainer.getElementsByClassName('item')
    var total = 0;
    
    for (var i = 0; i < cartRows.length; i++) {
       var cartRow = cartRows[i]
       var priceElementKg = cartRow.getElementsByClassName('hidden')[0]
       var priceElement = cartRow.getElementsByClassName('item__value')[0]
       var quantityElement = cartRow.getElementsByClassName('item__kol')[0]
       cartRow.getElementsByClassName('item__value')[0].value = priceTotal
       var priceTotal = priceElementKg * quantityElement
       
       var price = parseFloat(priceElement.innerText.replace('€', ''))
       var quantity = quantityElement.value
       total = total + price
   }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('evri')[0].innerText = '€' + total.toFixed(2)
    document.getElementsByClassName('total-price')[0].innerText = '€' + total.toFixed(2)
    
    console.log(4)
}























