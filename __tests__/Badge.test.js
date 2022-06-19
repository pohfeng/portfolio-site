import { render, screen } from '@testing-library/react';
import Badge from '../components/Common/Badge';
import '@testing-library/jest-dom';

describe('Badge component', () => {
  it('renders correctly with props', () => {
    render(<Badge colorClass="fake-color">Test</Badge>);

    const badge = screen.getByText('Test');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('fake-color');
  });
});
