(() => {
const imgDOM = document.getElementById('img');
const goLeft = document.getElementById('goLeft');
const goRight = document.getElementById('goRight');
const Image = {
    images : [
         'https://fastly.picsum.photos/id/116/600/300.jpg?hmac=vSSCW8DRMpOvqRvw4baEtxHAkw6F2bFgNDvFXI20EoQ',
         'https://fastly.picsum.photos/id/557/600/300.jpg?hmac=uzoO-w2emH4KAhbuwtwJEd2lBzPyndzXKmkTjN2KYac',
         'https://fastly.picsum.photos/id/515/600/300.jpg?hmac=zbMULWzCHQ1IJkTD4i0KNmLT9LsbWJaoixKlywihFoo',  
    ],
    currentImageIndex: null,
    init() {
        this.currentImageIndex = 0;
        imgDOM.src = this.images[this.currentImageIndex];
    },
    goLeft() {
        this.currentImageIndex = (this.currentImageIndex === 0) ? this.images.length - 1 : this.currentImageIndex - 1;
        imgDOM.src=  this.images[this.currentImageIndex]
    },
    goRight() {
        this.currentImageIndex = (this.currentImageIndex === this.images.length -1) ? 0 : this.currentImageIndex + 1;
        imgDOM.src=  this.images[this.currentImageIndex]
    }
};

Image.init();

goLeft.addEventListener('click', () => Image.goLeft())
goRight.addEventListener('click', () => Image.goRight())

setInterval(
    () => Image.goRight(),
    5000,
)
})();