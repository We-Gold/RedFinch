class Cross {
    random(agent1, agent2) {
        if(agent1 == null) throw "Agent 1 is null";
        if(agent2 == null) throw "Agent 2 is null";

        let childFlatNetwork = [];

        const agent2FlattenedNetwork = agent2.network.flatten();

        agent1.network.flatten().forEach((gene, index) => {
            if(Math.random() < 0.5) childFlatNetwork.push(gene);
            else childFlatNetwork.push(agent2FlattenedNetwork[index]);
        });

        return childFlatNetwork;
    }
}