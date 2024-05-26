import styled from 'styled-components'

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 80px 20px 80px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 40px;
  }
`

export const HomeH1 = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #24263c;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`

export const LogoutButton = styled.button`
  align-self: center;
  border: none;
  padding: 8px 16px 8px 16px;
  border-radius: 10px;
  background-color: #1e293b;
  width: 110px;
  margin-top: 30px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 10px 25px 10px 25px;
  }
`
