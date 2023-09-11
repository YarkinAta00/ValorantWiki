import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWeaponbyId } from "../../services/WeaponService";
import Loading from "../../components/Loading";


const WeaponDetails = () => {
    const { id } = useParams();
    const [weaponDetails, setWeaponDetails] = useState(null);


    const fetchWeaponInfo = async () => {
        try {
            const weaponData = await getWeaponbyId(id);
            setWeaponDetails(weaponData);
        } catch (error) {
            console.error('Error fetching weapon data:', error);
        }
    };
   
    useEffect(() => {
        fetchWeaponInfo();
    },)
    return (
        <div>
            {
                weaponDetails ?
                    <div className="bg-slate-800 min-h-screen">
                        <h1 className="text-3xl md:text-5xl font-bold text-center pt-5 text-white">{weaponDetails.displayName}</h1>
                        <div className="flex flex-col justify-center items-center pt-10 px-4 md:px-8 lg:px-16 xl:px-32">
                            <img className="pt-10" src={weaponDetails.displayIcon} alt={weaponDetails.displayName} />
                            {
                                    <div className="pt-10 flex flex-col justify-center items-center">
                                        <p className="text-white">Shop Category: {weaponDetails.shopData.categoryText} </p>
                                        <p className="text-white">Fire Rate: {weaponDetails.weaponStats.fireRate}</p>
                                        <p className="text-white">Maganize Size: {weaponDetails.weaponStats.magazineSize}</p>
                                        <p className="text-white">Relode Time (Second): {weaponDetails.weaponStats.reloadTimeSeconds}</p>
                                        <p className="text-white">Cost: {weaponDetails.shopData.cost}</p>

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

export default WeaponDetails