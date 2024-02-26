import SuggestionUsers from "./SuggestionUsers";

export default function SuggestionUserContent() {
    return (
        <>
            <div className="pt-[2rem]">
                <div className="flex justify-between">
                    <span className="text-gray-500 font-[600]">Suggested for you</span>
                    <span>See All</span>
                </div>
                <SuggestionUsers />
                <div className="pt-[1rem] text-gray-500 text-[12px]">
                    <span>© 2024 INSTAGRAM FROM META</span>
                </div>
            </div>
        </>
    )
}
