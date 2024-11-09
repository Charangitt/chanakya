    import { TbHexagonNumber1 } from "react-icons/tb";
    import { TbHexagonNumber2 } from "react-icons/tb";
    import { TbHexagonNumber3 } from "react-icons/tb";
    import { TbHexagonNumber4 } from "react-icons/tb";
    import { TbHexagonNumber5 } from "react-icons/tb";
    import { TbHexagonNumber6 } from "react-icons/tb";
    import { VscDebugStepInto } from "react-icons/vsc";

    function Path(){
        return(
            <>
                <div className="bg-black w-full h-[14vh] border-b-[1px] flex justify-center items-center">
                    <h1 className="text-white text-7xl">Chanakya's Path Displayer</h1>
                </div>
                <div className="bg-black w-full h-[86vh] flex justify-center items-center gap-28">
                <div className="flex flex-col gap-5 w-[65vh]">
                        
                        <p className="text-white flex justify-center items-center gap-3"><VscDebugStepInto size={50}/><TbHexagonNumber1 size={50} color="#61DAFB"/><p>
            <span style={{ color: '#98FB98', fontSize: '1.1rem', fontWeight: 'bold' }}>
            Ongoing Battle Simulation:
            </span>
            {" "} The tactical displayer by Chanakya visualizes the ongoing battle, showing how friendly and enemy forces are positioned and moving.
        </p></p>
                        <p className="text-white flex justify-center items-center gap-3"><VscDebugStepInto size={50}/><TbHexagonNumber2 size={50}  color="#61DAFB"/><p>
            <span style={{ color: '#98FB98', fontSize: '1.1rem', fontWeight: 'bold' }}>
            Advance as Enemy Intensity Decreases:
            </span>
            {" "}As the pressure from the enemy decreases, our soldiers can safely move forward into the area.
        </p></p>
                        <p className="text-white flex justify-center items-center gap-3"><VscDebugStepInto size={50}/><TbHexagonNumber3 size={50} color="#61DAFB"/><p>
            <span style={{ color: '#98FB98', fontSize: '1.1rem', fontWeight: 'bold' }}>
            ML Model Suggests Path:
            </span>
            {" "}Chanakya's machine learning model analyzes the situation and recommends the safest and shortest route for our soldiers to take.
        </p></p>
                        <p className="text-white flex justify-center items-center gap-3"><VscDebugStepInto size={50}/><TbHexagonNumber4 size={50} color="#61DAFB"/><p>
            <span style={{ color: '#98FB98', fontSize: '1.1rem', fontWeight: 'bold' }}>
            Adjusting for Higher Enemy Intensity:
            </span>
            {" "}If there's a spike in enemy activity on one side, the model will suggest an alternative path that avoids the danger.


        </p></p>
                        <p className="text-white flex justify-center items-center gap-3"><VscDebugStepInto size={50}/><TbHexagonNumber5 size={50} color="#61DAFB"/><p>
            <span style={{ color: '#98FB98', fontSize: '1.1rem', fontWeight: 'bold' }}>
            Retreat When Outnumbered: 
            </span>
            {" "}If the enemy forces are more than double our own, the model will recommend a backward retreat path to ensure the safety of our soldiers.
        </p></p>
                        <p className="text-white flex justify-center items-center gap-3 mt-3"><TbHexagonNumber6 size={55} color="#61DAFB"/><p>
            <span style={{ color: '#32CD32', fontSize: '1.1rem', fontWeight: 'bold' }}>
            Scout Confirmation and Communication:
            </span>
            {" "} A scout verifies predictions and relays tactical updates to soldiers, ensuring coordinated, timely action on the ground.
        </p></p>
                    </div>
                    <div className="h-[650px] w-[700px]  rounded-md">
    <video 
        src="/clip6.mp4" 
        className="rounded-md w-full h-full object-contain" 
        loop 
        autoPlay 
        muted 
    /></div>
                    
                </div>
            </>
        )
    }

    export default Path;