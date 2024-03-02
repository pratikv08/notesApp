// Write your code here
import {
  NoteItemContainer,
  NoteItemHeading,
  NoteItemPara,
} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, description} = noteDetails
  return (
    <NoteItemContainer>
      <NoteItemHeading>{title}</NoteItemHeading>
      <NoteItemPara>{description}</NoteItemPara>
    </NoteItemContainer>
  )
}

export default NoteItem
