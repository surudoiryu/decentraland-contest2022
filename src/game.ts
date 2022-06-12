import { Sound } from "./GameObjects/sound"
import { Model } from './GameObjects/model';
import { BowlingBall } from "./GameObjects/bowlingBall";
import { BowlingPin } from "./GameObjects/bowlingPins";
import resources from './resources';
import * as ui from "@dcl/ui-scene-utils"
import { setTimeout } from '@dcl/ecs-scene-utils'
import { PowerBar } from "src/ui/powerBar";
import { SwingBar } from "src/ui/swingBar";

/*
// Set up world environment
*/
const _scene = new Entity();
_scene.addComponent(
  new CameraModeArea({
    area: { 
      box: new Vector3(32, 8, 128)
    },
    cameraMode: CameraMode.FirstPerson,
  })
);

engine.addEntity(_scene);

/*
// Set up the world
*/
//Grass patch
new Model(resources.scenery.stone, new Transform({ position: new Vector3(8, 0, 8) }), _scene);
new Model(resources.scenery.stone, new Transform({ position: new Vector3(8, 0, 24) }), _scene);
new Model(resources.scenery.stone, new Transform({ position: new Vector3(8, 0, 40) }), _scene);

//Floor patch
new Model(resources.scenery.floor, new Transform({ 
  position: new Vector3(8, 0, 39.800750732421875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9276268482208252, 2.1711158752441406, 1.5218477249145508)
}), _scene);

//Ice Chunks
new Model(resources.scenery.iceBlock1, new Transform({ 
  position: new Vector3(6.31, 0.1, 19.17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
}), _scene);
new Model(resources.scenery.iceBlock2, new Transform({ 
  position: new Vector3(6.61, 0, 7.89),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
}), _scene);
new Model(resources.scenery.iceBlock3, new Transform({ 
  position: new Vector3(6.05, 0, 12.07),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
}), _scene);
new Model(resources.scenery.iceGate, new Transform({ 
  position: new Vector3(6.30, 0, 22.09),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
}), _scene);


// Infoboard 
new Model(resources.scenery.board, new Transform({
  position: new Vector3(5.34, 0.3, 37.40),
  rotation: new Quaternion(0, -0.39, 0, 1),
  scale: new Vector3(1, 1, 1)
}), _scene);

//Logo text
new Model(resources.scenery.logo, new Transform({
  position: new Vector3(10.362780570983887, 3.042880058288574, 2.0378494262695312),
  rotation: new Quaternion(-0.7089106440544128, 7.500526722880718e-15, 8.450872002185861e-8, -0.7052983641624451),
  scale: new Vector3(1.5887510776519775, 1.00001859664917, 1.6301485300064087)
}), _scene);

//Building
new Model(resources.scenery.building, new Transform({
  position: new Vector3(8, 0, 45.342437744140625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9570988416671753, 2.3747832775115967, 1.5257043838500977)
}), _scene);

//Green Screen
new Model(resources.scenery.greenScreen, new Transform({
  position: new Vector3(8, 0, 2.279754638671875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.701184034347534, 2.710777759552002, 1)
}), _scene);

//Pink Screen
/*new Model(resources.scenery.pinkScreen, new Transform({
  position: new Vector3(8, 0, 34.08313751220703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.7041015625, 2.831775188446045, 1)
}), _scene);*/

// Misc objects
let resetButton = new Model(resources.models.resetButton, new Transform({ 
  position: new Vector3(12.50, .35, 26.25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
}), _scene);

new Model(resources.scenery.ballRack, new Transform({ 
  position: new Vector3(13.342463493347168, 0.20078998804092407, 37.64812469482422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.8380337953567505, 1.4938488006591797, 1)
}), _scene);

new Model(resources.scenery.ballRack, new Transform({ 
  position: new Vector3(2.66237211227417, 0.20078998804092407, 37.64812469482422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.8380337953567505, 1.4938488006591797, 1)
}), _scene);

new Model(resources.scenery.outOfOrder, new Transform({ 
  position: new Vector3(8.4196138381958, 0, 13.70751953125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
}), _scene);

new Model(resources.scenery.iceMan1, new Transform({ 
  position: new Vector3(14.119495391845703, 0, 28.874135971069336),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
}), _scene);

new Model(resources.scenery.iceMan2, new Transform({ 
  position: new Vector3(0.7218418121337891, 0, 28.884389877319336),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
}), _scene);

// Outside Lights
new Model(resources.scenery.lights, new Transform({ 
  position: new Vector3(14.307211875915527, 1.3914623260498047, 19.71360969543457),
  rotation: new Quaternion(2.822662122550887e-15, 0.7109540700912476, -8.47523224933866e-8, 0.7032384872436523),
  scale: new Vector3(0.788870096206665, 1, 0.9999948740005493)
}), _scene);
new Model(resources.scenery.lights, new Transform({ 
  position: new Vector3(14.307211875915527, 1.3914623260498047, 32.31024169921875),
  rotation: new Quaternion(2.822662122550887e-15, 0.7109540700912476, -8.47523224933866e-8, 0.7032384872436523),
  scale: new Vector3(0.8793615698814392, 1, 1.0000078678131104)
}), _scene);
new Model(resources.scenery.lights, new Transform({ 
  position: new Vector3(14.307211875915527, 1.3914623260498047, 7.213737487792969),
  rotation: new Quaternion(2.822662122550887e-15, 0.7109540700912476, -8.47523224933866e-8, 0.7032384872436523),
  scale: new Vector3(0.8692893981933594, 1, 1.0000064373016357)
}), _scene);
new Model(resources.scenery.lights, new Transform({ 
  position: new Vector3(1.693457841873169, 1.3914623260498047, 19.71360969543457),
  rotation: new Quaternion(2.822662122550887e-15, 0.7109540700912476, -8.47523224933866e-8, 0.7032384872436523),
  scale: new Vector3(0.7888704538345337, 1, 0.9999948740005493)
}), _scene);
new Model(resources.scenery.lights, new Transform({ 
  position: new Vector3(1.6769132614135742, 1.3914623260498047, 7.213737487792969),
  rotation: new Quaternion(2.822662122550887e-15, 0.7109540700912476, -8.47523224933866e-8, 0.7032384872436523),
  scale: new Vector3(0.8692894577980042, 1, 1.0000065565109253)
}), _scene);
new Model(resources.scenery.lights, new Transform({ 
  position: new Vector3(1.8423776626586914, 1.3914623260498047, 32.31024169921875),
  rotation: new Quaternion(2.822662122550887e-15, 0.7109540700912476, -8.47523224933866e-8, 0.7032384872436523),
  scale: new Vector3(0.8793612122535706, 1, 1.000008225440979)
}), _scene);



const imageBillboardBlack = new Model(resources.scenery.billboard, new Transform({ 
  position: new Vector3(8, 7.004123687744141, 19.811948776245117),
  rotation: new Quaternion(8.366993570560347e-16, -0.7041155099868774, 8.393710260179432e-8, 0.7100855708122253),
  scale: new Vector3(3.773837089538574, 1.8358278274536133, 1.0001990795135498)
}), _scene);
/*
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }
const script3 = new Script3()
script3.init(options)
script3.spawn(imageBillboardBlack, {"image":"https://media.discordapp.net/attachments/978543970407825438/985321924991279104/PENGBOWLINGFRONT1.png?width=1440&height=598"}, createChannel(channelId, imageBillboardBlack, channelBus))
*/




// Setup our world
const world = new CANNON.World()
world.quatNormalizeSkip = 0
world.quatNormalizeFast = false
world.gravity.set(0, -9.82, 0) // m/s²

//loadColliders(world)

const physicsMaterial = new CANNON.Material("groundMaterial")
const ballContactMaterial = new CANNON.ContactMaterial(physicsMaterial, physicsMaterial, { friction: 1, restitution: 0.5 })
world.addContactMaterial(ballContactMaterial)

let gamePoints:number = 0;

/*
// Add balls to the alley
*/
const ball1 = new BowlingBall(new Transform({ position: new Vector3(7.92, 1.06, 26.50)}), physicsMaterial, world, _scene);
const ball2 = new BowlingBall(new Transform({ position: new Vector3(7.92, 1.06, 25.88)}), physicsMaterial, world, _scene);
const ball3 = new BowlingBall(new Transform({ position: new Vector3(7.92, 1.06, 25.35)}), physicsMaterial, world, _scene);

const balls: BowlingBall[] = [ball1, ball2, ball3];

/*
// Add pins to the Left alley (+0.5 spacing on X-axis)
*/
const pin1  = new BowlingPin(new Transform({ position: new Vector3(9.73, 0.3, 3.18)}), physicsMaterial, world, _scene);

const pin2  = new BowlingPin(new Transform({ position: new Vector3(9.48, 0.3, 2.93)}), physicsMaterial, world, _scene);
const pin3  = new BowlingPin(new Transform({ position: new Vector3(9.98, 0.3, 2.93)}), physicsMaterial, world, _scene);

const pin4  = new BowlingPin(new Transform({ position: new Vector3(9.23, 0.3, 2.68)}), physicsMaterial, world, _scene);
const pin5  = new BowlingPin(new Transform({ position: new Vector3(9.73, 0.3, 2.68)}), physicsMaterial, world, _scene);
const pin6  = new BowlingPin(new Transform({ position: new Vector3(10.23, 0.3, 2.68)}), physicsMaterial, world, _scene);

const pin7  = new BowlingPin(new Transform({ position: new Vector3(8.98, 0.3, 2.43)}), physicsMaterial, world, _scene);
const pin8  = new BowlingPin(new Transform({ position: new Vector3(9.48, 0.3, 2.43)}), physicsMaterial, world, _scene);
const pin9  = new BowlingPin(new Transform({ position: new Vector3(9.98, 0.3, 2.43)}), physicsMaterial, world, _scene);
const pin10  = new BowlingPin(new Transform({ position: new Vector3(10.48, 0.3, 2.43)}), physicsMaterial, world, _scene);

const pins: BowlingPin[] = [pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10];

const strikeSound = new Sound(resources.sounds.strike, false)
const spareSound = new Sound(resources.sounds.spare, false)
const welcomeSound = new Sound(resources.sounds.welcome, false)

// Create a ground plane and apply physics material

const groundShape: CANNON.Plane = new CANNON.Plane()
const groundBody: CANNON.Body = new CANNON.Body({ mass: 0 })
groundBody.addShape(groundShape)
groundBody.material = physicsMaterial
groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2) // Reorient ground plane to be in the y-axis
groundBody.position.set(0, 0.25, 0)
world.addBody(groundBody) // Add ground body to world


const allyRShape: CANNON.Box = new CANNON.Box(new CANNON.Vec3(4.70,5,22.5))
const allyRBody: CANNON.Body = new CANNON.Body({ mass: 0 })
allyRBody.addShape(allyRShape)
allyRBody.material = physicsMaterial
allyRBody.position.set(16, 0.25, 0)
world.addBody(allyRBody) // Add ground body to world


const allyLShape: CANNON.Box = new CANNON.Box(new CANNON.Vec3(8.30,5,22.5))
const allyLBody: CANNON.Body = new CANNON.Body({ mass: 0 })
allyLBody.addShape(allyLShape)
allyLBody.material = physicsMaterial
allyLBody.position.set(0, 0.25, 0)
world.addBody(allyLBody) // Add ground body to world


// Controls and UI
onEnterSceneObservable.add((player) => {
  log("player entered scene: ", player.userId);
  // Play sound effect ?
  welcomeSound.playAudioOnceAtPosition(new Vector3(6.5, 2.5, 27.0));
})

log("Init UI");
const bowlingCanvas = new UICanvas();
let throwPower = 0;
let swingPower = 0;
let ballState = 0;
let gameStage = 0;
let totalScoreAmount = 0;
let calculateScore = false;
let isPowerUp = true;
let isSwingUp = true;
let isStrike = false;
let isSpare = false;
let powerMeter = new PowerBar(bowlingCanvas, resources.textures.powerMeter);
let swingMeter = new SwingBar(bowlingCanvas, resources.textures.swingMeter);
powerMeter.hideUI();
swingMeter.hideUI();


const epicScore = new UIText(bowlingCanvas);
epicScore.value = "";
epicScore.fontSize = 128;
epicScore.width = 500;
epicScore.height = 150;
epicScore.color = new Color4(255,0,0,1)
epicScore.vAlign = "middle";
epicScore.hAlign = "center";

const uiRect = new UIContainerRect(bowlingCanvas);
uiRect.width = "100%";
uiRect.height = "100%";

// STRIKE/SPARE UI
const strikeSprite = new UIImage(uiRect, resources.textures.strike);
strikeSprite.sourceWidth = 831;
strikeSprite.sourceHeight = 455;
strikeSprite.width = 500;
strikeSprite.height = 320;
strikeSprite.positionY = -2000;
strikeSprite.hAlign = "center";
strikeSprite.vAlign = "middle";

const spareSprite = new UIImage(uiRect, resources.textures.spare);
spareSprite.sourceWidth = 831;
spareSprite.sourceHeight = 455;
spareSprite.width = 500;
spareSprite.height = 320;
spareSprite.positionY = -2000;
spareSprite.hAlign = "center";
spareSprite.vAlign = "middle";
// END OF STRIKE/SPARE UI

// ROUND UI
const roundSprite = new UIImage(uiRect, resources.textures.roundIcon);
roundSprite.sourceWidth = 128;
roundSprite.sourceHeight = 128;
roundSprite.width = 56;
roundSprite.height = 56;
roundSprite.positionX = 30;
roundSprite.positionY = 130;
roundSprite.hAlign = "left";
roundSprite.vAlign = "middle";

const currentRound = new UIText(bowlingCanvas);
currentRound.value = "1";
currentRound.fontSize = 36;
currentRound.width = 150;
currentRound.height = 56;
currentRound.positionX = 100;
currentRound.positionY = 135;
currentRound.hAlign = "left";
currentRound.vAlign = "middle";
// END OF ROUND UI


// SCORE UI
const scoreSprite = new UIImage(uiRect, resources.textures.scoreIcon);
scoreSprite.sourceWidth = 256;
scoreSprite.sourceHeight = 256;
scoreSprite.width = 56;
scoreSprite.height = 56;
scoreSprite.positionX = 30;
scoreSprite.positionY = 60;
scoreSprite.hAlign = "left";
scoreSprite.vAlign = "middle";

const currentScore = new UIText(bowlingCanvas);
currentScore.value = "0";
currentScore.fontSize = 36;
currentScore.width = 120;
currentScore.height = 30;
currentScore.positionX = 100;
currentScore.positionY = 50;
currentScore.hAlign = "left";
currentScore.vAlign = "middle";

const lastScore = new UIText(bowlingCanvas);
lastScore.value = "Last score: 0";
lastScore.fontSize = 18;
lastScore.width = 120;
lastScore.height = 30;
lastScore.positionX = 30;
lastScore.positionY = 0;
lastScore.hAlign = "left";
lastScore.vAlign = "middle";

const totalScore = new UIText(bowlingCanvas);
totalScore.value = "Total score: 0";
totalScore.fontSize = 18;
totalScore.width = 120;
totalScore.height = 30;
totalScore.positionX = 30;
totalScore.positionY = -30;
totalScore.hAlign = "left";
totalScore.vAlign = "middle";
// END OF SCORE UI






const POWER_UP_SPEED = 150

class PowerMeterSystem implements ISystem {
  update(dt: number): void {
    if(ballState == -1) {
      throwPower = 0;
      swingPower = 0;
      isPowerUp = true;
      isSwingUp = true;
      powerMeter.hideUI();
      swingMeter.hideUI();
      ballState = 0;
    }

    if(ballState == 0) {
      powerMeter.update(powerMeter);
    }

    if(ballState == 1) {
      swingMeter.update(swingMeter);
    }
  }
}

let powerMeterSys: PowerMeterSystem
powerMeterSys = new PowerMeterSystem();
engine.addSystem(powerMeterSys);

// Controls
const input = Input.instance;
input.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, (e) => {
  if(gameStage <= 1) {
    gamePoints = 0;
  }
  for (let ball of balls) {
    if (ball.isActive && ballState == 0) {
      powerMeter.showUI();
      for (let b of balls) {
        b.lockBall();
      }
    }
  }
  currentRound.value = (gameStage==0) ? "1" : gameStage.toString();
});

input.subscribe("BUTTON_DOWN", ActionButton.POINTER, false, (e) => {
  for (let ball of balls) {
    if (ball.isActive && !ball.isThrown) {
      if(ballState == 1) {
        ballState = 2;
        let throwDirection = Vector3.Forward().rotate(Camera.instance.rotation); // Camera's forward vector
        throwPower = powerMeter.value();
        swingPower = swingMeter.value();
        ball.playerThrow(throwDirection, throwPower, swingPower);
        gameStage += 1;
        ballState = -1;
      }
    }
  }
})

input.subscribe("BUTTON_UP", ActionButton.POINTER, false, (e) => {
  for (let ball of balls) {
    if (ball.isActive && !ball.isThrown) {
      if(ballState == 2) {
        ballState = -1;
      }

      if(ballState == 0) {
        // Power Slider completed.
        swingMeter.showUI();
        ballState = 1;
      }
    }
  }
})

resetButton.addComponentOrReplace(
  new OnPointerDown(
    () => {
      ballState = 0;
      gamePoints = 0;
      gameStage = 0;
      isStrike = false;
      isSpare = false;
      calculateScore = false;
      currentRound.value = "1";
      currentScore.value = "0";
      
      for (let i = 0; i < pins.length; i++) {
        pins[i].resetPin();
      }

      for (let j = 0; j < balls.length; j++) {
        balls[j].unlockBall();
        balls[j].resetBall();
      }
      
      spareSound.playAudioOnceAtPosition(new Vector3(6.5, 2.5, 27.0));
    },
    { hoverText: "Reset the game!", distance: 8, button: ActionButton.PRIMARY }
  )
);


// Set high to prevent tunnelling
const FIXED_TIME_STEPS = 1.0 / 60
const MAX_TIME_STEPS = 10

class PhysicsSystem implements ISystem {
  update(dt: number): void {
    world.step(FIXED_TIME_STEPS, dt, MAX_TIME_STEPS)

    totalScore.value = "Total score: " + totalScoreAmount;

    if(isStrike) {
      let currentPos: number = Number(strikeSprite.positionY.toString().slice(0,-2));
      strikeSprite.positionY = currentPos + 50;
      
      if((currentPos + 25) > 0) {
        strikeSprite.positionY = 0;
        isStrike = false;
        lastScore.value = "Last score: STRIKE!";
        strikeSound.playAudioOnceAtPosition(new Vector3(6.5, 2.5, 27.0));
        setTimeout(3000,()=>{
          strikeSprite.positionY = -2000;
          gameStage = 0;
          currentRound.value = "1";
          for (let y = 0; y < pins.length; y++) {
            pins[y].resetPin();
          }
        });
      } 
    }

    if(isSpare) {
      let currentPos: number = Number(spareSprite.positionY.toString().slice(0,-2));
      spareSprite.positionY = currentPos + 50;
      
      if((currentPos + 25) > 0) {
        spareSprite.positionY = 0;
        isSpare = false;
        lastScore.value = "Last score: SPARE!";
        spareSound.playAudioOnceAtPosition(new Vector3(6.5, 2.5, 27.0));
        setTimeout(3000,()=>{
          spareSprite.positionY = -2000;
          gameStage = 0;
          currentRound.value = "1";
        });
      } 
    }

    for (let i = 0; i < balls.length; i++) {
      if (!balls[i].isActive) {
        balls[i].getComponent(Transform).position.copyFrom(balls[i].body.position)
        balls[i].getComponent(Transform).rotation.copyFrom(balls[i].body.quaternion)
      } 
      
      
      if(balls[i].isThrown){
        if(balls[i].body.position.z < 2 || balls[i].body.position.z > 30) {
          
          //Check game, reset pins if game is 2
          if(gameStage >= 2 && !calculateScore) {
            calculateScore = true;
            currentRound.value = "2";
            
            //Wait for 3 seconds and play sound
            setTimeout(3000,()=>{
              
                log(pins.length);
                for (let y = 0; y < pins.length; y++) {
                  if(pins[y].isHit) {
                    gamePoints += 1;
                  }
                  pins[y].resetPin();
                  currentRound.value = "1";
                  calculateScore = false;
                }
                log("Your final score is: " + gamePoints);
                currentScore.value = gamePoints.toString();
                lastScore.value = "Last score: " + gamePoints;
                totalScoreAmount += gamePoints;
                balls[i].resetBall();
                for (let j = 0; j < balls.length; j++) {
                  balls[j].unlockBall();
                }

                if(gamePoints == 10) {
                  log("SPARE!");
                  isSpare = true;
                }//else {
                gameStage = 0;
              //}
            });
            
          }

          //Check game, reset only ball if game is 1
          if(gameStage == 1) {
            currentRound.value = "1";
            gameStage = 2; // second round
            balls[i].resetBall();

            setTimeout(3000,()=>{
              for (let y = 0; y < pins.length; y++) {
                if(pins[y].isHit) {
                  pins[y].hidePin();
                  gamePoints += 1;
                }
              }
              log("You have hit: " + gamePoints);
              currentScore.value = gamePoints.toString();
              for (let j = 0; j < balls.length; j++) {
                balls[j].unlockBall();
              }

              if(gamePoints == 10) {
                log("STRIKE!!!!");
                gameStage = 0;
                totalScoreAmount += gamePoints;
                isStrike = true;
              }
              gamePoints = 0;
            });
          }
        }
      }
    }
    for (let i = 0; i < pins.length; i++) {
      pins[i].getComponent(Transform).position.copyFrom(pins[i].body.position)
      pins[i].getComponent(Transform).rotation.copyFrom(pins[i].body.quaternion)
    }
  }
}
engine.addSystem(new PhysicsSystem())
