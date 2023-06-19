import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import { IoMdPower } from 'react-icons/io';

export const blink = keyframes`
78% {
    color: inherit;
    text-shadow: inherit;
  }
  79%{
     color: #333;
  }
  80% {
    
    text-shadow: none;
  }
  81% {
    color: inherit;
    text-shadow: inherit;
  }
  82% {
    color: #333;
    text-shadow: none;
  }
  83% {
    color: inherit;
    text-shadow: inherit;
  }
  92% {
    color: #333;
    text-shadow: none;
  }
  92.5% {
    color: inherit;
    text-shadow: inherit;
  }`;

export const LogoBox = styled(Link)`
  display: flex;
  justify-content: baseline;
  align-items: center;
  user-select: none;

  color: #ffeeee;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444,
    0 0 0.1em #ff4444, 0 10px 3px #000;

  font-size: 20px;
`;

export const LogoIcon = styled(IoMdPower)`
  color: #ffeeee;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444,
    0 0 0.1em #ff4444, 0 10px 3px #000;
`;

export const SpanN = styled.span`
  font-size: 20px;
`;
export const SpanM = styled.span`
  font-size: 20px;
`;

export const SpanO = styled.span`
  font-size: 20px;
  animation: ${blink} linear infinite 2s;
`;

export const SpanVi = styled.span`
  font-size: 20px;
`;

export const SpanE = styled.span`
  font-size: 20px;
`;

export const SpanS = styled.span`
  font-size: 20px;
  animation: ${blink} linear infinite 3s;
`;
