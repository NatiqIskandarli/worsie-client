'use client';
import React from 'react';
import ModificationLayout from '@/layouts/ModificationLayout';

interface ModificationPageProps {
  params: {id: number};
}

const ModificationPage : React.FC<ModificationPageProps> =({ params }) => {
  const id = params.id
  return (
    <>
      <ModificationLayout id={id}/>
    </>
  );
};

export default ModificationPage;
