import { ThemeContext } from "./theme-context";

function ThemeTogglerButton() {
    return (
        <ThemeContext.Consumer>
            {({theme, toogleTheme}) => (
                <button
                    onClick={toogleTheme}
                    style={{ backgroundColor: theme.background }}
                >
                    Toogle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    )
}

export default ThemeTogglerButton