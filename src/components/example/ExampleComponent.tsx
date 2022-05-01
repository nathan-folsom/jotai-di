import useService from '../../di/useService';
import { ExampleService } from '../../services/ExampleService';
import { useEffect } from 'react';

export default function ExampleComponent() {
  const [{ data }, { fetchData }] = useService(ExampleService);
  useEffect(() => { fetchData() }, [fetchData]);
  return <div>{data}</div>;
}
