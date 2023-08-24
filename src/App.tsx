import './App.css'
import { Home } from './routes/Home'
import { Routes, Route} from 'react-router-dom'
import { SharedLayout } from './utils/SharedLayout'
import { SchoolMore } from './routes/SchoolMore'
import { BookOnline } from './routes/BookOnline'
import BookScheduler from './routes/BookScheduler'
import { BookingForm } from './components/BookingForm'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/book-online' element={<BookOnline/>}/>
        <Route path='/school/:id' element={<SchoolMore/>}/>
        <Route path='/scheduler' element={<BookScheduler/>}/>
        <Route path='/booking-form' element={<BookingForm/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
