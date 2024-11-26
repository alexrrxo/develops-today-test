import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Form from '../components/form/VehicleForm';
import Card from '@/components/ui/Card';

const Home = () => {
  const [vehicleMakes, setVehicleMakes] = useState<
    { MakeId: number; MakeName: string }[]
  >([]);
  const [selectedMake, setSelectedMake] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  useEffect(() => {
    const fetchVehicleMakes = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`
        );
        const data = await response.json();
        setVehicleMakes(data.Results);
      } catch (error) {
        console.error('Error fetching vehicle makes:', error);
      }
    };

    fetchVehicleMakes();
  }, []);

  return (
    <Card>
      <Header
        title="Explore the world of vehicles"
        subtitle="Select your desired vehicle make and year to find the best options."
      />
      <Form
        selectedMake={selectedMake}
        setSelectedMake={setSelectedMake}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        vehicleMakes={vehicleMakes}
      />
    </Card>
  );
};

export default Home;
