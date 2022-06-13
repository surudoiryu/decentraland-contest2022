export class Model extends Entity {
    constructor(model: GLTFShape, transform: Transform, parent: Entity) {
        super()
        engine.addEntity(this)
        this.addComponent(transform)
        this.addComponent(model)
        this.setParent(parent)
    }
}