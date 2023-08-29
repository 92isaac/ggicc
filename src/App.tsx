import './App.css'
import { lazy, Suspense } from "react";
import { Routes, Route} from 'react-router-dom'
import { SharedLayout } from './utils/SharedLayout'
import ScrollToTop from './utils/ScrollToTop'
import NotFoundPage from './routes/PageNotFound'
import { Loading } from './utils/Loading';
import Dashboard from './routes/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import SharedDashboardLayout from './utils/ShareDashboardLayout';
const Home = lazy(()=> import('./routes/Home'))
const BookScheduler = lazy(()=> import('./routes/BookScheduler'));
const ScheduleForm =lazy(()=> import('./routes/ScheduleForm'));
const BookOnline = lazy(()=> import('./routes/BookOnline'));
const SchoolMore = lazy(()=> import('./routes/SchoolMore'));
const Login = lazy(()=>import("./routes/Login"));
const CreateAccount = lazy(()=>import("./routes/CreateAccount"));


function App() {


  return (
    <Suspense fallback={<Loading />} >
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/book-online' element={<BookOnline/>}/>
        <Route path='/admin' element={<Login/>}/>
        <Route path='/create-account' element={<CreateAccount/>}/>
        <Route path='/school/:id' element={<SchoolMore/>}/>
        <Route path='/scheduler/:id' element={<BookScheduler/>}/>
        <Route path='/booking-form/:id' element={<ScheduleForm/>}/>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/dashboard" element={<ProtectedRoute><SharedDashboardLayout/></ProtectedRoute>}>
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Route>
    </Routes>
    </Suspense>
  )
}

export default App
