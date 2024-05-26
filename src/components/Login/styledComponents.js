import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
  padding: 40px;
`
export const LoginDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-size: 11px;
  font-weight: soild;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 12px;
  width: 240px;
  height: 18vh;
  margin: 10px 0px 40px 0px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 10px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 12px;
  width: 80%;
  height: 49vh;
  padding: 10px 0px 10px 0px;
  box-shadow: 0px 1px 1px #434451;
  @media screen and (min-width: 768px) {
    width: 520px;
    height: 58vh;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`
export const Label = styled.label`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 16px;
  width: 80%;
  margin-top: 12px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 100%;
    margin-top: 24px;
  }
`

export const Input = styled.input`
  color: #475569;
  background-color: transparent;
  font-size: 14px;
  height: 43px;
  border: 0px;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 2px;
  width: 180px;
  height: 30px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    height: 37px;
    width: 383px;
  }
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  align-self: left;
  font-size: 12px;
  margin-top: 8px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 11px;
  color: #ffffff;
  margin-bottom: 2px;
  background-color: transparent;
  border-radius: 8px;
  padding: 5px 15px 5px 15px;
  border: 1px solid #ffffff;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    height: 47px;
  }
`
