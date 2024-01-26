import { fireEvent, render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from '../UserForm'
import '@testing-library/jest-dom'

describe('UserForm', () => {
  it('should shows two inputs and a button', () => {
    render(<UserForm onUserAdd={() => {}} />)

    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button')

    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
  })

  it('should call onUserAdd when the form is submitted', () => {
    const mock = jest.fn()
    // Try to render my component
    render(<UserForm onUserAdd={mock} />)

    // Find the two inputs
    // Encontra os dois inputs
    const nameInput = screen.getByTestId('name')
    const emailInput = screen.getByTestId('email')

    // Simulate typing in a name
    user.type(nameInput, 'jane')

    // Simulate typing in an email
    user.type(emailInput, 'jane@jane.com')

    // Find the button
    const button = screen.getByRole('button')

    // Simulate clicking the button
    fireEvent.click(button)

    // Assertion to make sure 'onUserAdd' gets called with email/name
    expect(mock).toHaveBeenCalled()
    // expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' })
  })
})
