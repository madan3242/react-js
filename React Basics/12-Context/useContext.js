import React, { useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);

function App() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButtom />
        </div>
    )
}

function ThemedButtom(){
    const theme = useContext(ThemeContext);
    return (
        <button style={{ backgroundColor: theme.background, color: theme.foreground}}>
            I am styled by theme context
        </button>
    )
}

export default App