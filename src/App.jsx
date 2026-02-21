import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Allroutes from './routes/Allroutes';
function App() {
  

  return (
    <>
     <div className="min-h-screen bg-white">
      <Navbar />
      <Allroutes/>
    </div>
      <Footer/>
    </>
  )
}

export default App
