import React, { useEffect, useState } from 'react'
import { Services } from '../components/Services'
import { Loading } from '../utils/Loading';

 const BookOnline:React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  if (!loading) return <Loading />;
  return (
    <div className='mt-24 px-2 md:px-0 md:mt-48 min-h-screen'>
        <Services />
    </div>
  )
}
export default BookOnline
