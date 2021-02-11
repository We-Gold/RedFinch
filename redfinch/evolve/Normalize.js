class Normalize {
    default(agents) {
        const squaredSum = squaredSum(agents)

        agents.forEach((agent) => {
            const normalizedFitnessScore = Math.pow(agent.fitness.score, 2) / squaredSum;
            agent.fitness = {...agent.fitness, normalized: normalizedFitnessScore};
        });
    }

    squaredSum(agents) {
        return agents.reduce((prev, curr) => prev + (Math.pow(curr.fitness.score, 2)), 0);
    }
}

export { Normalize };