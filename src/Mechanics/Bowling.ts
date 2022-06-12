import resources from "../resources";
import { Model } from "../GameObjects/model";
import { BowlingPin } from "../GameObjects/bowlingPins";
import { PowerBar } from "../ui/powerBar";
import { SwingBar } from "../ui/swingBar";

export class Bowling {
    
    //public powerSlider: PowerBar = null;
    //public swingSlider: SwingBar = null;
    //private bowlingPinsLeft: Array<Model>;
    //private bowlingPinsRight: Array<Model>;

    constructor (bowlingCanvas: UICanvas, _parent: Entity) {
        // UI: Create a slider going left and right for ball motion
        // UI: Create a slider going up and down for power
        //this.powerSlider = new PowerBar(bowlingCanvas, resources.textures.powerMeter);
        //this.powerSlider.hideUI();

        //this.swingSlider = new SwingBar(bowlingCanvas, resources.textures.swingMeter);
        //this.swingSlider.hideUI();

        // UI: Create score display of hit pins
        
        // Models: Create balls
        

        // Models: Create pins
        //this.bowlingPinsLeft = [
            //new BowlingPinModel(resources.models.bowlingPin, { position: new Vector3(10.35, 1.07, 2.34) }),
            //new BowlingPinModel(resources.models.bowlingPin, { position: new Vector3(9.73, 1.07, 2.40) }),
            //new BowlingPinModel(resources.models.bowlingPin, { position: new Vector3(9.03, 1.07, 2.57) }),
        //];
        
        // Reset after 2 turns
    }

    //getPower(): Number {
        //return this.powerSlider.value();
    //}

    showPowerSlider(): void {
        //this.powerSlider.showUI();
    }

    hidePowerSlider(): void {
        //this.powerSlider.hideUI();
    }

    //getSwing(): Number {
        //return this.swingSlider.value();
    //}

    showSwingSlider(): void {
        //this.swingSlider.showUI();
    }

    hideSwingSlider(): void {
        //this.swingSlider.hideUI();
    }

    resetPins(side: string): void {
        if(side == "left"){
            //this.bowlingPinsLeft.forEach(pin => {
                // Reset the left pin to its original locatiom
            //});
        }else {
            //this.bowlingPinsRight.forEach(pin => {
                // Reset the right pin to its original locatiom
            //});
        }
    }
    
}
