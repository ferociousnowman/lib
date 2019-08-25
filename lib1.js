function bounceoff(movingrect,fixrect){
    if(movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2 &&
      fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2 )
   {
           movingrect.shapeColor="red"; fixrect.shapeColor="red";
   
           movingrect.velocityX*=(-1);
           fixrect.velocityX*=(-1);
          }
           else if (  movingrect.y-fixrect.y<fixrect.height/2+movingrect.height/2 &&
             fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2 ){
              movingrect.shapeColor="blue";
              movingrect.velocityY*=(-1);
              fixrect.velocityY*=(-1);
    fixrect.shapeColor="blue"; }
  }