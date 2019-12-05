(function () {
    const Parallax = {
        init(){
            document.documentElement.className = 'js-enabled';
            window.addEventListener("scroll", this.parallaxEffect);
        },
        parallaxEffect(){
            this.image = document.querySelector(".parallax");
            this.backgroundPosition = this.image.style.backgroundPositionY;
            if(window.scrollY >= this.image.offsetTop){
                this.image.style.backgroundPositionY = `${(window.pageYOffset - this.image.offsetTop)/1.5}px`;
                console.log(window.scrollY);
            }else{
                this.image.style.backgroundPositionY = "0";
            }
        }
    }
    Parallax.init();
})();