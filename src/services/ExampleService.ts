import createService from '../di/createService';
import { exampleAtom } from '../state/state';

export const ExampleService = createService(get => ({
  data: get(exampleAtom)
}), (get, set) => ({
  fetchData: () => fetch("http://localhost:3000/example").then(r => r.json()).then(r => set(exampleAtom, r.data))
}))
