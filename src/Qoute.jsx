import { Text } from "react-font";
function Quote(){
    return(
        <>
            <div className="bg-black w-full h-[20vh] flex justify-center items-center flex-col gap-4">
                <Text family="Roboto" italic className="text-white text-3xl">
                "It is fatal to enter a war without the will to win it. Live for something rather than die for nothing."
                </Text>
                <Text family="" weight={700} italic className="text-white text-2xl">"The soldier is the Army. No army is better than its soldiers."</Text>
            </div>
        </>
    )
}

export default Quote;

