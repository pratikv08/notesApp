// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  MainContainer,
  Form,
  CustomBtn,
  CustomHeading,
  CustomInput,
  CustomTextArea,
  NoNotesStatusContainer,
  NoNotesStatusImage,
  NoNotesStatusHeading,
  NoNotesStatusPara,
  NoteItemsContainer,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const renderNoNotesStatus = () => (
    <NoNotesStatusContainer>
      <NoNotesStatusImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoNotesStatusHeading>No Notes Yet</NoNotesStatusHeading>
      <NoNotesStatusPara>Notes you add will appear here</NoNotesStatusPara>
    </NoNotesStatusContainer>
  )

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [notesList, setNotesList] = useState([])

  const onAddNotes = event => {
    event.preventDefault()
    const newNoteList = {
      id: uuidv4(),
      title,
      description,
    }
    if (title !== '' && description !== '') {
      setNotesList(prevNoteList => [...prevNoteList, newNoteList])
      setTitle('')
      setDescription('')
    }
  }

  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeDescription = event => setDescription(event.target.value)

  return (
    <MainContainer>
      <CustomHeading>Notes</CustomHeading>
      <Form onSubmit={onAddNotes}>
        <CustomInput
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <CustomTextArea
          placeholder="Take a Note..."
          value={description}
          onChange={onChangeDescription}
        />
        <CustomBtn type="submit">Add</CustomBtn>
      </Form>
      <NoteItemsContainer>
        {notesList.map(eachNote => (
          <NoteItem noteDetails={eachNote} key={eachNote.id} />
        ))}
      </NoteItemsContainer>

      {notesList.length === 0 && renderNoNotesStatus()}
    </MainContainer>
  )
}

export default Notes
