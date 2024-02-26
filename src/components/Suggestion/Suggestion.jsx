import SuggestionAuthUser from "./SuggestionAuthUser"
import SuggestionUserContent from "./SuggestionUserContent"

const Suggestion = () => {
  return (
    <div className="text-white text-sm hidden lg:block">
      <SuggestionAuthUser />
      {/* <SuggestionUserContent /> */}
    </div>
  )
}

export default Suggestion