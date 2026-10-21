import HeaderPage from "./pages/Header"
import HomePage from "./pages/Home"

function App() {
  return (
    <>
    <header >
    <HeaderPage />
    </header>

    <main className="px-5 py-3 bg-[#F7F8F2]">
    <HomePage/>
    </main>
      </>
  )
}
export default App