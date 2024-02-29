import { QrCode } from "./components/QrCode"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header/>
      <div className="flex flex-1 flex-col justify-start px-6 pb-12 lg:px-8">
        <QrCode />
      </div>
      <Footer />
    </div>
  )
}

export default App
