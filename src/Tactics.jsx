import { CgArrowsExchange } from "react-icons/cg";

function Tactics() {
  return (
    <>
      <div className="bg-black w-full h-[10vh]">
        <h1 className="select-none   text-white lg:text-7xl md:text sm:text-3xl ml-5 underline decoration-teal-100">Chanakya: Transforming Military Tactics</h1>
      </div>

      <div className="bg-black w-full lg:h-[80vh]  flex justify-evenly items-center">
        <div className="w-96 h-96 bg-white rounded-md transform transition-transform duration-300 hover:scale-105">
          <img className="w-full h-96 object-contain rounded-md" src="/img.png" alt="Logo" />
        </div>
      <div/>
        <div className="w-[58vh]">
          <div className="text-white">
            <div className="flex items-center w-full mb-4">
              <div className="mr-4 inline-block">
                <CgArrowsExchange color="yellow" className="text-white" size={24} />
              </div>
              <span>Our project <span className="text-green-600 font-semibold text-xl">Chanakya</span> is designed to empower military strategies by integrating <span>real-time intelligence</span> with <span>advanced geographic visualization.</span></span>
            </div>
            <div className="flex items-center w-full mb-4">
              <div className="mr-4 inline-block">
                <CgArrowsExchange color="yellow" className="text-white" size={24} />
              </div>
              <span>By leveraging the <span className="text-indigo-600 text-lg font-semibold">Advanced Military UAVs</span> for real-time enemy data gathering, Chanakya provides critical, live insights on enemy positions and movements.</span>
            </div>
            <div className="flex items-center w-full mb-4">
              <div className="mr-4 inline-block">
                <CgArrowsExchange color="yellow" className="text-white" size={24} />
              </div>
              <span>This data is then combined with GIS ( <span className="text-purple-400 text-lg font-semibold">Geographic Information System</span> ) technology to create highly detailed 3D map representations, allowing users to visualize terrain, elevation, and environmental factors comprehensively.</span>
            </div>
            <div className="flex items-center w-full">
              <div className="mr-4 inline-block">
                <CgArrowsExchange color="yellow" className="text-white" size={24} />
              </div>
              <span className="text-slate-300 text-[17px]"><br />By seamlessly integrating real-time data with advanced geographic intelligence, Chanakya empowers military leaders with a powerful tool for strategic planning and effective situational control.</span>
            </div>
          </div>
        </div>

        <div className="w-96 h-96 bg-white rounded-md shadow-2xl transform transition-transform duration-300 hover:scale-105 overflow-hidden">
          <img className="w-full h-96 object-contain left-5" src="/gis.png" alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default Tactics;
