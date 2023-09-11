import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMapsById } from "../../services/MapsService"
import Loading from "../../components/Loading"

const MapsDetails = () => {
    const { id } = useParams()
    const [maps, setMaps] = useState(null)

    const fetchMapsById = async () => {
        try {
            const mapsData = await getMapsById(id)
            setMaps(mapsData)
        }
        catch (error) {
            console.error('Error fetching maps data:', error);
        }
    }

    useEffect(() => {
        fetchMapsById()
    },)


    return (
        <div>
            {
                maps ?
                    <div className="bg-slate-800 min-h-screen">
                        <h1 className="text-3xl md:text-5xl font-bold text-center pt-5 text-white">{maps.displayName}</h1>
                        <div className="flex flex-col justify-center items-center pt-10 px-4 md:px-8 lg:px-16 xl:px-32">
                            <img className="pt-10" src={maps.displayIcon} alt={maps.displayName} />
                            {
                                <div className="pt-10 pb-48 flex flex-col justify-center items-center">
                                    <p className="text-white text-lg">Narative Description: {maps.narrativeDescription} </p>
                                    <p className="text-white text-lg pt-5">Tactical Description: {maps.tacticalDescription}</p>
                                    <p className="text-white text-lg pt-5">Coordinates: {maps.coordinates}</p>
                                </div>
                            }
                        </div>
                    </div>
                    :
                    <Loading />
            }
        </div>
    )

}

export default MapsDetails