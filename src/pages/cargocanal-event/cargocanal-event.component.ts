import { Component,OnInit } from '@angular/core';

@Component({
    selector : 'cargocanal-event-selector',
    templateUrl : './cargocanal-event.component.html',
    styleUrls : ['./cargocanal-event.component.css']
})
export class CargocanalEventComponent implements OnInit {
    index : number = 1;

    ngOnInit(){
        this.showSlides(this.index);
    }

    nextAndPrevSlide(n:number) {
        this.showSlides(this.index += n);
    }

    currentSlide(n:number){
        this.showSlides(this.index = n);
    }

    showSlides(n){
        var i;
        var slides = document.querySelectorAll(".mySlides");
        var smallImages = document.querySelectorAll(".small-images");
        var imageDescription = document.getElementById("description");
        if(n > slides.length){
            this.index = 1;
        }
        if(n < 1){
            this.index = slides.length;
        }
        for( i=0; i<slides.length; i++){
            slides[i].classList.remove("show");
            slides[i].classList.add("hide");
            console.log("hidden");
        }
        /* for(i=0;i<smallImages.length,i++;){
            slides[i].classList.add("hide");
            slides[i].classList.remove("show");
        } */
        for(i=0;i<smallImages.length;i++){
            smallImages[i].className = smallImages[i].className.replace("active","");
        }
        slides[this.index-1].classList.remove("hide");
        slides[this.index-1].classList.add("show");
        console.log("shown");
        smallImages[this.index-1].className += " active";
        /* imageDescription.innerHTML = smallImages[this.index - 1].alt; */
    }
}