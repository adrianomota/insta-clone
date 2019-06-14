import React from 'react';

import {
  Container, Section, UserInfo, Place, Actions,
} from './styles';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

function ListFeed() {
  return (
    <>
      <Container>
        <Section>
          <article>
            <header>
              <UserInfo>
                <span>Miguel Mota</span>
                <Place>Rio do Sul</Place>
              </UserInfo>
              <img src={more} alt="Mais" />
            </header>
            <img src="http://localhost:3333/files/miguel.jpg" alt="" />
          </article>

          <footer>
            <Actions>
              <img src={like} alt="Likes" />
              <img src={comment} alt="Likes" />
              <img src={send} alt="Likes" />
            </Actions>
            <strong>1.800 curtidas</strong>
            <p>Secao de fotos do bebe mais lindo do mundo</p>
            <span>#bebemaislindodomundo #miguel #insta</span>
          </footer>

          <article>
            <header>
              <UserInfo>
                <span>Miguel Mota</span>
                <Place>Rio do Sul</Place>
              </UserInfo>

              <img src={more} alt="Mais" />
            </header>
            <img src="http://localhost:3333/files/miguel.jpg" alt="Miguel" />
          </article>

          <footer>
            <Actions>
              <img src={like} alt="Likes" />
              <img src={comment} alt="Likes" />
              <img src={send} alt="Likes" />
            </Actions>
            <strong>1.800 curtidas</strong>
            <p>Secao de fotos do bebe mais lindo do mundo</p>
            <span>#bebemaislindodomundo #miguel #insta</span>
          </footer>
        </Section>
      </Container>
    </>
  );
}

export default ListFeed;
