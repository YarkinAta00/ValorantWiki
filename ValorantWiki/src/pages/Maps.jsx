import { useEffect, useState } from "react"
import { Card } from 'antd';
import Loading from "../components/Loading";
import { getMaps } from "../services/MapsService";
import { Link } from "react-router-dom";
const { Meta } = Card;
import SearchBox from "../components/SearchBox";

const Maps = () => {
  const [maps, setMaps] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("");
 
  useEffect(() => {
    fetchMaps();
  },);

  const fetchMaps = async () => {
    try {
      const map = await getMaps();
      setMaps(map);
      setLoading(false)
    }
    catch (error) {
      console.error('Error fetching agent data:', error);
    }
  }
  const handleSearch = (query) => {
    setSearchQuery(query);
  }

   // Filter maps based on the search query
   const filteredMaps = maps.filter((map) => {
    return map.displayName.toLowerCase().startsWith(searchQuery.toLowerCase());
  });

  return (
    <div className={filteredMaps.length===1 || filteredMaps.length===2 ? "h-screen bg-slate-800 text-center"  :"xl:h-full sm:h-full lg:h-full md:h-full bg-slate-800 text-center"}>
      <div className="py-10">
        <h1 className='text-red-700 font-semibold text-7xl text-center ' >MAPS</h1>
        <p className="text-white font-medium text-lg py-8">
          These are the current list of all maps on Valorant. <br />
          If you want to see the detailed information, just click the map.
        </p>
      </div>
      <div className="px-4 pb-5 md:px-8 lg:px-16 xl:px-32">
      <SearchBox searchFor="Search a map" onSearch={handleSearch} />
        {
          loading ?
            <Loading /> :
            <div className= {filteredMaps.length===1  ? ""  :"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 mt-5"}>
              {filteredMaps.map((maps) => (
                <Link to={`/mapdetail/${maps.uuid}`} key={maps.uuid}>
                  <Card
                    key={maps.uuid}
                    hoverable
                    style={{
                      width: '100%',
                    }}
                    cover={<img alt={maps.displayName} src={maps.listViewIcon} />}
                  >
                    <Meta title={maps.displayName} />
                  </Card>
                </Link>
              ))}
            </div>
        }
      </div>
    </div>


  )
}

export default Maps