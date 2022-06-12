import resources from "../resources";
import { Bowling } from "./Bowling"
import { Model } from "../GameObjects/model";
import { BowlingBall } from "../GameObjects/bowlingBall";
import { PowerBar } from "../ui/powerBar";

// Define the system
export class Balls {
/*
    public playingBall: string;
    public bowlingStatus: number = 0;
    private ballPower: Number = 0;
    private ballSwing: Number = 0;
    private ui: Bowling = null;
    private bowlingBalls: Array<Model> = [];
    private movableEntities: Array<BowlingBall> = [];
    private ballPos: Transform;
    

    constructor(bowlingUI: Bowling, pos: Transform,  _parent:  Entity, physicsMaterial: CANNON.Material, world: CANNON.World) {
        this.ui = bowlingUI;
        let models: Array<GLTFShape> = [resources.models.bowlingBall1, resources.models.bowlingBall2, resources.models.bowlingBall3];
        let randomNr: number = Math.floor(Math.random() * 3);

        let ballEntity = new BowlingBall(
            pos, 
            physicsMaterial,
            world,
            _parent,
        );

        this.ballPos = pos;

        this.movableEntities.push( ballEntity );
        
        engine.addEntity(ballEntity);
        //log(this.movableEntities.length);
        //log(this.ballPositions);
    }

    resetBalls(): void {
        let i:number = 0;
        //this.bowlingBalls.forEach(ball => {
            //ball.getComponent(Transform).position = this.ballPos;
        //    i++;
        //});
    }

    checkBallStatus(ball: IEntity) {
        log("Pick Ball");
        log(this.bowlingStatus);
        log(ball.getComponent(Transform).position);
        if(ball.uuid == this.playingBall) {
            log("We are playing!");
            if(this.bowlingStatus==3) {
                this.ballSwing = this.ui.getSwing();
                this.ui.hideSwingSlider();
                log(this.ballPower);
                log(this.ballSwing);
                this.bowlingStatus=4;
            }

            if(this.bowlingStatus==2) {
                this.ballPower = this.ui.getPower();
                this.ui.showSwingSlider();
                this.ui.hidePowerSlider();
                this.bowlingStatus=3;
            }

            if(this.bowlingStatus==1) {
                this.ui.showPowerSlider();
                this.bowlingStatus=2;
            }
        }
        if(this.bowlingStatus==0) {
            ball.getComponent(Transform).position = new Vector3(9.75,0.1,34.5);
            this.playingBall = ball.uuid;
            this.bowlingStatus = 1;
        }
        
    }

    */
}