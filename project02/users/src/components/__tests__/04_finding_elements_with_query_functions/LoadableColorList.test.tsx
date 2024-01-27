import LoadableColorList from '../../04_finding_elements_with_query_functions/LoadableColorList.tsx'
import { render, screen } from '@testing-library/react'

describe('components: LoadableColorList', () => {
  it('Favor findBy or findAllBy when data fetching', async () => {
    render(<LoadableColorList />)

    const els = await screen.findAllByRole('listitem')

    expect(els).toHaveLength(3)
  })
})
