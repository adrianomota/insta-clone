import React from 'react';
import io from 'socket.io-client';

import { Container, Section, UserInfo, Place, Actions } from './styles';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';
import api from '../../services/api';
import socketUrl from '../../services/socket';

class ListFeed extends React.Component {
  state = {
    feeds: [],
  };

  async componentDidMount() {
    this.registerToSocket();

    const { data } = await api.get('/posts/me');

    this.setState({ feeds: data });
  }

  registerToSocket = () => {
    const socket = io(socketUrl);

    socket.on('post', newPost => {
      this.setState({ feeds: [newPost, ...this.state.feeds] });
    });

    socket.on('like', likedPost => {
      this.setState({
        feeds: this.state.feeds.map(post => (post._id === likedPost._id ? likedPost : post)),
      });
    });
  };
  handleLike = async id => {
    await api.post(`/post/${id}/like`);
  };

  render() {
    return (
      <>
        <Container>
          <Section>
            {this.state.feeds.map(post => (
              <article key={post._id}>
                <header>
                  <UserInfo>
                    <span>{post.author}</span>
                    <Place>{post.place}</Place>
                  </UserInfo>

                  <img src={more} alt="Mais" />
                </header>
                <img src={`http://localhost:3333/files/${post.image}`} alt={post.image} />
                <footer>
                  <Actions>
                    <button type="button" onClick={() => this.handleLike(post._id)}>
                      <img src={like} alt="Likes" />
                    </button>
                    <button>
                      <img src={comment} alt="Likes" />
                    </button>
                    <button>
                      <img src={send} alt="Likes" />
                    </button>
                  </Actions>
                  <strong>{post.likes} curtidas</strong>
                  <p>{post.description}</p>
                  <span>{post.hashtags}</span>
                </footer>
              </article>
            ))}
          </Section>
        </Container>
      </>
    );
  }
}

export default ListFeed;
