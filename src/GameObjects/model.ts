export class Model extends Entity {
    constructor(model: GLTFShape, transform: Transform, parent: Entity) {
        super();
        engine.addEntity(this);

        //model.withCollisions = true;
        //model.isPointerBlocker = true;
        //model.visible = true;
        this.addComponent(transform);
        this.addComponent(model);
        this.setParent(parent);
    }
}