import resources from "../resources";

export class SwingBar {
  public container: UIContainerRect;
  public pointer: UIImage;
  private power: number;
  private maxLeft: number;
  private maxRight: number;
  public powerUp: boolean;

  constructor(bowlingCanvas: UICanvas, texture: Texture) {
    this.container = new UIContainerRect(bowlingCanvas);
    this.container.width = "100%";
    this.container.height = "100%";

    const powerBar = new UIImage(this.container, texture);
    powerBar.sourceWidth = 300;
    powerBar.sourceHeight = 100;
    powerBar.width = 300;
    powerBar.height = 100;
    powerBar.vAlign = "bottom";
    powerBar.positionY = 100;

    this.pointer = new UIImage(this.container, resources.textures.swingPointer);
    this.pointer.sourceWidth = 56;
    this.pointer.sourceHeight = 56;
    this.pointer.width = 56;
    this.pointer.height = 56;
    this.pointer.vAlign = "bottom";
    this.pointer.positionX = -130;
    this.pointer.positionY = 134; // make this go up for power

    this.power = -130;
    this.maxLeft = -130;
    this.maxRight = 130;
    this.powerUp = true;
  }

  update(pb: SwingBar): void {
    const position: number = Number(
      pb.pointer.positionX.toString().slice(0, -2)
    );
    this.power = position;
    if (pb.powerUp) {
      pb.pointer.positionX = position + 10;
      if (position >= pb.maxRight) {
        pb.powerUp = false;
      }
    } else {
      pb.pointer.positionX = position - 10;
      if (position <= pb.maxLeft) {
        pb.powerUp = true;
      }
    }
  }

  value(): number {
    const power: number =
      ((this.power - this.maxLeft) * 100) / (this.maxRight - this.maxLeft) - 50;
    return -power;
  }

  hideUI(): void {
    this.container.visible = false;
  }

  showUI(): void {
    this.container.visible = true;
  }
}
