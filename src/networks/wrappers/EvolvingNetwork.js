import { SequentialNetwork } from "../../export_networks.js";

export class EvolvingNetwork extends SequentialNetwork {
    /**
     * This class extends the basic sequential network to add evolution features.
     * @param {tf.Sequential} model A defined tensorflow sequential model. 
     * @param {tf} tfjs A reference to the tf global from tensorflow.js. This argument is required.
     */
    constructor(model, tfjs) {
        super(model, tfjs);
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
    setFlattened(flattenedNetwork) {
        let _flattenedNetwork = [...flattenedNetwork];

        model.getWeights().forEach((weight) => {
            const shape = weight.shape;
            const length = this.shapeToLength(shape);
            weight.assign(this.tfjs.tensor(_flattenedNetwork.splice(0, length), shape));
        });

        return this;
    }

    shapeToLength(shape) {
        return shape.reduce((prev, curr) => prev * curr, 1);
    }
}