const base_URL = "http://localhost:3001/blogPosts/"

// GET all 
export const fetchBlogPosts = async () => {
    try {
        const response = await fetch(base_URL)
        if(response.ok){
            const data = await response.json()
            return data
        } else {
            console.log("Fetch blog posts error")
        }
    } catch (error) {
        console.log(error)
    }
}

// GET by id
export const fetchPostById = async (postId) => {
    try {
        const response = await fetch(base_URL+postId)
        if(response.ok){
            const data = await response.json()
            return data
        } else {
            console.log("Fetch post by Id error")
        }
    } catch (error) {
        console.log(error)
    }
}


// POST new one
export const createNewPost = async (content) => {
    try {
        const response = await fetch(base_URL, {
            method: 'POST',
            body: JSON.stringify(content),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.ok){
            const data = await response.json()
            return data
        }
        
    } catch (error) {
        console.log("Create New post error")
    }
}




// PUT update one
//DELETE