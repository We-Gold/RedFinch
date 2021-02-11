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

        const layers = this.network.layers.slice(0, this.network.layers.length - 1);

        layers.forEach((layer) => {
            layer.forEach((node) => {
                flattenedNetwork = [...flattenedNetwork, node.weights];
            });
            
            flattenedNetwork = [...flattenedNetwork, layer.bias.weights];
        });

        return flattenedNetwork;
    }

    /**
     * Sets the weights and biases in the network to those in the given flattened network.
     * @param  {Array} flattenedNetwork The flattened network
     * @return {EvolvingNetwork}      Returns itself for chaining.
     */
    setFlattened(flattenedNetwork) {
        let flattenedNetwork = [...flattenedNetwork];

        const layers = this.network.layers.slice(0, this.network.layers.length - 1);

        layers.forEach((layer) => {
            layer.forEach((node) => {
                node.weights = flattenedNetwork.splice(0,node.weights.length);
            });
            
            layer.bias.weights = flattenedNetwork.splice(0,layer.bias.weights.length);
        });

        return this;
    }
}

export { EvolvingNetwork };