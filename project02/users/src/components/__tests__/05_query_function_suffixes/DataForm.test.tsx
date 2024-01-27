import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DataForm from '../../05_query_function_suffixes/DataForm.tsx'

describe('components: DataForm', () => {
  it('selecting different elements', () => {
    render(<DataForm />)
    const elements: any[] = [
      screen.getByRole('button'),
      screen.getByText(/enter/i),

      screen.getByLabelText(/email/i),
      screen.getByPlaceholderText('Red'),
      screen.getByDisplayValue('johndoe@mail.com'),
      screen.getByAltText('data'),
      screen.getByTitle(/ready to submit/i),

      screen.getByTestId('image wrapper'),
    ]

    for (const element of elements) {
      expect(element).toBeInTheDocument()
    }
  })
})
