import { useEffect } from 'react';
import { GoCopilot } from "react-icons/go";
import { GiSwordman, GiPathDistance, GiStoneWall } from "react-icons/gi";
import gsap from "gsap";
import PathF from './PathF';


const InfoCard = ({ icon: Icon, color, label, marginLeft, index }) => (
    <div className={`flex gap-3 justify-center items-center ${marginLeft}`}>
        <Icon color="white" size={30} id={`icon-${index}`} className="opacity-0" />
        <div className="bg-white w-10 h-5 flex justify-center items-center">
            <div className={`${color} m-1 w-8 h-4`}></div>
        </div>
        <p className="text-white text-2xl">{label}</p>
    </div>
);

function Arena() {
    useEffect(() => {
        const icons = document.querySelectorAll("[id^='icon-']");
        icons.forEach((icon, index) => {
            gsap.to(icon, {
                opacity: 1,
                duration: 1,
                delay: index * 0.2 
            });
        });
    }, []);

    return (
        <>
            <div className="border-b-2 bg-black w-full h-[16vh] flex justify-center items-center text-white text-8xl">
                BATTLEFIELD
            </div>
            <div className="bg-black w-full h-[7vh] flex justify-around items-center">
                <div className="flex justify-between items-center w-full">
                    <InfoCard icon={GiStoneWall} color="bg-black" label="Hiding Point" marginLeft="ml-32" index={0} />
                    <InfoCard icon={GiSwordman} color="bg-red-700" label="Enemy" marginLeft="mr-52" index={1} />
                </div>
            </div>
            <div className="bg-black w-full h-[7vh] flex justify-around items-center">
                <div className="flex justify-between items-center w-full">
                    <InfoCard icon={GoCopilot} color="bg-blue-800" label="Soldier" marginLeft="ml-32" index={2} />
                    <InfoCard icon={GiPathDistance} color="bg-green-400" label="Safe Path" marginLeft="mr-44" index={3} />
                </div>
            </div>
            {/* <div className="w-full h-screen bg-black"></div> */}
    
            
        </>
    );
}

export default Arena;
