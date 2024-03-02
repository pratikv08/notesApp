// Style your elements here

import styled from 'styled-components'

export const NoteItemContainer = styled.li`
  padding: 5px 12px;
  font-family: 'Roboto';
  border-radius: 7px;
  border: 1px solid #aab8c8;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    width: 270px;
    margin-right: 15px;
  }
`
export const NoteItemHeading = styled.h3`
  color: #334155;
  font-size: 18px;
  margin-bottom: 9px;
`
export const NoteItemPara = styled.p`
  color: #334155;
  font-size: 13px;
  margin-top: 12px;
  line-height: 1.5;
`
