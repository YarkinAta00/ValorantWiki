import { useEffect, useState } from "react"
import { Card, message } from 'antd';
import Loading from "../components/Loading";
import { getWeapons } from "../services/WeaponService";
import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox";

const { Meta } = Card;
const Weapons = () => {
  const [weapon, setWeapon] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    fetchWeapons();
  },);

  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.open({
      type: 'warning',
      content: 'Knife does not have a detailed page.',
    });
  };

  const fetchWeapons = async () => {
    try {
      const weapons = await getWeapons();
      setWeapon(weapons);
      setLoading(false);
    }
    catch (error) {
      console.error('Error fetching weapon data:', error);
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
  }
  const filteredWeapons = weapon.filter((weapon) => {
    return weapon.displayName.toLowerCase().startsWith(searchQuery.toLowerCase());
  });

  return (
    <div className={filteredWeapons.length === 1 || filteredWeapons.length === 2 ? "h-full bg-slate-800 text-center" : "xl:h-full sm:h-full lg:h-full md:h-full bg-slate-800 text-center"}>
      <div className="py-10">
        <h1 className='text-red-700 font-semibold text-7xl text-center ' >WEAPONS</h1>
        <p className="text-white font-medium text-lg py-8">
          These are the current list of all weapons on Valorant. <br />
          If you want to see the detailed information, just click the weapon.
        </p>
      </div>
      {contextHolder}
      <div className="px-4 pb-5 md:px-8 lg:px-16 xl:px-32">
        <h1 className='text-red-700 font-semibold text-7xl text-center ' >WEAPONS</h1>
        <SearchBox searchFor="Search a weapon" onSearch={handleSearch} />
        {
          loading ?
            <Loading /> :

            <div className={filteredWeapons.length === 1 ? "" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5"}>
              {filteredWeapons.map((weapon) => (
                weapon.displayName !== "YAKIN DÖVÜŞ" ?
                  <Link to={`/weapondetail/${weapon.uuid}`} key={weapon.uuid}>
                    <Card
                      onClick={info}
                      hoverable
                      style={{
                        width: '100%',
                      }}
                      cover={<img className="pt-24" alt={weapon.displayName} src={weapon.displayIcon} />}
                    >
                      <Meta title={weapon.displayName} description={weapon.category} />
                    </Card>
                  </Link>

                  :

                  <Card
                    onClick={info}
                    key={weapon.uuid}
                    hoverable
                    style={{
                      width: '100%',
                    }}
                    cover={<img className="pt-24" alt={weapon.displayName} src={weapon.displayIcon} />}
                  >
                    <Meta title={weapon.displayName} description={weapon.category} />
                  </Card>
              ))}
            </div>
        }
      </div>
    </div>
  )
}
export default Weapons
