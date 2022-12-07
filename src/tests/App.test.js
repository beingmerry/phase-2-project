import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders header element', () => {
  render(<App />)
  const headerElement = screen.getByText(/Zoo World/i)

  expect(headerElement).toBeInTheDocument()
})

test('renders logo element', () => {
  render(<App />)
  const logoElement = screen.getByText(/ZW/i)

  expect(logoElement).toBeInTheDocument()
})
