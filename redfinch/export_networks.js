import { EvolvingNetwork } from './networks/wrappers/EvolvingNetwork.js';
import { VanillaNetwork } from './networks/bases/VanillaNetwork.js';
export * as activation from './networks/activation.js';

export function evolvingNetwork(config) {
    return new EvolvingNetwork(config);
}

export function vanillaNetwork(config) {
    return new VanillaNetwork(config);
}

export { EvolvingNetwork, VanillaNetwork };