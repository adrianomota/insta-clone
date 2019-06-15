import React, { Component } from 'react';
import { Redirect } from 'react-router';

import api from '../../services/api';

import { Container, FormPost } from './styles';

class NewFeed extends Component {
  state = {
    image: '',
    author: '',
    description: '',
    place: '',
    hashtags: '',
    redirect: false,
  };

  handleSubmit = async e => {
    e.preventDefault();

    const newData = new FormData();

    newData.append('image', this.state.image);
    newData.append('author', this.state.author);
    newData.append('place', this.state.place);
    newData.append('description', this.state.description);
    newData.append('hashtags', this.state.hashtags);

    await api.post('/post/me', newData);
    this.setState({ redirect: true });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };
  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <Container>
          <FormPost onSubmit={this.handleSubmit}>
            <input type="file" onChange={this.handleImageChange} />
            <input
              type="text"
              name="author"
              placeholder="Autor post"
              onChange={this.handleChange}
              value={this.state.author}
            />
            <input
              type="text"
              name="place"
              placeholder="Local do post"
              onChange={this.handleChange}
              value={this.state.place}
            />
            <input
              type="text"
              name="description"
              placeholder="Descricao"
              onChange={this.handleChange}
              value={this.state.description}
            />
            <input
              type="text"
              name="hashtags"
              placeholder="Hastags post"
              onChange={this.handleChange}
              value={this.state.hashtags}
            />
            <button type="submit">Enviar</button>
          </FormPost>
        </Container>
      </>
    );
  }
}

export default NewFeed;
