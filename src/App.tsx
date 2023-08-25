import './App.css'
import { lazy, Suspense } from "react";
import { Routes, Route} from 'react-router-dom'
import { SharedLayout } from './utils/SharedLayout'
import ScrollToTop from './utils/ScrollToTop'
import NotFoundPage from './routes/PageNotFound'
import { Loading } from './utils/Loading';
const Home = lazy(()=> import('./routes/Home'))
const BookScheduler = lazy(()=> import('./routes/BookScheduler'));
const ScheduleForm =lazy(()=> import('./routes/ScheduleForm'));
const BookOnline = lazy(()=> import('./routes/BookOnline'));
const SchoolMore = lazy(()=> import('./routes/SchoolMore'));


function App() {


  return (
    <Suspense fallback={<Loading />} >
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
    </Suspense>
  )
}

export default App
