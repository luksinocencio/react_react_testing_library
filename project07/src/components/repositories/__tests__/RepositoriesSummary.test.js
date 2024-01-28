import '@testing-library/jest-dom';
import React from 'react';
import RepositoriesSummary from '../RepositoriesSummary';
import { render, screen } from '@testing-library/react';

describe('repositories: RepositoriesSummary', () => {
  it('should display information about the repository', () => {
    const repository = {
      language: 'JavaScript',
      stargazers_count: 5,
      forks: 30,
      open_issues: 1,
    };

    render(<RepositoriesSummary repository={repository} />);

    for (let key in repository) {
      const value = repository[key];
      const element = screen.getByText(new RegExp(value));

      expect(element).toBeInTheDocument();
    }
  });
});
