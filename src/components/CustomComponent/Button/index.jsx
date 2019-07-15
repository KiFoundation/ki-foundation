import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { orange } from '@material-ui/core/colors';

var primaryBlue = {
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


export default class Buttons extends Component {
    onClick = () => {
        this.props && this.props.onClick();
    }
    
    render() {
        const newTheme = createMuiTheme({
            palette: { primary: this.props && this.props.color && this.props.color === 'primary' ? primaryBlue : orange } 
        });
        return (
            <React.Fragment>
                <MuiThemeProvider theme={newTheme}>
                <Button onClick={this.onClick} variant={this.props && this.props.variant} color="primary" className={this.props && this.props.className} style={{textTransform: 'capitalize'}}>
                    {this.props && this.props.children}
                </Button>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}