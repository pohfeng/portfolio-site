import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperienceItem from '../components/Experience/ExperienceItem';

describe('Experience Item', () => {
  it('renders correctly with props', () => {
    render(
      <ExperienceItem open={true} summary="Test Summary">
        <ul data-testid="children">
          <li>Point 1</li>
          <li>Point 2</li>
        </ul>
      </ExperienceItem>
    );

    const details = screen.getByTestId('experience-item');
    const children = screen.getByTestId('children');
    expect(details).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
