import React, { Component, createContext } from "react"

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }

    toggleTheme = () => {
        // !isLightTheme Means Will Reverse is True or False And Vice Versa
        this.setState({ isLightTheme: !isLightTheme })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>

                {/* This Means Refer to This Component */}
                {this.props.children}

            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider