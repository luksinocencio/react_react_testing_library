import UserList from '../UserList'
import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'

function renderComponent() {
  const users = [
    { name: 'luffy', email: 'luffy@mail.com' },
    { name: 'zoro', email: 'zoro@mail.com' },
  ]

  render(<UserList users={users} />)

  return {
    users,
  }
}

describe('UserList', () => {
  it('should render without crashing', () => {
    renderComponent()
  })

  it('should render one row per user', () => {
    // render the component
    renderComponent()

    // find all the rows in the table
    // screen.logTestingPlaygroundURL() // debug online
    const rows = within(screen.getByTestId('users')).getAllByRole('row')

    // assertion: correct number of rows in the table
    expect(rows).toHaveLength(2)
  })

  it('should render the email and name of each user', () => {
    // render the component
    const { users } = renderComponent()

    for (const user of users) {
      const name = screen.getByRole('cell', { name: user.name })
      const email = screen.getByRole('cell', { name: user.email })

      expect(name).toBeInTheDocument()
      expect(email).toBeInTheDocument()
    }
  })
})
