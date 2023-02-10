import React from "react";
// import { ThemeContext } from "styled-components";
import { ThemeContext, themes } from "./theme-context";
import ThemeTogglerButton from "./theme-toggler-button";
// import ThemedButton from "./themed-button";

// function Toolbar(props) {
//     return (
//         <ThemedButton onClick={props.changeTheme}>
//             Change Theme
//         </ThemedButton>
//     );
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                    ? themes.light
                    : themes.dark
            }))
        }
        
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <Content />
            </ThemeContext.Provider>
        )
    }
    
}

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    )
}

export default App;