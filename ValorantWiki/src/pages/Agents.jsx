import Duellocu from "../components/AgentCards/Duellocu"
import Gozculer from "../components/AgentCards/Gözcüler"
import { KontrolUzmanı } from "../components/AgentCards/KontrolUzmanı"
import Onculer from "../components/AgentCards/Onculer"
import SearchBox from "../components/SearchBox"
const Agents = () => {
  return (
    <div className="w-full h-full bg-slate-800 text-center">
      <div className="py-10">
        <h1 className='text-red-700 font-semibold text-7xl text-center ' >AGENTS</h1>
        <p className="text-white font-medium text-lg py-8">
          These are the current list of all playable agents on Valorant. <br />
          If you want to see the detailed information, just click the agent.
        </p>
        <SearchBox searchFor="Search an agent" />
      </div>
      
      <div className="px-4 md:px-8 lg:px-16 xl:px-32">
        <h1 className='text-red-700 font-semibold text-7xl text-center ' >GÖZCÜLER</h1>
        <Gozculer />
      </div>

      <div className="px-4 pt-20 md:px-8 lg:px-16 xl:px-32">
        <h1 className='text-red-700 font-semibold text-7xl text-center ' >ÖNCÜLER</h1>
        <Onculer />
      </div>

      <div className="px-4 pt-20 md:px-8 lg:px-16 xl:px-32">
        <h1 className='text-red-700 font-semibold text-7xl text-center ' >KONTROL UZMANI</h1>
        <KontrolUzmanı />
      </div>

      <div className="px-4 pb-5 pt-20 md:px-8 lg:px-16 xl:px-32">
        <h1 className='text-red-700 font-semibold text-7xl text-center ' >DÜELLOCULAR</h1>
        <Duellocu />
      </div>

    </div>
  )
}

export default Agents