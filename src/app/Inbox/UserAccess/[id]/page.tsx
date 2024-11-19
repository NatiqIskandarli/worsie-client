'use client';
import React from 'react';
import UserAccessLayout from '@/layouts/UserAccessLayout';

interface UserAccessPageProps {
  params: { id: number };
}

const UserAccessPage: React.FC<UserAccessPageProps> = ({ params }) => {
  const id = params.id;
  return (
    <>
      <UserAccessLayout id={id} />
    </>
  );
};

export default UserAccessPage;
