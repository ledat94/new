var x,y,x2,y2;
 
function setup() {
    createCanvas( 930, 500 ) ;
  frameRate(30);
   x=400; x2=100;
   y=360; y2=250;
  
}
function draw() {
    background( 25,200,255 ) ;
    haikei();
    x2=x2+15;
    trains3015803( x2, y2,5 );
    if (x2>width) x2=-1500;
    x=x-7;
    if( trains3015803(x,y,4)<0) x=width;
    }
function haikei(){
  var i;
  background(70);
  noStroke();
  for (i=350;i>0;i=i-5){
    fill(132,208,232,10);
    rect(0,300-i,930,i);
  } 
  /*sky*/
  /*noStroke(); 
  fill(132,208,232);
  rect(0,0,930,300);*/
  
 
  fill(182,156,136); /*train line*/
  rect(0,383,930,2);
  rect(0,380,930,2);
  rect(0,491,930,2);
  rect(0,494,930,2);
  
 noStroke(); /*sun*/
  fill(234,8,8);
  ellipse(40,50,110,110);
 fill(219,220,225); /*clouds*/
  ellipse (100,60,100,50);
  ellipse (80,70,100,30);
  ellipse (140,80,120,30);
  ellipse (160,60,100,50);
  
  ellipse (500,60,100,50);
  ellipse (440,70,100,30);
  ellipse (450,50,90,30);
  ellipse (560,60,100,50);
  
  fill(161,233,115); /*grass*/
  noStroke();
  rect( 0,299,930,10);
  
  fill(87,156,36); /*tree1*/
  noStroke();
  triangle(0,290,50,150,100,290);
  fill(130,78,54); /*root*/
  rect(42,290,15,15);
  
  fill(103,198,16); /*tree2*/ 
  noStroke();
  triangle(200,250,250,200,300,250);
  triangle(190,270,250,225,310,270);
  triangle(185,290,250,250,320,290);
  fill(130,78,54); /*root*/
  rect(242,290,15,15);
  
  fill(87,156,36); /*tree3*/
  ellipse(370,250,30,70);
  ellipse(368,220,40,30);
  ellipse(360,240,40,30);
  ellipse(360,260,40,30);
  ellipse(365,265,40,30);
  ellipse(380,260,40,30);
  ellipse(380,240,40,30);
  fill(130,78,54); /*root*/
  quad(365,305,370,240,370,240,370,305);
 
  
  fill(247,177,239); /*tower*/
  stroke(140);
  quad(510,299,520,100,520,100,530,299);
  fill(190,200,233); 
  ellipse(520,170,20,20);
  rect(510,175,20,2);
  
  fill(234,252,128);
  stroke(1);
  rect(700,170,500,137); /*khung tren*/
 

  fill(236,251,254);
  rect(690,200,500,107);/*khung duoi*/
  
  /*stroke(107,111,165);*/
  fill(107,111,165); /*khung vien nha ga*/
  rect(690,205,3,100);
  rect(690,200,500,5);
  rect(690,305,500,9);
  quad(692,305,750,285,930,285,930,305);
  line(745,285,745,205);
  
  
  fill(175,164,97);/*chair*/
  rect(750,260,35,23); 
   rect(750,280,35,2);
    rect(766,282,5,10);
  rect(785,260,35,23);
   rect(785,280,35,2);
    rect(801,282,5,10);
  rect(820,260,35,23);
   rect(820,280,35,2);
    rect(836,282,5,10);
    
 var e = "Copyright@ Le Duc Dat"; /*text*/
  fill(50);
  text(e, 750, 20,930, 20);
  
  text("HANNO STATION", 760, 175, 800, 180);
  
  

 
}

 

function trains3015803 ( x0, y0,n){
  var i;
  for (i=0;i<n;i++){
    if(i>0){
      stroke(127);
      fill(127);
      rect(x0,y0+6,6,90);
      x0=x0+6;
    }
     
    x0=train3015803(x0,y0);
  }
  return x0;
}
    
function train3015803( x0, y0 ) {
  stroke(0);

  fill(255,165,82);
  rect(x0+0,y0+0,300,100);
  fill(255);
/*aside windows*/
  fill(204,y0+230,255);
  rect(x0+10,y0+30,30,35);
/*doors on doors*/
  fill(255);
  rect(x0+50,y0+20,25,75);
  fill(204,230,255);
  rect(x0+55,y0+25,15,25);
  fill(255);
  rect(x0+75,y0+20,25,75);
  fill(204,230,255);
  rect(x0+80,y0+25,15,25);
/*center windows*/
  rect(x0+120,y0+30,100,35);
/*doors on doors*/
  fill(255);
  rect(x0+240,y0+20,25,75);
  fill(204,230,255);
  rect(x0+245,y0+25,15,25);
  fill(255);
  rect(x0+265,y0+20,25,75);
  fill(204,230,255);
  rect(x0+270,y0+25,15,25);
/*ve banh xe*/
  fill(0);
  ellipse(x0+30,y0+116,30,30);
  rect(x0+30,y0+111,25,5);
  ellipse(x0+65,y0+116,30,30);

  rect(x0+100,y0+100,30,15);
  rect(x0+135,y0+100,30,15);
  rect(x0+170,y0+100,30,15);

  ellipse(x0+230,y0+116,30,30);
  rect(x0+230,y0+111,25,5);
  ellipse(x0+265,y0+116,30,30);
  return x0+300;
    
}
  