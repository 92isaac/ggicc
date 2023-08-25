import React, { useEffect, useState } from 'react'
import ReservationCalendar from '../components/MyCalender'
import { useParams } from 'react-router-dom';
import { services } from '../utils/data';
import { Loading } from '../utils/Loading';

interface DataType {
  id: string;
  time: string;
  price: number;
  image: string;
}


const BookScheduler:React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const bookinDetails: DataType = services.find(
    (project) => project.id === id
  )!;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  if (!loading) return <Loading />;
  return (
    <div className='mt-20 md:mt-48 min-h-screen'>
        <ReservationCalendar {...bookinDetails} />
    </div>
  )
}

export default BookScheduler