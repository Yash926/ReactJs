// //UseContext example

// import React, { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// function TC() {
//     const [theme, setTheme] = useState('Light');

//     const toggleTheme = () => {
//         setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'));
//     };

//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             <Toolbar />
//         </ThemeContext.Provider>
//     );
// }

// function Toolbar() {
//     return (
//         <div>
//             <ThemedButton />
//         </div>
//     );
// }

// function ThemedButton() {
//     const { theme, toggleTheme } = useContext(ThemeContext);

//     return (
//         <button 
//             onClick={toggleTheme}
//             style={{
//                 background: theme === 'Light' ? '#fff' : '#333',
//                 color: theme === 'Light' ? '#000' : '#fff'
//             }}
//         >
//             Toggle Theme
//         </button>
//     );
// }
// export default TC;



import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export default function myApp() {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState(null);

    return (
        <ThemeContext.Provider value={theme} >
            <CurrentUserContext.Provider 
            value = {{
                 currentUser, 
                 setCurrentUser
                  }}
                  
                  >
                <WelcomePanel1 />
                <lable>
                    <input
                    type = "checkbox"
                    checked = {theme === 'dark'}
                    onChange = {(e) => {
                        setTheme(e.target.checked ?'dark': 'light' )
                    }}
                    />
                    Use Dark Mode 
                </lable>
            </CurrentUserContext.Provider>
        </ThemeContext.Provider>
    )
}

function WelcomePanel1({ children }) {
const {currentUser} = useContext(CurrentUserContext);
return(
    <p> You logged in as {currentUser.name}.</p>

)
}

function LoginForm(){
    const {setCurrentUser}=useContext(CurrentUserContext);
    Const [firstName,setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
}
     