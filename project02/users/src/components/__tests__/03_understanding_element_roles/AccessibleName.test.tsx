import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AccessibleName from '../../03_understanding_element_roles/AccessibleName.tsx'

describe('components: AccessibleName', () => {
  test('can select by accessible name', () => {
    render(<AccessibleName />)

    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    })
    const cancelButton = screen.getByRole('button', {
      name: /cancel/i,
    })

    expect(submitButton).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()
  })
})
