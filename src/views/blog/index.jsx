import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import { withRouter } from "react-router";
import BlogAuthor from "../../components/blog/blog-author";
// import posts from "../../data/posts.json";
import { fetchPostById } from "../../utilities/postsFunctions.js";
import "./styles.css";

// fetch post by id here
class Blog extends Component {
  state = {
    blog: {},
    loading: true,
  };

  componentDidMount() {
    // const { id } = this.props.match.params;
    // console.log(posts);
    // const blog = posts.find((post) => post._id.toString() === id);
    // if (blog) {
    //   this.setState({ blog, loading: false });
    // } else {
    //   this.props.history.push("/404");
    // }
    this.getPostById()
  }
  
  getPostById = async () => {
    const postId  = this.props.match.params.id;
    const blogPost = await fetchPostById(postId)
    console.log("Post Id is: ", postId)
    console.log("Blog Post is: ", blogPost) // undefined --> fixed authorId && postId in error handlers
    this.setState({blog: blogPost, loading: false})
  }

  render() {
    const { loading, blog } = this.state;
    if (loading) {
      return <div>loading</div>;
    } else {
      return (
        <div className="blog-details-root">
          <Container>
            {/* <Image className="blog-details-cover" src={blog.cover} fluid /> */}
            <h1 className="blog-details-title">{blog.title}</h1>

            <div className="blog-details-container">
              <div className="blog-details-author">
                <BlogAuthor {...blog.author} />
              </div>
              <div className="blog-details-info">
                <div>{blog.createdAt}</div>
                <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          </Container>
        </div>
      );
    }
  }
}

export default withRouter(Blog);
