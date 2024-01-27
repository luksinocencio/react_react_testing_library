import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App.tsx'

describe('App', () => {
  it('should receive a new user and show it on a list', () => {
    render(<App />)
    const nameInput = screen.getByTestId('name')
    const emailInput = screen.getByTestId('email')

    const button = screen.getByRole('button')

    fireEvent.change(nameInput, { target: { value: 'jane' } })
    fireEvent.change(emailInput, { target: { value: 'jane@mail.com' } })

    fireEvent.click(button)

    // screen.debug()

    const name = screen.getByRole('cell', { name: 'jane' })
    const email = screen.getByRole('cell', { name: 'jane@mail.com' })

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  })
})
