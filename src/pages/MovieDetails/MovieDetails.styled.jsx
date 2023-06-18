import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export const ArrowLeft = styled(HiArrowNarrowLeft)`
  margin-right: 10px;
  color: #ffffff;
`;

export const GoBack = styled(Link)`
  position: relative;
  display: block;
  margin-bottom: 20px;
  padding: 10px 20px;
  width: 140px;

  font-size: 16px;
  line-height: 1.16;
  color: ${p => p.theme.colors.white};
  background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    /* background: #272727; */
    background: #111111;
    border-radius: 9px;
    transition: 0.5s;
  }

  &&:hover::before {
    opacity: 0.7;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0px;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    border-radius: 9px;
    transition: 0.5s;
    opacity: 0;
    filter: blur(20px);
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const Text = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  width: 400px;
`;

export const TitleInfo = styled.h3`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #0ce39a;
`;

export const BtnInfoList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 400px;
`;

export const CastBtn = styled(Link)`
  position: relative;
  display: block;
  padding: 10px 20px;
  width: 110px;

  font-size: 16px;
  line-height: 1.16;
  color: ${p => p.theme.colors.white};
  background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    /* background: #272727; */
    background: #111111;
    border-radius: 9px;
    transition: 0.5s;
  }

  &&:hover::before {
    opacity: 0.7;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0px;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    border-radius: 9px;
    transition: 0.5s;
    opacity: 0;
    filter: blur(20px);
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const ReviewsBtn = styled(Link)`
  position: relative;
  display: block;
  padding: 10px 20px;
  width: 110px;

  font-size: 16px;
  line-height: 1.16;
  color: ${p => p.theme.colors.white};
  background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    background: #111111;
    border-radius: 9px;
    transition: 0.5s;
  }

  &&:hover::before {
    opacity: 0.7;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0px;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    border-radius: 9px;
    transition: 0.5s;
    opacity: 0;
    filter: blur(20px);
  }

  &:hover::after {
    opacity: 1;
  }
`;
