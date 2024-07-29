import { Scene, Types } from 'phaser';

export class GameScene extends Scene {
    private achoThePup!: Types.Physics.Arcade.ImageWithDynamicBody;

    constructor() {
        super('game');
    }

    create(): void {

        this.add.image(400, 570, 'ground');
        this.achoThePup = this.physics.add.image(0, 0, 'acho');

        this.achoThePup.setCollideWorldBounds(true);
        this.achoThePup.setBounce(1, 1);
        this.achoThePup.setVelocityX(300);
    }
}