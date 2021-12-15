export default class SliderShow {
    elements = {
      image: document.querySelector(".image"),
      prev: document.querySelector(".button1"),
      next: document.querySelector(".button4"),
      play: document.querySelector(".button2"),
      pause: document.querySelector(".button3"),
      url: ["https://yamaha.autoua.net/media/catalog/9/9/p219399-1421158904.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0AekvUQ4_WohUmM_Nt-wT_gJnrGXkw5IlA&usqp=CAU", "https://lh3.googleusercontent.com/proxy/0Ya30w88a0ua7odn9UISqd2PpYDB0rpy1Us-UFQ7QI9ErEicy2CNWaeG03pPH1qoZHVo1blotkgMw8kMceNjrxYrcV4YCB5Svs1W1B7FB_LObKgEVwlc495WiEBoAh4S", "https://avto-russia.ru/moto/ducati/photo/ducati_1199_panigale_r_2.jpg", "https://ireland.apollo.olxcdn.com/v1/files/p8durx7kc312-UA/image;s=1200x764"],
    }
  
    constructor() {
        (this.arrUrl = []),
        (this.timerId = null),
        (this.count = 0);
    }
  
    async getPhotos() {
      this.arrUrl = this.elements.url
      this.init(this.arrUrl);
    }
  
    init(arr) {
      this.elements.image.src = arr[0];
    }
  
    prevSlide() {
      if (this.count === 0) {
        this.count = this.arrUrl.length - 1;
        this.elements.image.src = this.arrUrl[this.count];
      } else {
        this.count--;
        this.elements.image.src = this.arrUrl[this.count];
      }
    }
  
    nextSlide() {
      if (this.count === this.arrUrl.length - 1) {
        this.count = 0;
        this.elements.image.src = this.arrUrl[this.count];
      } else {
        this.count++;
        this.elements.image.src = this.arrUrl[this.count];
      }
    }
  
    showSlide() {
      this.nextSlide();
      this.timerId = setTimeout(this.showSlide.bind(this), 1000);
    }
  
    stopShowingSlide() {
      clearTimeout(this.timerId);
      this.elements.play.disabled = false;
      this.elements.pause.disabled = true;
    }
  
    clickNextBtn() {
      this.stopShowingSlide();
      this.nextSlide();
    }
  
    clickPrevBtn() {
      this.stopShowingSlide();
      this.prevSlide();
    }
  
    clickPlay() {
      this.elements.play.disabled = true;
      this.elements.pause.disabled = false;
      this.timerId = setTimeout(this.showSlide.bind(this), 1000);
    }
  }