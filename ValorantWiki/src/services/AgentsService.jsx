import axios from "axios";

export const getAgents = async () => {
  try {
    const response = await axios.get("https://valorant-api.com/v1/agents?language=tr-TR");
    const agentData = response.data.data.filter(agent => agent.isPlayableCharacter);
    return agentData;
  } catch (error) {
    console.error('Error fetching agent data:', error);
    throw error;
  }
};

export const getAgentbyId = async (uuid) => {
  try {
    const response = await axios.get(`https://valorant-api.com/v1/agents/${uuid}?language=tr-TR`);
    const agentData = response.data.data;
    return agentData;
  } catch (error) {
    console.error('Error fetching agent data:', error);
    throw error;
  }
};

 export const getAbilities = async (uuid) => {
  try{
    const response = await axios.get(`https://valorant-api.com/v1/agents/${uuid}?language=tr-TR`);
    const abilities = response.data.data.abilities;
    return abilities;
  }
  catch(error){
    console.error('Error fetching agent data:', error);
    throw error;
  }
};
