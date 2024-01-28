import "@testing-library/jest-dom"
import {render, screen} from '@testing-library/react'
import RepositoriesListItem from "../RepositoriesListItem";
import {MemoryRouter} from "react-router";

function renderComponent() {
  const repository = {
    full_name: 'facebook/react',
    language: 'Javascript',
    description: 'A js library',
    owner: {
      login: 'facebook',
    },
    name: 'react',
    html_url: 'https://github.com/facebook/react',
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository}/>
    </MemoryRouter>
  )

  return {repository}
}

describe('repositories: RepositoriesListItem', () => {
  it('should show a link to the github homepage for this repository', async () => {
    const {repository} = renderComponent()

    await screen.findByRole('img', {name: 'Javascript'})

    const link = screen.getByRole('link', {
      name: /github repository/i
    })
    expect(link).toHaveAttribute('href', repository.html_url)
  })

  it('should show a fileicon with the appropriate icon', async () => {
    renderComponent()

    const icon = await screen.findByRole('img', {
      name: 'Javascript'
    })

    expect(icon).toHaveClass('js-icon')
  })

  it('should show a link to the code editor page', async () => {
    const {repository} = renderComponent()

    await screen.findByRole('img', {name: 'Javascript'})

    const link = await screen.findByRole('link', {
      name: new RegExp(repository.owner.login)
    })

    expect(link).toHaveAttribute('href', `/repositories/${repository.full_name}`)
  })
})


/**
 * act() warnings
 * Little frustrating because you need to understand 3-4 different topics to understand the warning.
 * Will occur frequently if you're doing data fetching in useEffect
 *
 * Important Items
 * 1 - Unexpected state updates in tests are bad
 * 2 - The act function defines a window in time where state updates can (and should) occur
 * 3 - React Testing Library uses act behind the scenes for you!
 * 4 - To solve act warnings, you should use a 'findBy' Usually you don't you want to follow the advice of the warning
 *
 * Options For Solving Act Warnings
 * 1 - Use a 'findBy' or 'findAllBy' to detect when the component has finished its data fetching.
 * 2 - Use an 'act' to control when the data-fetching request get resolved.
 * 3 - Use module mock to avoid rendering the troublesome component
 * 4 - Use an 'act' with 'pause'
 **/