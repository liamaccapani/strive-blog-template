import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
// import posts from "../../../data/posts.json";
import { fetchBlogPosts } from "../../../utilities/postsFunctions.js";

// fetch all posts here
export default class BlogList extends Component {
  state = {
    posts: []
  }
  
  getBlogPosts = async () => {
    const blogPosts = await fetchBlogPosts()
    this.setState({ posts: blogPosts})
    console.log("State of BlogList Component: ", this.state)
  }

  componentDidMount = () => {
    this.getBlogPosts()
  }

  render() {
    return (
      <Row>
        {this.state.posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
