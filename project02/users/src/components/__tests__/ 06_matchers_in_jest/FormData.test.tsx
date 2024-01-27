import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'
import FormData from '../../06_matchers_in_jest/FormData.tsx'

/**
 * Given/Arrange: definir um estado conhecido;
 * When/Act: rodar a aplicação;
 * Then/Assert: certificar-se de que o novo estado é o estado esperado.
 **/

describe('components: FormData', () => {
  it('the form displays two buttons', () => {
    // given
    render(<FormData />)

    // when
    const form = screen.getByRole('form')
    const buttons = within(form).getAllByRole('button')

    // then
    expect(buttons).toHaveLength(2)
  })

  it('the form displays two buttons other to test', () => {
    // given
    render(<FormData />)

    // when
    const form = screen.getByRole('form')

    // then
    expect(form).toContainRole('button', 2)
  })
})
