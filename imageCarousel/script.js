(() => {
const imgDOM = document.getElementById('img');
const goLeft = document.getElementById('goLeft');
const goRight = document.getElementById('goRight');
const indicatorContainer = document.getElementById('indicatorContainer');
const Image = {
    images : [
         'https://fastly.picsum.photos/id/116/600/300.jpg?hmac=vSSCW8DRMpOvqRvw4baEtxHAkw6F2bFgNDvFXI20EoQ',
         'https://fastly.picsum.photos/id/557/600/300.jpg?hmac=uzoO-w2emH4KAhbuwtwJEd2lBzPyndzXKmkTjN2KYac',
         'https://fastly.picsum.photos/id/515/600/300.jpg?hmac=zbMULWzCHQ1IJkTD4i0KNmLT9LsbWJaoixKlywihFoo',  
         'https://fastly.picsum.photos/id/1033/600/300.jpg?hmac=mx4e9WIyPjYrTYEtXESgy3umB9ePGV6uBEZHWKWMXc0',
         'https://fastly.picsum.photos/id/643/600/300.jpg?hmac=2knTKrMgRB4edV80shOSi52fXMn6mRbnWc5N6ky7S04',
    ],
    currentImageIndex: null,
    init() {
        this.currentImageIndex = 0;
        imgDOM.src = this.images[this.currentImageIndex];
        this.createIndicators();
        this.updateIndicators();
    },
    createIndicators(){
        this.images.forEach((image, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            indicator.addEventListener('click', () => this.changeImage(index));
            indicatorContainer.appendChild(indicator);
        });
    },
    updateIndicators(){
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === this.currentImageIndex) {
                indicator.classList.add('active');
            }else{
                indicator.classList.remove('active');
            }
        });
    },
    goLeft() {
        this.currentImageIndex = (this.currentImageIndex === 0) ? this.images.length - 1 : this.currentImageIndex - 1;
        imgDOM.src=  this.images[this.currentImageIndex]
        Image.updateIndicators();
    },
    goRight() {
        this.currentImageIndex = (this.currentImageIndex === this.images.length -1) ? 0 : this.currentImageIndex + 1;
        imgDOM.src=  this.images[this.currentImageIndex]
        Image.updateIndicators();
    },
    changeImage(index){
        this.currentImageIndex = index;
        imgDOM.src = this.images[this.currentImageIndex];
        this.updateIndicators();
    },
};

Image.init();

goLeft.addEventListener('click', () => Image.goLeft())
goRight.addEventListener('click', () => Image.goRight())

setInterval(
    () => Image.goRight(),
    5000,
)
})();