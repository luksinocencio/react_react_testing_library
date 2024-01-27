import React, { FormEvent, useState } from 'react'
import { UserType } from './App'

type UserFormType = {
  onUserAdd: (user: UserType) => void
}

const UserForm: React.FC<UserFormType> = ({ onUserAdd }) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onUserAdd({ name, email })
    setName('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          data-testid="name"
          placeholder="Tell me your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          data-testid="email"
          placeholder="Tell me your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          data-testid="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button>Add User</button>
    </form>
  )
}

export default UserForm
