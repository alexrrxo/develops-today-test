import { years } from '@/utils/constants';
import Button from '../ui/Button';
import Select from '../ui/Select';
import { useCallback, useMemo } from 'react';

interface FormProps {
  selectedMake: number | null;
  setSelectedMake: (value: number) => void;
  selectedYear: number | null;
  setSelectedYear: (value: number) => void;
  vehicleMakes: { MakeId: number; MakeName: string }[];
}

const Form: React.FC<FormProps> = ({
  selectedMake,
  setSelectedMake,
  selectedYear,
  setSelectedYear,
  vehicleMakes,
}) => {
  const yearsOptions = useMemo(
    () => years.map((year) => ({ value: year, label: year.toString() })),
    []
  );

  const handleYearChange = useCallback(
    (value: string | number) => {
      setSelectedYear(Number(value));
    },
    [setSelectedYear]
  );

  const handleMakeChange = useCallback(
    (value: string | number) => {
      setSelectedMake(Number(value));
    },
    [setSelectedMake]
  );

  return (
    <div className="bg-white border border-gray-200 shadow-lg p-8 rounded-lg max-w-lg w-full">
      <Select
        label="Vehicle Make"
        options={vehicleMakes.map((make) => ({
          value: make.MakeId,
          label: make.MakeName,
        }))}
        value={selectedMake}
        onChange={handleMakeChange}
      />

      <Select
        label="Model Year"
        options={yearsOptions}
        value={selectedYear}
        onChange={handleYearChange}
      />

      <Button
        label="Next"
        href={
          selectedMake && selectedYear
            ? `/result/${selectedMake}/${selectedYear}`
            : undefined
        }
        disabled={!selectedMake || !selectedYear}
      />
    </div>
  );
};

export default Form;
