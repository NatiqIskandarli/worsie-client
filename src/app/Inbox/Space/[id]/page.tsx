'use client';
import React from 'react';
import SpaceLayout from '@/layouts/SpaceLayout';

interface SpacePageProps {
  params: { id: number };
}

const SpacePage: React.FC<SpacePageProps> = ({ params }) => {
  const id = params.id;
  return (
    <>
      <SpaceLayout id={id} />
    </>
  );
};

export default SpacePage;
