import React from 'react'
import { Box } from 'rebass'
import TopBar from './TopBar'
import noise from '@assets/ui/noise.png'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box
            style={{
                flex: 1,
                flexDirection: 'column',
                height: '100vh',
                width: '100vw',
                background: '#07071A',
                position: 'relative',
            }}
        >
            <Box className="grain" />
            <Box
                className="layout-wrapper"
                flexDirection="column"
                style={{ position: 'relative', zIndex: 10, backgroundImage: `url(${noise})` }}
            >
                <TopBar />
                <Box className="layout-content-wrapper" flexDirection="column">
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

export default Layout
