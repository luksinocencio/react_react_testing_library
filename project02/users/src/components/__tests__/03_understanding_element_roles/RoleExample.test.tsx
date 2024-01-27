import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import RoleExample from '../../03_understanding_element_roles/RoleExample.tsx'

describe('component: RoleExample', () => {
  it('can find elements by role', () => {
    render(<RoleExample />)

    const roles = [
      'link',
      'button',
      'contentinfo',
      'heading',
      'banner',
      'img',
      'checkbox',
      'spinbutton',
      'radio',
      'textbox',
      'listitem',
      'list',
    ]

    for (const role of roles) {
      const el = screen.getByRole(role)
      expect(el).toBeInTheDocument()
    }
  })
})
