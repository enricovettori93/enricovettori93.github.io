import React from "react";

enum Theme {
  DARK,
  WHITE
}

const ThemeContext = React.createContext<{theme: Theme, toggleTheme: Function}>({ theme: Theme.WHITE, toggleTheme: () => {} });

export {Theme, ThemeContext};