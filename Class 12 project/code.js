var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e0600cdd-a2d8-469e-9b8a-0356ed856e7b","eb39a056-c64e-49f9-925d-f43415fc1de8","e91521dc-765b-4222-bb9c-b609f0a66b35","fa1cffc7-b8bf-4356-b122-bf890530754f","6ec4f9c9-8b4c-4d62-b9e3-8df3c2279b4a","77cd2769-186c-4d87-a883-0095acdb2e33"],"propsByKey":{"e0600cdd-a2d8-469e-9b8a-0356ed856e7b":{"name":"Animation_2","sourceUrl":null,"frameSize":{"x":120,"y":98},"frameCount":1,"looping":true,"frameDelay":12,"version":"_ss3aZSnv92ADmrBfNfzBI6n4dW1RJeI","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":98},"rootRelativePath":"assets/e0600cdd-a2d8-469e-9b8a-0356ed856e7b.png"},"eb39a056-c64e-49f9-925d-f43415fc1de8":{"name":"Animation_3","sourceUrl":null,"frameSize":{"x":120,"y":97},"frameCount":1,"looping":true,"frameDelay":12,"version":"Z0vDQcYdqteYmi4igz3LAx3h0K5JB9Mj","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":97},"rootRelativePath":"assets/eb39a056-c64e-49f9-925d-f43415fc1de8.png"},"e91521dc-765b-4222-bb9c-b609f0a66b35":{"name":"Animation_4","sourceUrl":null,"frameSize":{"x":140,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"rNXYfBoRYBz7g0P0JimOnIxZVp8aKPXE","loadedFromSource":true,"saved":true,"sourceSize":{"x":140,"y":94},"rootRelativePath":"assets/e91521dc-765b-4222-bb9c-b609f0a66b35.png"},"fa1cffc7-b8bf-4356-b122-bf890530754f":{"name":"Animation_5","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Nsg6AqIzUIMCiUK5YVBKr5FPUB51cxDO","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/fa1cffc7-b8bf-4356-b122-bf890530754f.png"},"6ec4f9c9-8b4c-4d62-b9e3-8df3c2279b4a":{"name":"Animation_1","sourceUrl":null,"frameSize":{"x":120,"y":108},"frameCount":1,"looping":true,"frameDelay":12,"version":"UwGDnW0GIT0XaBPuVk_IrqwzN_tcOqBm","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":108},"rootRelativePath":"assets/6ec4f9c9-8b4c-4d62-b9e3-8df3c2279b4a.png"},"77cd2769-186c-4d87-a883-0095acdb2e33":{"name":"Animation_6","sourceUrl":"assets/api/v1/animation-library/gamelab/qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH/category_backgrounds/background_space.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var rand=randomNumber(1,3);
var player=createSprite(World.mouseX,390,10,10);
player.scale=0.5;
var arrow;

var spaceShip=createGroup();
var arrowGroup=createGroup();



player.setAnimation("Animation_4");

 


function draw() {
  background("white");
  

  
  player.x=World.mouseX;
  player.y=380;
  
  
  var count=Math.round(World.frameCount/100);
  text("score "+count,250,100);
  
  if(spaceShip.y<0){
    count-1;
  }
  
  if(keyDown("space")){
    if(World.frameCount%5===0){
   arrow=createSprite(player.x,390,5,5);
    arrow.velocityY=-5;
    arrow.scale=0.2;
    arrow.setAnimation("Animation_5");
    arrowGroup.add(arrow);
    playSound("assets/category_hits/retro_game_weapon_-_gauntlet_punch_1.mp3");
  }
  }
  
 if (spaceShip.isTouching(arrowGroup)){
   spaceShip.destroyEach();
 }
  
  
  if(spaceShip.visible==="false"){
    text("YOU WIN! CONGRATS!");
  
}

spawnSpaceship();
drawSprites();
}

function spawnSpaceship(){
  if (World.frameCount%60===0){
    var spaceship=createSprite(200,190,10,10);
    spaceship.velocityX=-2;
    spaceship.scale=0.5;
    spaceship.setAnimation("Animation_"+rand);
    spaceShip.add(spaceship);
    spaceShip.setLifetimeEach(100);
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
