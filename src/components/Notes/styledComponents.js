// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 110vh;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`

export const Form = styled.form`
  padding: 13px 20px 18px 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 16px #aab8c8;
  border-radius: 2px;
  @media screen and (min-width: 768px) {
    width: 85%;
  }
`

export const CustomHeading = styled.h1`
  font-size: 27px;
  font-family: 'Bree Serif';
  text-align: center;
  color: #4c63b6;
  margin-bottom: 50px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 39px;
  }
`

export const CustomInput = styled.input`
  padding: 7px 10px;
  width: 100%;
  outline: none;
  border: none;
  @media screen and (min-width: 768px) {
    padding: 10px 13px;
  }
`
export const CustomTextArea = styled.textarea`
  width: 100%;
  height: 90px;
  outline: none;
  border: none;
  padding: 7px 10px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    padding: 10px 13px;
  }
`

export const CustomBtn = styled.button`
  padding: 10px 18px;
  outline: none;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  background-color: #4c63b6;
  color: white;
  font-size: 13px;
  border-radius: 2px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const NoNotesStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`
export const NoNotesStatusImage = styled.img`
  width: 70px;
  @media screen and (min-width: 768px) {
    width: 140px;
  }
`
export const NoNotesStatusHeading = styled.h3`
  color: #334155;
  font-size: 19px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const NoNotesStatusPara = styled.p`
  color: #4c63b6;
  font-size: 15px;
  margin-top: 0px;
  color: #475569;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
export const NoteItemsContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  margin-top: 50px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 85%;
  }
`
