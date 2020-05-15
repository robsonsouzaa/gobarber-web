import styled from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh; /* sempre assumir 100% da tela de visão que o usuário tem, total da altura */

  display: flex;
  align-items: stretch; /* os itens dentro do container tb terão o valor total da tela */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center; /* coloca os elementos centralizados */

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
  }

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }

  /* vai pegar apenas os links que estão dentro do Content, não entra nos sub-níveis,
  dentro do <form> por exemplo */
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 15px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1; /* ocupar todo o espaço, menos os 700px */
  background: url(${signInBackground}) no-repeat center;
  background-size: cover; /* garantir que a imagem vai preencher todo o conteúdo */
`;
