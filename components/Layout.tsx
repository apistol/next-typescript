import * as React from 'react'
import Link from 'next/link'

type LayoutProps = {
    title?: string
}
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}
const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
    <div style={layoutStyle}>
        <header>
            <p>{title}</p>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>{' '}
                |{' '}
                <Link href="/about">
                    <a>About</a>
                </Link>{' '}
                |{' '}
            </nav>
        </header>
        {children}
    </div>
)
export default Layout