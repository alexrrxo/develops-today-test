import React, { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/ui/Card';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import TextLoader from '@/components/ui/TextLoader';

interface VehicleModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

interface ResultPageProps {
  vehicleModels: VehicleModel[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { makeId: string; year: string } }[] = [];
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { makeId, year } = context.params || {};

  if (!makeId || !year) {
    return { notFound: true };
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const data = await res.json();

    return {
      props: {
        vehicleModels: data.Results || [],
      },
    };
  } catch (error) {
    console.error('Failed to fetch vehicle models:', error);
    return { notFound: true };
  }
};

const LazyVehicleModelList = React.lazy(
  () => import('@/components/ui/VehicleModelList')
);

const ResultPage = ({ vehicleModels }: ResultPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <TextLoader />;
  }

  return (
    <Card>
      <Header
        title="Vehicle Models"
        subtitle="Here are the models based on your selection"
      />
      <Suspense fallback={<TextLoader text="Loading vehicle models..." />}>
        <LazyVehicleModelList vehicleModels={vehicleModels} />
      </Suspense>
    </Card>
  );
};

export default ResultPage;
