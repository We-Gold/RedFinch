import { EvolvingNetwork } from './networks/wrappers/EvolvingNetwork.js';
import { EvolvingTFNetwork } from './networks/wrappers/EvolvingTFNetwork.js';
import { VanillaNetwork } from './networks/bases/VanillaNetwork.js';
import { TensorflowSequentialNetwork } from './networks/bases/TensorflowSequentialNetwork.js'
export * as activation from './networks/activation.js';

export function evolvingNetwork(config) {
    return new EvolvingNetwork(config);
}

export function vanillaNetwork(config) {
    return new VanillaNetwork(config);
}

export function tensorflowSequentialNetwork(model) {
    return new TensorflowSequentialNetwork(model);
}

export function evolvingTFNetwork(model) {
    return new EvolvingTFNetwork(model);
}

export { EvolvingNetwork, VanillaNetwork, TensorflowSequentialNetwork, EvolvingTFNetwork };