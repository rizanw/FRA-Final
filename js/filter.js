class Filter{
    constructor(name, x, y, w, h){
        this.name = name;  
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h; 
    }

    generate(){
        var img = document.createElement("img");
        var src;
        var urlBase = "https://raw.githubusercontent.com/shikai93/FRAImageRecognition/master/"
        switch(this.name){
            case 'glasses':
                src = urlBase + 'glasses.png';
                this.h = this.h*0.5;
                break;
            case 'savetheearth':
                src = urlBase + 'savetheearth.png';
                this.h = this.h*0.5;
                break;
            case 'glassesblueearth':
                src = urlBase + 'glassesblueearth.png';
                this.h = this.h*0.5;
                break;
            case 'pinkcat':
                src = urlBase + 'pinkcat.png';
                this.x = this.x-40;
                this.y = this.y-120;
                this.w = this.w*1.5;
                this.h = this.h*1.5;
                break;
            case 'racoon':
                src = urlBase + 'racoon.png';
                this.x = this.x-40;
                this.y = this.y-140;
                this.w = this.w*1.5;
                this.h = this.h*1.5;
                break;
            case 'angel':
                src = urlBase + 'angel.png';
                this.x = this.x-40;
                this.y = this.y-240;
                this.w = this.w*1.5;
                this.h = this.h*1.5;
                break;
            case 'makeup':
                src = urlBase + 'makeup.png';
                this.x = this.x-40;
                this.y = this.y-80;
                this.w = this.w*1.5;
                this.h = this.h*1.5;
                break;
            case 'glassesfox':
                src = urlBase + 'glassesfox.png';
                this.x = this.x-20;
                this.y = this.y-140;
                this.w = this.w*1.5;
                this.h = this.h*1.5;
                break;
            case 'wigyellow':
                src = urlBase + 'wigyellow.png';
                this.x = this.x-60;
                this.y = this.y-110;
                this.w = this.w*1.6;
                this.h = this.h*1.6;
                break;
            default:
                src = urlBase + 'flower';
        }
        img.src = src;
        return img;
    }
}