import React from 'react';

interface VehicleModel {
  Model_ID: number;
  Make_Name: string;
  Model_Name: string;
}

interface VehicleModelListProps {
  vehicleModels: VehicleModel[] | null;
}

const VehicleModelList: React.FC<VehicleModelListProps> = ({
  vehicleModels,
}) => {
  return (
    <ul className="bg-gray-50 border border-gray-200 shadow-lg p-8 rounded-lg max-w-lg w-full max-h-96 overflow-y-auto">
      {vehicleModels && vehicleModels.length > 0 ? (
        vehicleModels.map((model, index) => (
          <li
            key={`${model.Model_ID}-${index}`}
            className="py-2 px-4 mb-2 bg-white rounded-md shadow-sm border border-gray-300 text-gray-800"
          >
            <span className="font-bold text-black">{model.Make_Name}:</span>{' '}
            {model.Model_Name}
          </li>
        ))
      ) : (
        <li className="text-center text-gray-500">No models found.</li>
      )}
    </ul>
  );
};

export default VehicleModelList;
