class Normalize {
    default(agents) {
        const squaredSum = squaredSum(agents)

        agents.forEach((agent) => {
            const normalizedFitness = Math.pow(agent.parameters.score, 2) / squaredSum;
            agent.parameters = {...agent.parameters, fitness: normalizedFitness};
        });
    }

    squaredSum(agents) {
        return agents.reduce((prev, curr) => prev + (Math.pow(curr.parameters.score, 2)), 0);
    }
}

export { Normalize };