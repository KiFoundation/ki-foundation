import React from 'react'
import { Box } from 'rebass'
import TopBar from './TopBar'
import noise from '@assets/ui/noise.png'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Box className="grain" />
            <Box
                className="layout-wrapper"
                flexDirection="column"
                style={{ position: 'relative', zIndex: 10, background: `center / cover url(${noise})` }}
            >
                <TopBar />
                <Box className="layout-content-wrapper" flexDirection="column">
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default Layout
