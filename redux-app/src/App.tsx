import './App.scss';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { increment, decrement, reset, ammountAdded } from './features/counter/counter-slice';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';
import { useState } from 'react';

function App() {

  const { value, status } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(5);

  const {
    data = [],
    isFetching,
  } = useFetchBreedsQuery(numDogs);

  const handleIncCounter = () => {
    dispatch(increment());
  }

  const handleDecCounter = () => {
    dispatch(decrement());
  }

  const handleResetCounter = () => {
    dispatch(reset());
  }

  const handleAmmountAdded = (ammount: number) => {
    dispatch(ammountAdded(ammount));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>React Redux Toolkit</h4>
        <section className='main_content'>
          <div className='main_content_list'>
            <span> Click to increase the counter! </span>
            <button onClick={handleIncCounter}>
              Increase
            </button>
            <button onClick={() => handleAmmountAdded(3)}>
              Increase by 3
            </button>

            <span> Click to decrease the counter! </span>
            <button onClick={handleDecCounter} className='decreased'>
              Drecrease
            </button>
            <span> Click to reset the counter! </span>
            <button onClick={handleResetCounter} className='reset'>
              Reset
            </button>
            <span>The counter value is: <b>{value}</b></span>
            <span>The counter state is: <b>{status}</b></span>
          </div>
          <div className='main_content_list'>
            <span> Dogs list </span>
            <span> The number of dogs is: <b>{numDogs}</b></span>
            <p>Dogs to Fetch</p>
            <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                {isFetching && <tr><td colSpan={2}>Loading...</td></tr>}
                {data.map((breed) => (
                  <tr key={breed.id}>
                    <td>{breed.name}</td>
                    <td><img src={breed.image.url} alt={breed.name} height={250} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
