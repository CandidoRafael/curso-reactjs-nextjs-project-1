import { render, screen } from '@testing-library/react'
import { PostCard } from '.'
import { postCardProps } from './mock'

const mock = postCardProps

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...mock} />)

    expect(screen.getByAltText(/title 1/i)).toHaveAttribute('src', mock.cover)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()

    expect(screen.getByText('body 1')).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...mock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
