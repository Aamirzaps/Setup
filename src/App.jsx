import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const currentLang = i18n.language || "en"

    // Set direction
    const dir = currentLang === "ar" ? "rtl" : "ltr"
    document.documentElement.dir = dir

    // Optional: set lang attribute (SEO + accessibility)
    document.documentElement.lang = currentLang
  }, [i18n.language])

  return <RouterProvider router={router} />
}

export default App