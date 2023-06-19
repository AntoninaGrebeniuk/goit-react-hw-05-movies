import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const changeColor = keyframes`
to {
		filter: hue-rotate(1turn);
	}
`;

export const moving = keyframes`
 0% {
		filter: opacity(0);
		transform: rotate(-180deg);
		left: 100%;
	}

	33% {
		filter: opacity(1);
		transform: rotate(0deg);
		left: 60%;
	}

	66% {
		filter: opacity(1);
		transform: rotate(0deg);
		left: 40%;
	}

	100% {
		filter: opacity(0);
		transform: rotate(180deg);
		left: 0;
	}
`;

export const LoadWrap = styled.div`
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #161515;
  overflow: hidden;
`;

export const Load = styled.div`
  color: dodgerblue;
  font-size: 1.5em;
  font-family: sans-serif;
  text-transform: uppercase;
  width: 40em;
  height: 3em;
  animation: ${changeColor} 10s linear infinite;
`;
export const Span1 = styled.span`
  animation: ${moving} 2s linear infinite;
  animation-delay: calc((var(--n) - 10) * 0.2s);
  position: absolute;
  height: 3em;
  --n: 1;
`;
export const Span2 = styled.span`
  animation: ${moving} 2s linear infinite;
  animation-delay: calc((var(--n) - 10) * 0.2s);
  position: absolute;
  height: 3em;
  --n: 2;
`;

export const Span3 = styled.span`
  animation: ${moving} 2s linear infinite;
  animation-delay: calc((var(--n) - 10) * 0.2s);
  position: absolute;
  height: 3em;
  --n: 3;
`;

export const Span4 = styled.span`
  animation: ${moving} 2s linear infinite;
  animation-delay: calc((var(--n) - 10) * 0.2s);
  position: absolute;
  height: 3em;
  --n: 4;
`;

export const Span5 = styled.span`
  animation: ${moving} 2s linear infinite;
  animation-delay: calc((var(--n) - 10) * 0.2s);
  position: absolute;
  height: 3em;
  --n: 5;
`;

export const Span6 = styled.span`
  animation: ${moving} 2s linear infinite;
  animation-delay: calc((var(--n) - 10) * 0.2s);
  position: absolute;
  height: 3em;
  --n: 6;
`;

export const Span7 = styled.span`
  animation: ${moving} 2s linear infinite;
  animation-delay: calc((var(--n) - 10) * 0.2s);
  position: absolute;
  height: 3em;
  --n: 7;
`;
