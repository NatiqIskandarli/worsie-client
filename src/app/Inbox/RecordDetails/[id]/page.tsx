'use client';
import React from 'react';
import RecordDetailsLayout from '@/layouts/RecordDetailsLayout';

interface RecordDetailsPageProps {
  params: {id: number};
}

const RecordDetailsPage : React.FC<RecordDetailsPageProps> =({ params }) => {
  const id = params.id
  return (
    <>
      <RecordDetailsLayout id={id}/>
    </>
  );
};

export default RecordDetailsPage;
