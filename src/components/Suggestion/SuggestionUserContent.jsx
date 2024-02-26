import useFetchSuggestedUsers from "../hooks/useFetchSuggestedUsers";
import useSearchUser from "../hooks/useSearchUser";
import SuggestionUsers from "./SuggestionUsers";

export default function SuggestionUserContent() {
    const { suggestedUsers, isLoading } = useFetchSuggestedUsers();
    const { setSearchUser } = useSearchUser();

    // optional: render loading skeleton
    if (isLoading) return null;

    return (
        <>
            <div className="pt-[2rem]">
                <div className="flex justify-between">
                    <span className="text-gray-500 font-[600]">Suggested for you</span>
                    <span>See All</span>
                </div>
                {suggestedUsers.map((user) => (
                    <SuggestionUsers key={user.uid} searchUser={user} setSearchUser={setSearchUser} userColor='white' />
                ))}
                <div className="pt-[1rem] text-gray-500 text-[12px]">
                    <span>© 2024 INSTAGRAM FROM META</span>
                </div>
            </div>
        </>
    );
}
