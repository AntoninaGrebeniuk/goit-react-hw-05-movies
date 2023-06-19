import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 40px;
  display: flex;
`;

export const Input = styled.input`
  padding: 10px 20px;
  width: 300px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  font-size: 16px;
  color: ${p => p.theme.colors.primaryColor};
  background-color: ${p => p.theme.colors.inputBg};
  caret-color: ${p => p.theme.colors.pink};
  border: none;
  box-shadow: ${p => p.theme.shadow.insetShadow};

  transition: box-shadow ${p => p.theme.cubic.cubicBezier};

  &:focus {
    outline: none;
    box-shadow: ${p => p.theme.shadow.insetHoverShadow};
  }

  &::placeholder {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  position: relative;
  padding: 10px;
  font-family: inherit;
  font-size: 16px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  border: none;
  color: ${p => p.theme.colors.white};
  background: linear-gradient(180deg, #0ce39a, #69007f, #fc0987);
  filter: blur(0.3px);
  transform: scale(1);
  cursor: pointer;

  transition: background ${p => p.theme.cubic.cubicBezier},
    transform ${p => p.theme.cubic.cubicBezier};

  &:hover {
    transform: scale(0.98);
    background: linear-gradient(180deg, #fc0987, #69007f, #0ce39a);
  }
`;

export const BtnText = styled.span`
  height: 100%;
  position: relative;
  z-index: 1;
`;
