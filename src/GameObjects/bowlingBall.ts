import { Sound } from './sound'
import resources from '../resources'

const hitSound01 = new Sound(resources.sounds.ballhit1, false)
const hitSound02 = new Sound(resources.sounds.ballhit2, false)
const hitSound03 = new Sound(resources.sounds.ballhit3, false)
const hitSounds: Sound[] = [hitSound01, hitSound02, hitSound03]

const pickUpSound = new Sound(resources.sounds.pickup, false)
const throwSound = new Sound(resources.sounds.throw, false)

const THROW_STRENGTH_MULTIPLIER = 150;
const BALL_DAMPENING = 0.1;

export class BowlingBall extends Entity {
    public isActive: boolean = false
    public isThrown: boolean = false
    public world: CANNON.World
    public body: CANNON.Body
    private StartLoc: Vector3
    private BallLocked: boolean = false

    constructor(transform: Transform, _material: CANNON.Material, _world: CANNON.World, _parent: Entity) {
        super();
        engine.addEntity(this);
        this.addComponent(transform);
        this.addComponent(resources.models.bowlingBall3);
        this.world = _world;
        this.setParent(_parent);
        this.toggleOnPointerDown(true);
        this.StartLoc = new Vector3(transform.position.x,transform.position.y, transform.position.z);

        // Create physics body for ball
        this.body = new CANNON.Body({
            mass: 12, // kg
            position: new CANNON.Vec3(transform.position.x, transform.position.y, transform.position.z), // m
            shape: new CANNON.Sphere(0.15), // Create sphere shaped body with a diameter of 0.22m
        })

        // Add material and dampening to stop the ball rotating and moving continuously
        this.body.sleep()
        this.body.material = _material
        this.body.linearDamping = BALL_DAMPENING
        this.body.angularDamping = BALL_DAMPENING
        this.world.addBody(this.body) // Add ball body to the world

        // Ball collision
        this.body.addEventListener("collide", (e: any) => {
            let randomTrackNo = Math.floor(Math.random() * 2)
            hitSounds[randomTrackNo].playAudioOnceAtPosition(this.getComponent(Transform).position)
        })

        this.addComponent(new Animator())
        this.getComponent(Animator).addClip(new AnimationState("PickUp", { looping: false }))
    }

    playerPickup(): void {
      if(!this.BallLocked) {
        log("ball is not locked")
        pickUpSound.getComponent(AudioSource).playOnce()
        this.isActive = true
        this.body.sleep()
        this.isThrown = false
        this.body.position.set(Camera.instance.position.x, Camera.instance.position.y, Camera.instance.position.z)
        this.setParent(Attachable.FIRST_PERSON_CAMERA)
        this.getComponent(Transform).position.set(0, -0.35, 0.7)
        this.playPickUpAnim()
        this.toggleOnPointerDown(false)
      }
    }

    playerThrow(throwDirection: Vector3, throwPower: number, swingPower: number): void {
        throwSound.getComponent(AudioSource).playOnce()
    
        this.isActive = false
        this.isThrown = true
        this.setParent(null)
        this.toggleOnPointerDown(true)
    
        // Physics
        this.body.wakeUp()
        this.body.velocity.setZero()
        this.body.angularVelocity.setZero()
    
        this.body.position.set(
          Camera.instance.feetPosition.x + throwDirection.x,
          throwDirection.y + Camera.instance.position.y,
          Camera.instance.feetPosition.z + throwDirection.z
        )
    
        let throwPowerAdjusted = throwPower * THROW_STRENGTH_MULTIPLIER
        let swingPowerAdjusted = swingPower / 100

        // Throw
        this.body.applyImpulse(
          new CANNON.Vec3((swingPowerAdjusted + throwDirection.x) * throwPowerAdjusted, throwDirection.y * throwPowerAdjusted, throwDirection.z * throwPowerAdjusted),
          new CANNON.Vec3(this.body.position.x, this.body.position.y, this.body.position.z)
        )
      }
    
    toggleOnPointerDown(isOn: boolean): void {
        if (isOn) {
          this.addComponentOrReplace(
            new OnPointerDown(
              () => {
                this.playerPickup()
              },
              { hoverText: "Pick up Bowlingball", distance: 8, button: ActionButton.PRIMARY }
            )
          )
        } else {
          log("Do not show label on ball")
          if (this.hasComponent(OnPointerDown)) this.removeComponent(OnPointerDown)
        }
    }
    
    playPickUpAnim() {
        this.getComponent(GLTFShape).visible = true
        this.getComponent(Animator).getClip("PickUp").stop()
        this.getComponent(Animator).getClip("PickUp").play()
    }

    isLocked() {
      return this.BallLocked
    }

    lockBall() {
      this.BallLocked = true
    }

    unlockBall() {
      this.BallLocked = false
    }

    resetBall() {
      this.isThrown = false
      this.BallLocked = false
      this.body.sleep()
      this.body.position.set(this.StartLoc.x, this.StartLoc.y, this.StartLoc.z)
    }
    
}