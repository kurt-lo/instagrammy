export const createPostSlice = (set) =>({
    posts: [],
    createPost: (post) => set(state => ({ posts: [post, ...state.posts] })),
    setPosts: (posts) => set({ posts }),
    deletePost: (id) => set(state => ({ posts: state.posts.filter(post => post.id !== id)})),
})