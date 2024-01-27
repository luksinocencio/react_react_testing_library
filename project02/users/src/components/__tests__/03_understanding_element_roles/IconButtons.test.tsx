import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import IconButtons from '../../03_understanding_element_roles/IconButtons.tsx'

describe('components: IconButtons', () => {
  test('find elements based on label', () => {
    render(<IconButtons />)

    const buttonOne = screen.getByRole('button', {
      name: /sign in/i,
    })

    const buttonTwo = screen.getByRole('button', {
      name: /sign up/i,
    })

    expect(buttonOne).toBeInTheDocument()
    expect(buttonTwo).toBeInTheDocument()
  })
})
