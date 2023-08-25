import React from 'react'
import ReservationCalendar from '../components/MyCalender'
import { useParams } from 'react-router-dom';
import { services } from '../utils/data';

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
  return (
    <div className='mt-20 md:mt-48'>
        <ReservationCalendar {...bookinDetails} />
    </div>
  )
}

export default BookScheduler