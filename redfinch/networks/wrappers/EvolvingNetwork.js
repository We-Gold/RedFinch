import { VanillaNetwork } from "../bases/VanillaNetwork.js";

class EvolvingNetwork extends VanillaNetwork {
    constructor(config) {
        super(config);
    }

    /**
     * Flattens the network into a 1d array.
     * @return {Array}      The flattened network.
     */
    flatten() {
        let flattenedNetwork = [];

        // Get all the layers except for the output layer.
        const layers = this.layers.slice(0, this.layers.length - 1);

        // Add the weights of all the nodes in the network to an array.
        layers.forEach((layer) => {
            layer.getNodes().forEach((node) => {
                flattenedNetwork = [...flattenedNetwork, ...node.getWeights()];
            });
            
            flattenedNetwork = [...flattenedNetwork, ...layer.getBias().getWeights()];
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

        // Get all the layers except for the output layer.
        const layers = this.layers.slice(0, this.layers.length - 1);

        // Set the weights of all of the nodes to those given in the flattened network.
        layers.forEach((layer) => {
            layer.getNodes().forEach((node) => {
                const newWeights = _flattenedNetwork.splice(0,node.getWeights().length);
                node.setWeights(newWeights);
            });
            
            layer.getBias().setWeights(_flattenedNetwork.splice(0,layer.getBias().getWeights().length));
        });

        return this;
    }
}

export { EvolvingNetwork };