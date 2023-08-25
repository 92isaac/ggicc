import React from 'react'
import { useParams } from 'react-router-dom';
import { School } from '../components/School';
import { propectusList } from '../utils/data';

interface DataType {
id: string;
  title: string;
  path: string;
  image: string;
  }


export const SchoolMore:React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const schoolDisplay: DataType = propectusList.find(
    (project) => project.id === id
  )!;

  return (
    <div className='mt-40'>
      <School {...schoolDisplay}/>
    </div>
  )

  }