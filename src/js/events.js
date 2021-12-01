buttonOne.addEventListener("click", () => {
    getImage(0)
});
buttonTwo.addEventListener("click", () => {
    getImage(1)
});
buttonThree.addEventListener("click", () => {
    getImage(2)
});
buttonFour.addEventListener("click", () => {
    getImage(3)
});
buttonFive.addEventListener("click", () => {
    getImage(4)
});

gallery.addEventListener('click', showBigImg);

buttonWindow.addEventListener("click" , () => {
    closeWindow();
});