import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

/* quando criar uma interface que não tenha nenhum valor, só formada por outro tipo
deve ser transformada em type */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
