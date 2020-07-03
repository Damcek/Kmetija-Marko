var openPopup = document.getElementsByClassName('popup')
    for (var i = 0; i < openPopup.length; i++) {
        var popup = openPopup[i]
        popup.addEventListener('click', openPopupFunction)
    }


function openPopupFunction(event) {
    var button = event.target
    var popUp = button.firstChild
    popUp.
}