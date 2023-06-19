import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  color: ${p => p.theme.colors.lightGrey};
`;

export const CastItem = styled.li`
  position: relative;
  flex-basis: calc((100% - 180px) / 7);
  border-radius: 15px;
  transform: scale(1);
  transition: transform ${p => p.theme.cubic.cubicBezier};

  &:hover {
    transform: scale(1.05);
  }

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: ${p => p.theme.colors.white};
    z-index: -1px;
  }

  &:after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: ${p => p.theme.colors.white};
    z-index: -2px;
    /* filter: blur(5px); */
    transition: filter ${p => p.theme.cubic.cubicBezier};
  }

  &:hover::after {
    filter: blur(10px);
  }

  &:before,
  &:after {
    border-radius: ${p => p.theme.border.radius};
    z-index: -10;
    background: ${p => p.theme.gradient.bgLinearGradient};
  }
`;

export const ImgBox = styled.div`
  height: 220px;
  overflow: hidden;
  border-top-left-radius: ${p => p.theme.border.radius};
  border-top-right-radius: ${p => p.theme.border.radius};
`;

export const ImgCast = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.08);

  transition: transform ${p => p.theme.cubic.cubicBezier};

  &:hover {
    transform: scale(1);
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 105px;
  gap: 5px;

  background-color: #1a1919;
  border-bottom-left-radius: ${p => p.theme.border.radius};
  border-bottom-right-radius: ${p => p.theme.border.radius};
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: ${p => p.theme.colors.white};
`;

export const Character = styled.p`
  font-size: 16px;
  color: ${p => p.theme.colors.lightGreen};
`;

export const CharacterName = styled.p`
  text-align: center;
  font-size: 14px;
`;
