import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () =>{
    setThemeMode("light")
    console.log("Light");
  }

  const darkTheme = () => {
    setThemeMode("dark")
    console.log("Dark");    
  }

  // actual change in theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
