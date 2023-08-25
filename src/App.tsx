import './App.css'
import { Home } from './routes/Home'
import { Routes, Route} from 'react-router-dom'
import { SharedLayout } from './utils/SharedLayout'
import { SchoolMore } from './routes/SchoolMore'
import { BookOnline } from './routes/BookOnline'
import BookScheduler from './routes/BookScheduler'
import ScheduleForm from './routes/ScheduleForm'
import ScrollToTop from './utils/ScrollToTop'
import NotFoundPage from './routes/PageNotFound'


function App() {


  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/book-online' element={<BookOnline/>}/>
        <Route path='/school/:id' element={<SchoolMore/>}/>
        <Route path='/scheduler/:id' element={<BookScheduler/>}/>
        <Route path='/booking-form/:id' element={<ScheduleForm/>}/>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  )
}

export default App
