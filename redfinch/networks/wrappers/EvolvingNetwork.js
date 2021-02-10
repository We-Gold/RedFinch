import { VanillaNetwork } from "../bases/VanillaNetwork.js";

class EvolvingNetwork extends VanillaNetwork {
    constructor(config) {
        super(config);
    }

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