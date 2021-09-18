// POSTS
// GET all 
const base_URL = "http://localhost:3001/blogPosts"
export const fetchBlogPosts = async () => {
    try {
        const response = await fetch(base_URL)
        if(response.ok){
            const data = await response.json()
            return data
        } else {
            console.log("Error error on the wall, what went wrong among them all?")
        }
    } catch (error) {
        console.log(error)
    }
}



// GET by id
// POST new one
// PUT update one
//DELETE