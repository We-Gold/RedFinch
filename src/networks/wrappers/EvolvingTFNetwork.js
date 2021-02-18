import { TensorflowSequentialNetwork } from "../bases/TensorflowSequentialNetwork.js";

export class EvolvingTFNetwork extends TensorflowSequentialNetwork {
    constructor(model) {
        super(model);
    }

    /**
     * Flattens the network into a 1d array.
     * @return {Array}      The flattened network.
     */
    flatten() {
        let flattenedNetwork = [];

        this.getWeights().forEach((weight) => {
            flattenedNetwork.push(...weight.dataSync());
        });

        return flattenedNetwork;
    }

    /**
     * Sets the weights and biases in the network to those in the given flattened network.
     * @param  {Array} flattenedNetwork The flattened network
     * @return {EvolvingNetwork}      Returns itself for chaining.
     */
    setFlattened(flattenedNetwork, createTensorFunction) {
        let _flattenedNetwork = [...flattenedNetwork];

        model.getWeights().forEach((weight) => {
            const shape = weight.shape;
            const length = this.shapeToLength(shape);
            weight.assign(createTensorFunction(_flattenedNetwork.splice(0, length), shape));
        });

        return this;
    }

    shapeToLength(shape) {
        return shape.reduce((prev, curr) => prev * curr, 1);
    }
}