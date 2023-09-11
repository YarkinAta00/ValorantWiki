import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAgentbyId, getAbilities } from "../../services/AgentsService";
import Loading from "../../components/Loading";

const AgentDetails = () => {
    const { id } = useParams();
    const [result, setResult] = useState(null)
    const [abilities, setAbilities] = useState([])

    const fetchAgentById = async () => {
        try {
            const agentData = await getAgentbyId(id);
            setResult(agentData)
        }
        catch (error) {
            console.error('Error fetching agent data:', error);
        }
    };
    const fetchAgentAbilities = async () => {
        try {
            const abilitiesData = await getAbilities(id);
            setAbilities(abilitiesData);
        } catch (error) {
            console.error('Error fetching agent abilities:', error);
        }
    };
    useEffect(() => {
        fetchAgentById();
        fetchAgentAbilities();
    },)

    if (!result) {
        return <Loading />
    }

    const { displayName, fullPortrait, description, role } = result;

    return (
        <div className="bg-slate-800 min-h-screen">
            <h1 className="text-3xl md:text-5xl font-bold text-center pt-5 text-white">{displayName}</h1>
            <div className="flex flex-col justify-center items-center py-5 px-4 md:px-8 lg:px-16 xl:px-32">

                <div className="md:w-4/5 md:pb-10 lg:w-4/5 xl:w-3/5 flex justify-center ">
                    <img width={1000} src={fullPortrait} alt={displayName} />
                </div>

                <div className="sm:w-4/6 md:w-1/2 lg:w-3/4 xl:w-4/5 md:pl-8">
                    <div className="mt-5 md:mt-0">
                        <h3 className="text-2xl text-white mb-2">Description</h3>
                        <p className="text-white pr-4 pl-10 md:pr-0">{description}</p>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-2xl text-white mb-2">Role</h3>
                        <h4 className="text-xl text-white mb-2 pl-4">{role.displayName}</h4>
                        <p className="text-white pl-10 pr-4 md:pr-0">{role.description}</p>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-2xl text-white mb-2">Abilities</h3>
                        {abilities.length > 0 ? (
                            <ul>
                                {abilities.map((ability) => (
                                    <li className="mb-3" key={ability.uuid}>
                                        <h3 className="font-semibold text-white pl-4">{ability.displayName}</h3>
                                        <p className="text-white pl-10">{ability.description}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-white">No abilities found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentDetails;
