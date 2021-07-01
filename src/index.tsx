import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss'
import Router from 'src/Router'
import { ThemeProvider } from 'theme-ui'
import { customTheme } from '@shared/Theme'

ReactDOM.render(
    <ThemeProvider theme={{ ...customTheme }}>
        <Router />
    </ThemeProvider>,
    document.getElementById('root')
)
