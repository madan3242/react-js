import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemedButtom() {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      I am styled by theme context
    </button>
  );
}

export default ThemedButtom