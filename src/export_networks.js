import { EvolvingNetwork } from './networks/wrappers/EvolvingNetwork.js';
import { SequentialNetwork } from './networks/bases/SequentialNetwork.js'
export * as activation from './networks/activation.js';


/**
 * Returns an instance of SequentialNetwork.
 * @param {tf.Sequential} model 
 */
export function sequentialNetwork(model) {
    return new SequentialNetwork(model);
}

/**
 * Returns an instance of EvolvingNetwork.
 * @param {tf.Sequential} model 
 */
export function evolvingNetwork(model) {
    return new EvolvingNetwork(model);
}

export { SequentialNetwork, EvolvingNetwork };