import { useState } from 'react'
import UserForm from './UserForm'
import UserList from './UserList'
import LoadableColorList from './components/04_finding_elements_with_query_functions/LoadableColorList.tsx'

export type UserType = {
  name: string
  email: string
}

function App() {
  const [users, setUsers] = useState<UserType[]>([])

  const onUserAdd = (user: UserType) => {
    setUsers([...users, user])
  }

  return (
    <>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
      <hr />
      <LoadableColorList />
    </>
  )
}

export default App
