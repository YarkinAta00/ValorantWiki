import { useEffect, useState } from "react";
import { Card } from 'antd';
import { Link } from "react-router-dom";
import { getAgents } from "../../services/AgentsService"; 
import Loading from "../Loading";
const { Meta } = Card;

export const Duellocu = () => {
    const [agents, setAgents] = useState([]);
   

    const fetchAgentData = async () => {
      try {
        const agentData = await getAgents();
        setAgents(agentData);
      } catch (error) {
        console.error('Error fetching agent data:', error);
      }
    };
  
    useEffect(() => {
      fetchAgentData(); // Call the async function
    }, []);
    
    if (!agents) {
      return<Loading/>
    }
    
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
            {agents.filter(agent => agent.role.displayName === "Düellocu").map((agent) => (
                <Link to={`/agentdetail/${agent.uuid}`} key={agent.uuid}>
                    <Card
                        hoverable
                        style={{
                            width: '100%',
                        }}
                        cover={<img alt={agent.displayName} src={agent.fullPortrait} />}
                    >
                        <Meta title={agent.displayName} description={agent.role.displayName} />
                    </Card>
                </Link>
            ))}
        </div>
    );
  }

export default Duellocu