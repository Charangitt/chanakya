import { TbHexagonNumber1 } from "react-icons/tb";
import { TbHexagonNumber2 } from "react-icons/tb";
import { TbHexagonNumber3 } from "react-icons/tb";
import { TbHexagonNumber4 } from "react-icons/tb";
import { TbHexagonNumber5 } from "react-icons/tb";
import { TbHexagonNumber6 } from "react-icons/tb";
import { VscDebugStepInto } from "react-icons/vsc";


function Strat(){
    return(
        <>
            <div className="bg-black w-full h-[14vh] border-b-[1px] flex justify-center items-center">
                <h1 className="text-white text-6xl ">Chanakya's Strategic Displayer</h1>
            </div>
            <div className="bg-black w-full h-[86vh] flex justify-center items-center gap-28">
            <div className="h-[650px] w-[700px]  rounded-md">
    <video 
        src="/clip1.mp4" 
        className="rounded-md w-full h-full object-contain" 
        loop 
        autoPlay 
        muted 
    />
</div>

                <div className="flex flex-col gap-5 w-[65vh]">
                    
                    <p className="text-white flex justify-center items-center gap-3"><VscDebugStepInto size={50}/><TbHexagonNumber1 size={50} color="#61DAFB"/><p>
        <span style={{ color: '#98FB98', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Grid Overlay on 3D Map:
        </span>
        {" "} The 3D map view is divided into a grid for precise, cell-based positioning and analysis of the area.
      </p></p>
                    <p className="text-white flex justify-center items-center gap-3"><VscDebugStepInto size={50}/><TbHexagonNumber2 size={50}  color="#61DAFB"/><p>
        <span style={{ color: '#98FB98', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Marking Key Terrain:
        </span>
        {" "} Obstacles and hiding points are marked to highlight strategic areas that influence troop visibility and positioning.
      </p></p>
                    <p className="text-white flex justify-center items-center gap-3"><VscDebugStepInto size={50}/><TbHexagonNumber3 size={50} color="#61DAFB"/><p>
        <span style={{ color: '#98FB98', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Positioning Friendly Forces:
        </span>
        {" "} Allied soldier positions are mapped to show current deployment and support strategy formulation.
      </p></p>
                    <p className="text-white flex justify-center items-center gap-3"><VscDebugStepInto size={50}/><TbHexagonNumber4 size={50} color="#61DAFB"/><p>
        <span style={{ color: '#98FB98', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Real-Time Enemy Tracking:
        </span>
        {" "}Enemy movements are continuously updated using data from the Rustom 2 drone, displayed live on the map.
      </p></p>
                    <p className="text-white flex justify-center items-center gap-3"><VscDebugStepInto size={50}/><TbHexagonNumber5 size={50} color="#61DAFB"/><p>
        <span style={{ color: '#98FB98', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Dynamic Positioning Suggestions:
        </span>
        {" "} Soldier positions are adjusted in real-time based on enemy activity, enabling rapid strategic responses.
      </p></p>
                    <p className="text-white flex justify-center items-center gap-3 mt-3"><TbHexagonNumber6 size={55} color="#61DAFB"/><p>
        <span style={{ color: '#32CD32', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Scout Confirmation and Communication:
        </span>
        {" "} A scout verifies predictions and relays tactical updates to soldiers, ensuring coordinated, timely action on the ground.
      </p></p>
                </div>
            </div>
        </>
    )
}

export default Strat;