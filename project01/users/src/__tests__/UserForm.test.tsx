import { fireEvent, render, screen } from '@testing-library/react'
import UserForm from '../UserForm'
import '@testing-library/jest-dom'

describe('UserForm', () => {
  it('should shows two inputs and a button', () => {
    render(<UserForm onUserAdd={() => {}} />)

    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button')

    expect(inputs).toHaveLength(3)
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

    const passwordInput = screen.getByRole('textbox', {
      name: /password/i,
    }) as HTMLInputElement

    // Simulate typing in a name
    fireEvent.change(nameInput, { target: { value: 'jane' } })

    // Simulate typing in an email
    fireEvent.change(emailInput, { target: { value: 'jane@jane.com' } })

    // Simulate typing in a password
    fireEvent.change(passwordInput, { target: { value: '123456' } })

    // Find the button
    const button = screen.getByRole('button')

    // Simulate clicking the button
    fireEvent.click(button)

    // Assertion to make sure 'onUserAdd' gets called with email/name
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' })
    expect(passwordInput.value).toBe('123456')
  })

  it('should be empties the two inputs when form is submitted', () => {
    const mock = jest.fn()

    render(<UserForm onUserAdd={mock} />)

    const nameInput = screen.getByTestId('name')
    const emailInput = screen.getByTestId('email')
    const button = screen.getByRole('button')

    fireEvent.change(nameInput, { target: { value: 'jane' } })
    fireEvent.change(emailInput, { target: { value: 'jane@mail.com' } })

    fireEvent.click(button)

    expect(nameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')
  })
})
