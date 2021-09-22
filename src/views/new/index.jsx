import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
import { createNewPost } from "../../utilities/postsFunctions";

// create new post
export default class NewBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", title: "", category: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  addNewPost = async (e) => {
    e.preventDefault();
    const contentData = {
      category: this.state.category,
      title: this.state.category,
      cover: "",
      readTime: {
        value: 0,
        unit: "minute",
      },
      author: {
        name: "Lia",
        avatar: ""
      },
      content: this.state.text
    }
    await createNewPost(contentData);
  };

  render() {
    return (
      <Container className="new-blog-container">
        <Form className="mt-5" onSubmit={this.addNewPost}>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control size="lg" placeholder="Title" onChange={(e)=>this.handleChange({title: e.target.value})} />
          </Form.Group>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control size="lg" as="select" onChange={(e)=>this.handleChange({category: e.target.value})}>
              <option>Category1</option>
              <option>Category2</option>
              <option>Category3</option>
              <option>Category4</option>
              <option>Category5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="blog-content" className="mt-3">
            <Form.Label>Blog Content</Form.Label>
            <ReactQuill
              value={this.state.text}
              onChange={this.handleChange}
              className="new-blog-content"
              
            />
          </Form.Group>
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
