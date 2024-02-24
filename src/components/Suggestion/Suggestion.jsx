import SuggestionAuthUser from "./SuggestionAuthUser"
import SuggestionUsers from "./SuggestionUsers"

const Suggestion = () => {
  return (
    <div className="text-white text-sm hidden lg:block">
      <SuggestionAuthUser />
      <SuggestionUsers />
    </div>
  )
}

export default Suggestion