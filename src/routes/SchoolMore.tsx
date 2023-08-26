import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { School } from '../components/School';
import { propectusList } from '../utils/data';
import { Loading } from '../utils/Loading';

interface DataType {
id: string;
  title: string;
  path: string;
  image: string;
  }


 const SchoolMore:React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const schoolDisplay: DataType = propectusList.find(
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
    <div className='mt-20 md:mt-40'>
      <School {...schoolDisplay}/>
    </div>
  )

  }
  export default SchoolMore