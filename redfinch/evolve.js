import { Normalize } from './evolve/Normalize.js';
import { Cross } from './evolve/Cross.js';
import { Mutate } from './evolve/Mutate.js';

class Evolve {
    /**
     * Generates a mutated form of the given agent.
     * @param  {Agent} agent The given agent
     * @return {Array}      The result of mutating the agent, returned in one-dimensional form.
     */
    getMutationOfAgent(agent) {
        if(agent == null) throw "Agent is null";

        return agent.mutate();
    }

    getMutationsOfAgents(agents) {
        return agents.map((agent) => getMutationOfAgent(agent));
    }

    /**
     * Cross the given agents.
     * @param  {Agent} agent1 The first parent agent
     * @param  {Agent} agent2 The second parent agent
     * @return {Array}      The result of crossing the agents, returned in one-dimensional form.
     */
    cross(agent1, agent2) {
        if(agent1 == null) throw "Agent 1 is null";
        if(agent2 == null) throw "Agent 2 is null";
        
        return agent1.cross(agent2);
    }

    /**
     * Normalizes the fitness scores of the given agents.
     * @param  {Array} agents The given agents
     * @param  {Function} algorithm Optional; The normalization algorithm
     */
    normalizeFitnessScore(agents, algorithm=Normalize.default) {
        if(algorithm == null || algorithm==undefined) throw "Invalid algorithm";

        algorithm(agents);
    }
}

export { Evolve, Normalize, Cross, Mutate };