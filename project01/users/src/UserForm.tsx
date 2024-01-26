import React, { FormEvent, useState } from 'react'
import { UserType } from './App'

// import { Container } from './styles';

type UserFormType = {
  onUserAdd: (user: UserType) => void
}

const UserForm: React.FC<UserFormType> = ({ onUserAdd }) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onUserAdd({ name, email })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          data-testid='name'
          placeholder='Tell me your name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='email'>E-mail</label>
        <input
          id='email'
          data-testid='email'
          placeholder='Tell me your e-mail'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <button>Add User</button>
    </form>
  )
}

export default UserForm
