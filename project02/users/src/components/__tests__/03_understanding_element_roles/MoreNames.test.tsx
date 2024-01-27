import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MoreNames from '../../03_understanding_element_roles/MoreNames.tsx'

describe('components: MoreNames', () => {
  test('show an email and search input', () => {
    render(<MoreNames />)
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    })

    const searchInput = screen.getByRole('textbox', {
      name: /search/i,
    })

    expect(emailInput).toBeInTheDocument()
    expect(searchInput).toBeInTheDocument()
  })
})
