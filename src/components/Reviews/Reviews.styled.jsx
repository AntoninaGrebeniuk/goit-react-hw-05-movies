import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: #b4b4b4;
`;

export const ReviewsItem = styled.li`
  background: radial-gradient(
        circle at 100% 100%,
        #1a1919 0,
        #1a1919 14px,
        transparent 14px
      )
      0% 0%/15px 15px no-repeat,
    radial-gradient(circle at 0 100%, #1a1919 0, #1a1919 14px, transparent 14px)
      100% 0%/15px 15px no-repeat,
    radial-gradient(circle at 100% 0, #1a1919 0, #1a1919 14px, transparent 14px)
      0% 100%/15px 15px no-repeat,
    radial-gradient(circle at 0 0, #1a1919 0, #1a1919 14px, transparent 14px)
      100% 100%/15px 15px no-repeat,
    linear-gradient(#1a1919, #1a1919) 50% 50% / calc(100% - 2px)
      calc(100% - 30px) no-repeat,
    linear-gradient(#1a1919, #1a1919) 50% 50% / calc(100% - 30px)
      calc(100% - 2px) no-repeat,
    linear-gradient(45deg, #0ce39a 0%, #69007f 50%, #fc0987 100%);
  border-radius: 15px;
  padding: 16px;
`;

export const Author = styled.h3`
  margin-bottom: 15px;
  padding-bottom: 5px;

  font-weight: 400;
  font-size: 18px;
  color: #0ce39a;
  border-bottom: 1px solid #212121;
`;

export const AuthorName = styled.span`
  margin-left: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #b4b4b4;
`;

export const Content = styled.p`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #1a1919;
  border-radius: 15px;
`;
