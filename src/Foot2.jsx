import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Foot2(){
    return(
        <>
            <div className="bg-black w-full h-[40vh]  flex justify-center items-center gap-14">
                
            <IoArrowBackCircleOutline color="white" size={45}/>
                <img className="w-36 rounded-md" src="drdo.jpg" alt="" />
                <img className="w-36 rounded-md" src="army.jpg" alt="" />
                <img className="w-36 rounded-md" src="dni.png" alt="" />
                <img className="w-36 rounded-md" src="cair.jpg" alt="" />
                <img className="w-36 rounded-md" src="nga.jpg" alt="" />
                <IoArrowForwardCircleOutline color="white" size={45}/>
            </div>

        </>
    )
}

export default Foot2;