import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ColorList from '../../04_finding_elements_with_query_functions/ColorList.tsx'

describe('components: ColorListComponent', () => {
  it('should render without crashing', () => {
    render(<ColorList />)
  })

  it('getBy, queryBy, findBy finding 0 elements', async () => {
    render(<ColorList />)

    expect(() => screen.getByRole('textbox')).toThrow()

    let errorThrown = false

    try {
      await screen.findByRole('textbox')
    } catch (err) {
      errorThrown = true
    }

    expect(errorThrown).toBe(true)
  })

  it('getBy, queryBy, findBy when they find 1 element', async () => {
    render(<ColorList />)
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.queryByRole('list')).toBeInTheDocument()
    expect(await screen.findByRole('list')).toBeInTheDocument()
  })

  it('getBy, queryBy, findBy when finding > 1 elements', async () => {
    render(<ColorList />)
    expect(() => screen.getByRole('listitem')).toThrow()
    expect(() => screen.queryByRole('listitem')).toThrow()

    let errorThrown = false
    try {
      await screen.findByRole('listitem')
    } catch (err) {
      errorThrown = true
    }
    expect(errorThrown).toEqual(true)
  })

  it('getAll, queryAllBy, findAllBy', async () => {
    render(<ColorList />)

    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.queryAllByRole('listitem')).toHaveLength(3)
    expect(await screen.findAllByRole('listitem')).toHaveLength(3)
  })

  it('favor using getBy to prove an element exists', () => {
    render(<ColorList />)
    const element = screen.getByRole('list')
    expect(element).toBeInTheDocument()
  })

  it('favor using getBy to prove an element exists', () => {
    render(<ColorList />)
    const element = screen.getByRole('list')
    expect(element).toBeInTheDocument()
  })

  it('favor queryBy when proving an element does not exist', () => {
    render(<ColorList />)
    const element = screen.queryByRole('textbox')
    expect(element).not.toBeInTheDocument()
  })
})
