import resources from "../resources"

export class PowerBar {
    public container: UIContainerRect
    public pointer: UIImage
    private power: number
    private maxLeft: number
    private maxRight: number
    public powerUp: Boolean

    constructor(bowlingCanvas: UICanvas,  texture: Texture) {
        this.container = new UIContainerRect(bowlingCanvas)
        this.container.width = "100%"
        this.container.height = "100%"

        const powerBar = new UIImage(this.container, texture)
        powerBar.sourceWidth = 120
        powerBar.sourceHeight = 300
        powerBar.width = 120
        powerBar.height = 300
        powerBar.hAlign = "left"
        powerBar.positionX = 150

        this.pointer = new UIImage(
            this.container,
            resources.textures.powerPointer
        )
        this.pointer.sourceWidth = 56
        this.pointer.sourceHeight = 26
        this.pointer.width = 56
        this.pointer.height = 26
        this.pointer.hAlign = "left"
        this.pointer.positionX = 164 
        this.pointer.positionY = -150 // make this go up for power

        this.power = -130
        this.maxLeft = -130
        this.maxRight = 130
        this.powerUp = true
    }

    update(pb: PowerBar): void {
        let position: number = Number(pb.pointer.positionY.toString().slice(0,-2))
        this.power = position
        if(pb.powerUp) {
            pb.pointer.positionY = position + 10
            if(position >= pb.maxRight) {
                pb.powerUp = false
            } 
        } else {
            pb.pointer.positionY = position - 10
            if(position <= pb.maxLeft) {
                pb.powerUp = true
            }
        }
    }

    value(): number {
        let power: number = (((this.power - this.maxLeft) * 100) / (this.maxRight-this.maxLeft) / 100)
        power += 0.4 //Offset minimal power
        return power
    }

    hideUI(): void {
        this.container.visible = false
    }

    showUI(): void {
        this.container.visible = true
    }

}
