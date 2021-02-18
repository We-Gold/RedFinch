import { EvolvingNetwork } from './networks/wrappers/EvolvingNetwork.js';
import { EvolvingTFNetwork } from './networks/wrappers/EvolvingTFNetwork.js';
import { VanillaNetwork } from './networks/bases/VanillaNetwork.js';
import { TensorflowSequentialNetwork } from './networks/bases/TensorflowSequentialNetwork.js'
export * as activation from './networks/activation.js';

/**
 * Returns an instance of EvolvingNetwork.
 * @param {Object} config The network configuration
 */
export function evolvingNetwork(config) {
    return new EvolvingNetwork(config);
}

/**
 * Returns an instance of VanillaNetwork.
 * @param {Object} config The network configuration
 */
export function vanillaNetwork(config) {
    return new VanillaNetwork(config);
}

/**
 * Returns an instance of TensorflowSequentialNetwork.
 * @param {tf.Sequential} model 
 */
export function tensorflowSequentialNetwork(model) {
    return new TensorflowSequentialNetwork(model);
}

/**
 * Returns an instance of EvolvingTFNetwork.
 * @param {tf.Sequential} model 
 */
export function evolvingTFNetwork(model) {
    return new EvolvingTFNetwork(model);
}

export { EvolvingNetwork, VanillaNetwork, TensorflowSequentialNetwork, EvolvingTFNetwork };