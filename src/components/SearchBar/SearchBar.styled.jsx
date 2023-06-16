import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 40px;
  display: flex;
`;

export const Input = styled.input`
  padding: 10px;
  width: 300px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  font-size: 18px;
  color: #111111;

  border: none;

  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px;

  font-weight: 500;
  font-size: 18px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  border: none;
  color: #ffffff;
  background-color: #390464;

  cursor: pointer;

  :hover,
  :focus {
    outline: none;
  }
`;
