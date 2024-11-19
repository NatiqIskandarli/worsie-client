'use client';
import React, { useEffect, useState } from 'react';
import CabinetLayout from '@/layouts/CabinetLayout';

interface CabinetPageProps {
    params: {id: number};
}

const CabinetPage : React.FC<CabinetPageProps> =({ params }) => {
    const id = params.id
    return <CabinetLayout id={id} />;
};

export default CabinetPage;
