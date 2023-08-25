import React, { useEffect, useState } from 'react'
import { BookingForm } from '../components/BookingForm'
import { Loading } from '../utils/Loading';

const ScheduleForm:React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  if (!loading) return <Loading />;
  return (
    <div className='mt-24 md:mt-48 min-h-screen'>
        <BookingForm />
    </div>
  )
}

export default ScheduleForm