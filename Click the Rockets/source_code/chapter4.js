// SET MAIN NAMESPACE
goog.provide('chapter4');

// GET REQUIREMENTS 
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Sprite');
goog.require('lime.fill.LinearGradient');
goog.require('lime.Polygon');
goog.require('lime.animation.MoveTo');
goog.require('lime.animation.RotateBy');
goog.require('lime.animation.FadeTo');

// ENTRYPOINT
chapter4.start = function(){

  // DIRECTOR
	var director = new lime.Director(document.body,800,640);
	director.makeMobileWebAppCapable();
  director.setDisplayFPS(false);

  // NEW SCENE
  var scene1 = new lime.Scene();

  // SKY
  var sky_gradient = new lime.fill.LinearGradient().setDirection(0,0,1,1)
    .addColorStop(0,'#B2DFEE').addColorStop(1,'#0000CD');

  var sky = new lime.Sprite().setSize(800,640).setPosition(0,0).setAnchorPoint(0,0)
    .setFill(sky_gradient);

  // GRASS
  var grass = new lime.Sprite().setSize(800,40).setPosition(0,600).setAnchorPoint(0,0)
    .setFill('rgb(0,128,0');

  // LAUNCH PLATFORM
  var platform = new lime.Polygon().setPosition(100,560).setAnchorPoint(0,0).setFill('#8B8B83')
    .addPoints(-40,40,0,0, 600,0, 640,40,-40,40);

  // ROCKET
  var rocket1 = new lime.Sprite().setSize(80,140).setFill('img/rocket.png').setPosition(360,420)
    .setAnchorPoint(0,0);
  var rocket2 = new lime.Sprite().setSize(80,140).setFill('img/rocket.png').setPosition(160,420)
    .setAnchorPoint(0,0);
  var rocket3 = new lime.Sprite().setSize(80,140).setFill('img/rocket.png').setPosition(560,420)
    .setAnchorPoint(0,0);

 	goog.events.listen(rocket1, ['mousedown','touchstart'], function(e) {
    	
    // ROCKET 1 MOVEMENT
    var rocket1_movement = new lime.animation.MoveTo(360, -200).setDuration(1);
    this.runAction(rocket1_movement);

  });

    // ROCKET 2 MOVEMENT
    goog.events.listen(rocket2, ['mousedown','touchstart'], function(e) {

    	var rocket2_movement = new lime.animation.RotateBy(90);
    	this.runAction(rocket2_movement);
  });

    // ROCKET 3 MOVEMENT
    goog.events.listen(rocket3, ['mousedown','touchstart'], function(e) {
    	var rocket3_movement = new lime.animation.FadeTo(0).setDuration(2);
    	this.runAction(rocket3_movement);
      
    	goog.events.listen(rocket3_movement, lime.animation.Event.STOP, function(e) {
    		alert('The Rocket is GONE!!');
    	});
    });
   
  scene1.appendChild(sky);
  scene1.appendChild(grass);
  scene1.appendChild(platform);
  scene1.appendChild(rocket1);
  scene1.appendChild(rocket2);
  scene1.appendChild(rocket3);

  director.replaceScene(scene1);
}
