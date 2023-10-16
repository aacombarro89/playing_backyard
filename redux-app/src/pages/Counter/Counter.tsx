
import './Counter.scss';

interface ICounterProps {
    handleIncCounter: () => void;
    handleAmmountAdded: (value: number) => void;
    handleDecCounter: () => void;
    handleResetCounter(): void;
    value: number;
    status: string;
}

const Counter = (props: ICounterProps) => {

    const {handleAmmountAdded, handleDecCounter, handleIncCounter, handleResetCounter, status, value} = props;

    return (
        <div className="CounterPage">
            <span> Click to increase the counter! </span>
            <button onClick={() => handleIncCounter()}>
                Increase
            </button>
            <button onClick={() => handleAmmountAdded(3)}>
                Increase by 3
            </button>

            <span> Click to decrease the counter! </span>
            <button onClick={() => handleDecCounter()} className='decreased'>
                Drecrease
            </button>
            <span> Click to reset the counter! </span>
            <button onClick={() => handleResetCounter()} className='reset'>
                Reset
            </button>
            <span>The counter value is: <b>{value}</b></span>
            <span>The counter state is: <b>{status}</b></span>
        </div>
    )
}

export default Counter;