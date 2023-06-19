import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 400px;
  overflow: hidden;

  border-radius: ${p => p.theme.border.radius};
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VotesCard = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 45px;
  height: 45px;
  z-index: 150;

  transform: translate(-20px, 20px);
  border-radius: 50%;
  border: none;
`;

export const DescCard = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 930px;
  min-height: 400px;
  padding: 40px 20px;

  background-color: ${p => p.theme.colors.bgColor};
  border-radius: 15px;
`;

export const Title = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 8px 0px;
`;
export const DescCardItem = styled.li`
  display: flex;
  gap: 15px;
  padding: 8px 0px;
  color: ${p => p.theme.colors.lightGrey};
`;

export const CardTitle = styled.h2`
  font-weight: 400;
  font-size: 34px;
  color: ${p => p.theme.colors.lightGreen};
`;

export const CardOverview = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 8px 0px;
  color: ${p => p.theme.colors.lightGrey};
`;

export const CardSubTitle = styled.h3`
  width: 80px;
  font-weight: 400;
  font-size: 18px;
  color: ${p => p.theme.colors.lightGreen};
`;

export const CardText = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 1.16;
`;
