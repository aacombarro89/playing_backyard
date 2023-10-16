import './App.scss';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { increment, decrement, reset, ammountAdded } from './features/counter/counter-slice';
import Counter from './pages/Counter/Counter';
import DogsTable from './pages/DogsTable';
import ProductTable from './pages/ProductTable';

function App() {

  const { value, status } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

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
            <Counter
              handleAmmountAdded={handleAmmountAdded}
              handleDecCounter={handleDecCounter}
              handleIncCounter={handleIncCounter}
              handleResetCounter={handleResetCounter}
              status={status}
              value={value}
            />
          </div>
          <div className='main_content_list'>
            <DogsTable />
          </div>
          <div className='main_content_list'>
            <ProductTable />
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
