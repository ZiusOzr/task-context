import React, { ReactElement, useContext } from 'react';

type Theme = 'light' | 'dark';

const MyContext = React.createContext<Theme>('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <MyContext.Provider value={props.theme}>
            {props.children}
        </MyContext.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(MyContext);
}
