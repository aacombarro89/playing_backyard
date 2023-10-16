
import { useFetchBreedsQuery } from './../../features/dogs/dogs-api-slice';
import { useState } from 'react';

interface DogsTableProps {

}


const DogsTable = (props: DogsTableProps) => {

    const [numDogs, setNumDogs] = useState(5);
    const {
        data = [],
        isFetching,
    } = useFetchBreedsQuery(numDogs);

    return (
        <div className="DogsTablePage">
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

    );
};

export default DogsTable;