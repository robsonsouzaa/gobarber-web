import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

/* quando criar uma interface que não tenha nenhum valor, só formada por outro tipo
deve ser transformada em type */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
