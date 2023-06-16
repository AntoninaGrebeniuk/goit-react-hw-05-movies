import styled from '@emotion/styled';

export const CardList = styled.ul`
  display: flex;

  gap: 30px;
  flex-wrap: wrap;
  color: #ffffff;
`;

export const CardItem = styled.li`
  position: relative;
  flex-basis: calc((100% - 120px) / 5);
`;

export const ImgWrap = styled.div`
  position: relative;

  margin-bottom: 10px;
  height: 400px;
  overflow: hidden;

  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(0, 368px);
    width: 15px;
    height: 15px;
    background-color: #db18d2;
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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

  transform: translate(15px, 380px);
  background-color: #e77912;
  border-radius: 50%;
  border: 10px solid #212121;
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* text-align: center; */
  padding: 15px;
  height: 80px;
  color: #ffffff;
  background-color: #127721;

  border-radius: 10px;
`;

export const CardTitle = styled.h2`
  /* width: 100%; */
  font-size: 18px;
`;
