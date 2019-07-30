import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const primary = {
    50: '#043bea',
    100: '#043bea',
    200: '#043bea',
    300: '#043bea',
    400: '#043bea',
    500: '#043bea',
    600: '#043bea',
    700: '#043bea',
    800: '#043bea',
    900: '#043bea',
    A100: '#043bea',
    A200: '#043bea',
    A400: '#043bea',
    A700: '#043bea'
};

const secondary = {
    50: '#f1ac53',
    100: '#f1ac53',
    200: '#f1ac53',
    300: '#f1ac53',
    400: '#f1ac53',
    500: '#f1ac53',
    600: '#f1ac53',
    700: '#f1ac53',
    800: '#f1ac53',
    900: '#f1ac53',
    A100: '#f1ac53',
    A200: '#f1ac53',
    A400: '#f1ac53',
    A700: '#f1ac53'
};

const error = {
    50: '#ec5765',
    100: '#ec5765',
    200: '#ec5765',
    300: '#ec5765',
    400: '#ec5765',
    500: '#ec5765',
    600: '#ec5765',
    700: '#ec5765',
    800: '#ec5765',
    900: '#ec5765',
    A100: '#ec5765',
    A200: '#ec5765',
    A400: '#ec5765',
    A700: '#ec5765'
};

export default class Buttons extends Component {
    onClick = () => {
        this.props && this.props.onClick();
    }
    render() {
        const newTheme = createMuiTheme({
            palette: {
                primary: primary,
                secondary: secondary,
                error: error
            } 
        });
        return (
            <React.Fragment>
                <MuiThemeProvider theme={newTheme}>
                <Button onClick={this.onClick} variant={this.props && this.props.variant} color={this.props && this.props.color} className={this.props && this.props.className} style={{textTransform: 'capitalize'}}>
                    {this.props && this.props.children}
                </Button>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}