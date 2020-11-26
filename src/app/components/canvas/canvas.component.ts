import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {


  iniciar(){

  }
  ngOnInit(): void {
    this.messages()
    this.in()
    this.int2()
  }


 canvas: any
  ctx: any
 height = 550;
width = 1200;

 start  (){
  
  this.canvas = document.querySelector('canvas');
  this.ctx = this. canvas.getContext('2d'); 
 // this.renderImages();
 // this. canvas.style.backgroundImage = "url('https://cauparatodosblog.files.wordpress.com/2016/06/5s.jpg?w=329&h=344')";


  this.ctx.font = " 30px impact";
  this.ctx.fillStyle = 'black';  
  this.ctx.fillText("Freddy Josue Muñoz Dominguez",400,250);
};

 FPS: any = 50;



in(){
  setInterval(() => {
    this.render(); 
  },1000/50)
}

 angular;
 vue;
 laravel;

 renderImages  (){
  this.angular = new Image();
  this.vue = new Image();
 this. laravel = new Image();
  this.angular.src = './ass';
  this.vue.src = "img/vue.png";
  this.laravel.src = "img/laravel.png";
};

 deleteCanvas (){
  this.canvas.width = this.width;
 this. canvas.height = this.height;
};

 angularM = {x:10,velocidad1:1};
 vueM = {x:-130,velocidad1:1};
 laravelM =  {x:-130,velocidad1:1};

 loadImages  (){
  this.ctx.drawImage(this.angular,0,0,240,240,this.angularM.x,10,100,100);
 this. ctx.drawImage(this.vue,0,0,740,414,this.vueM.x,20,130,90);
  this.ctx.drawImage(this.laravel,0,0,300,260,this.laravelM.x,25,100,70); 
};

 move(){
 this.angularM.x += this.angularM.velocidad1;
  if(this.angularM.x > 1200){
    this.vueM.x += this.vueM.velocidad1;
  }
  if(this.vueM.x > 1200){
    this.laravelM.x += this.laravelM.velocidad1;
  }
};

 messages(){
  this.ctx.font = " 30px impact";
  this.ctx.fillStyle = 'black';  
  this.ctx.fillText("Freddy Josue Muñoz Dominguez",400,250);
  if(this.angularM.x > 0 && this.angularM.x < 300){
     this.ctx.fillText("Freddy Josue Muñoz Dominguez",400,250);
  }
  if(this.angularM.x > 301 && this.angularM.x < 600){
     this.ctx.fillText("GRUPO: SI03Z",500,250);
  }
  if(this.angularM.x > 601){
     this.ctx.fillText("Mini proyecto con canvas HTML y JavaScript",350,250);
  }
};


int2(){
  setInterval(function(){
    this. messages();
   },1000/50);
}

 render(){
  this.move();
  this.deleteCanvas();
  this.loadImages();
}

  

  

}
