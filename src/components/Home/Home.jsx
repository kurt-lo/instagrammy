import NewsFeedPosts from "../NewsFeed/NewsFeedPosts"
import Suggestion from "../Suggestion/Suggestion"

const Home = () => {
  return (
    <div className="flex-1 flex xl:gap-[4rem] 2xl:gap-[10rem] justify-center">
      <NewsFeedPosts />
      <Suggestion />
    </div>
  )
}

export default Home