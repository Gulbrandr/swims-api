import React, { FC } from 'react';
import { useQuery } from 'react-query';

interface DetailsProps {
  id: number;
}

const Details: FC<DetailsProps> = ({ id }) => {
  const DetailsQuery = useQuery(['details', id], () => {
    return { name: 'details', status: 'success', id: id };
  });
  if (DetailsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (DetailsQuery.isError) {
    return <div>Error: {DetailsQuery.error}</div>;
  }

  return (
    <div className="App">
      <h3>{DetailsQuery?.data?.name}</h3>
      <ul>
        <li>
          <strong>id:</strong> {DetailsQuery?.data?.id}
        </li>
        <li>
          <strong>status:</strong> {DetailsQuery?.data?.status}
        </li>
      </ul>
    </div>
  );
};

export default Details;
