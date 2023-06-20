import styled from '@emotion/styled';

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  color: ${p => p.theme.colors.white};
`;

export const CardItem = styled.li`
  position: relative;
  flex-basis: calc((100% - 120px) / 5);
  border: none;
  border-radius: 15px;
  transform: scale(1);
  cursor: pointer;

  transition: transform ${p => p.theme.cubic.cubicBezier};

  &:hover {
    transform: scale(1.02);
  }
`;

export const ImgWrap = styled.div`
  position: relative;

  margin-bottom: 10px;
  height: 400px;
  overflow: hidden;

  border-radius: ${p => p.theme.border.radius};

  &::before {
    content: '';
    position: absolute;
    top: 361px;
    right: -1px;
    width: 20px;
    height: 20px;
    background: transparent;
    z-index: 10;
    border-bottom-right-radius: 20px;
    box-shadow: 6px 6px ${p => p.theme.colors.primaryBg};
  }

  &::after {
    content: '';
    position: absolute;
    top: 381px;
    right: 29px;

    width: 20px;
    height: 20px;
    background: transparent;
    z-index: 10;
    border-bottom-right-radius: 20px;
    box-shadow: 6px 6px ${p => p.theme.colors.primaryBg};
  }
`;

export const Img = styled.img`
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

export const Votes = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;
  z-index: 50;

  transform: translate(20px, 380px);
  background-color: ${p => p.theme.colors.primaryBg};
  border-radius: 50%;
  border: 10px solid ${p => p.theme.colors.primaryBg};
`;

export const TextWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 15px;
  height: 80px;

  font-size: 18px;
  line-height: 1.16;
  color: ${p => p.theme.colors.white};
  background: linear-gradient(180deg, #0ce39a, #69007f, #fc0987);
  filter: blur(0.3px);

  border-radius: 15px;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    right: 35px;
    width: 20px;
    height: 20px;
    background: transparent;
    z-index: 10;
    border-top-right-radius: 20px;
    box-shadow: 6px -6px ${p => p.theme.colors.primaryBg};
  }

  &::after {
    content: '';
    position: absolute;
    top: 29px;
    right: -1px;
    width: 20px;
    height: 20px;
    background: transparent;
    z-index: 10;
    border-top-right-radius: 20px;
    box-shadow: 6px -6px ${p => p.theme.colors.primaryBg};
  }
`;

export const CardTitle = styled.p`
  width: 200px;
  text-align: center;
  font-size: 16px;
`;
