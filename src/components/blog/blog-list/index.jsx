import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
// import posts from "../../../data/posts.json";
import { fetchBlogPosts } from "../../utilities/functions";

// fetch all posts here
export default class BlogList extends Component {
  state = {
    posts: []
  }
  
  getBlogPosts = async () => {
    const blogPosts = await fetchBlogPosts()
    // fill state with fetched posts
    this.setState()
  }

  componentDidMount = () => {
    this.getBlogPosts()
  }

  render() {
    return (
      <Row>
        {posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
