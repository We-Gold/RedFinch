import { Normalize } from './evolve/Normalize.js';
import { Cross } from './evolve/Cross.js';
import { Mutate } from './evolve/Mutate.js';

class Evolve {
    mutateAgent(agent, parameters) {
        if(agent == null) throw "Agent is null";

        agent.network.setFlattened(agent.mutate(parameters));
    }

    mutateAgents(agents, parameters) {
        if(parameters == null) throw "Parameters are null";

        agents.forEach((agent) => agent.mutate(parameters));
    }

    cross(agent1, agent2, parameters) {
        if(agent1 == null) throw "Agent 1 is null";
        if(agent2 == null) throw "Agent 2 is null";
        
        return agent1.cross(agent2, parameters);
    }

    normalizeFitnessScore(agents, algorithm=Normalize.default) {
        if(algorithm == null || algorithm==undefined) throw "Invalid algorithm";

        algorithm(agents);
    }
}

export { Evolve, Normalize, Cross, Mutate };