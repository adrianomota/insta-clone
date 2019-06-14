import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px; /*nas laterais*/

  article {
    background: #fff;
    border: 1px solid #ddd;
    margin-top: 30px;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
    }

    & > img {
      width: 100%;
    }
  }

  footer {
    padding: 20px;

    p {
      font-size: 13px;
      margin-top: 2px;
      line-height: 18px;
    }

    span {
      color: #7159c1;
      display: block;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 13px;
  }
`;

export const Place = styled.span`
  font-size: 11px;
  color: #666;
  margin-top: 3px;
`;

export const Actions = styled.div`
  margin-bottom: 10px;
  img {
    height: 20px;
    margin-right: 10px;
  }
`;
