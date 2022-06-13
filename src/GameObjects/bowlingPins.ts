import { Sound } from "./sound";
import resources from "../resources";

const hitSound01 = new Sound(resources.sounds.hit1, false);
const hitSound02 = new Sound(resources.sounds.hit2, false);
const hitSound03 = new Sound(resources.sounds.hit3, false);
const hitSounds: Sound[] = [hitSound01, hitSound02, hitSound03];

const PIN_DAMPENING = 0.4;

export class BowlingPin extends Entity {
  public isHit: boolean = false;
  public body: CANNON.Body;
  public world: CANNON.World;
  private StartLoc: Vector3;

  constructor(
    transform: Transform,
    _material: CANNON.Material,
    _world: CANNON.World,
    _parent: Entity
  ) {
    super();
    engine.addEntity(this);
    this.addComponent(transform);
    this.addComponent(resources.models.bowlingPin);
    this.world = _world;
    this.setParent(_parent);
    this.StartLoc = new Vector3(
      transform.position.x,
      transform.position.y,
      transform.position.z
    );

    // Create physics body for bowling pin
    this.body = new CANNON.Body({
      mass: 0.1, // kg
      position: new CANNON.Vec3(
        transform.position.x,
        transform.position.y,
        transform.position.z
      ), // m
      shape: new CANNON.Cylinder(0.05, 0.15, 0.3, 8), // Create sphere shaped body with a diameter of 0.3m
    });

    // Add material and dampening to stop the bowling pin rotating and moving continuously
    this.body.sleep();
    this.body.material = _material;
    this.body.linearDamping = PIN_DAMPENING;
    this.body.angularDamping = PIN_DAMPENING;
    this.world.addBody(this.body); // Add bowling pin body to the world

    // Bowling Pin collision
    this.body.addEventListener("collide", (e: any) => {
      // Only play sound when impact is high enough
      const relativeVelocity = e.contact.getImpactVelocityAlongNormal();
      if (Math.abs(relativeVelocity) > 0.1 && !this.isHit) {
        const randomTrackNo = Math.floor(Math.random() * 2);
        hitSounds[randomTrackNo].playAudioOnceAtPosition(
          this.getComponent(Transform).position
        );
        this.isHit = true;
      }
    });
  }

  hidePin() {
    this.body.quaternion.set(0, 0, 0, 1);
    this.body.position.set(6, 1.2, 0.8);
    this.body.sleep();
  }

  resetPin() {
    this.body.quaternion.set(0, 0, 0, 1);
    this.isHit = false;
    this.body.position.set(this.StartLoc.x, this.StartLoc.y, this.StartLoc.z);
    this.body.sleep();
  }
}
