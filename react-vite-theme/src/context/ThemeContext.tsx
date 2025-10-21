//Це Enum як на C#
import {createContext, type FC, type ReactNode, useContext, useEffect, useState} from "react";

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme; //Яка тема становлена
    toggleTheme: () => void; //перемикач Theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider : FC<{children: ReactNode}> = ({
                                                              children
                                                            }) => {
    const [theme, setTheme] = useState<Theme>('light');
    //Фіксує вставлення теми
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // console.log("Перевірка теми і її встановлення")
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        let initialTheme: Theme;

        if(savedTheme)
            initialTheme = savedTheme;
        else
        {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            initialTheme = prefersDark ? "dark" : "light";
        }
        setTheme(initialTheme);
        setIsInitialized(true);
    },[]);

    useEffect(() => {
        if(isInitialized) {
            localStorage.setItem('theme', theme);
            if(theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }, [theme, isInitialized]);

    const toggleTheme = () => {
        setTheme((prev)=>(prev == 'light' ? 'dark': 'light'))
    }

    return (
        <ThemeContext.Provider
            value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

//Повертає силку на Context - глобальний
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context)
        throw new Error("useTheme must be used within a ThemeProvider");
    return context;
}


