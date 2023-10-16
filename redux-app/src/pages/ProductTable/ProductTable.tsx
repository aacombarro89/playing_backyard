import { useEffect, useState } from 'react';


interface ProductTableProps {

}

interface Product {
    name: string;
    category: number;
}

export const sortProductComparator = (products: Product[]) => {
    return products.sort((a, b) => {
        if (a.category < b.category) { // Ascending order
            return -1;
        }
        if (a.category > b.category) { // Descending order
            return 1;
        }
        return 0; // Default return value (no sorting)
    })
}

export const sortProducts = (products: Product[]) => {
    return products.sort((a, b) => {
        return b.category - a.category;  // Descending order
    })
}

const ProductTable = (props: ProductTableProps) => {

    const [productsList, setProductsList] = useState<Product[]>([]);
    const [form, setForm] = useState<Product>({ name: '', category: 0 });
    const [selectedRow, setSelectedRow] = useState<Product>({ name: '', category: 0 });
    const [warning, setWarning] = useState<boolean>(false);

    const handleAdd = (event: any) => {
        event.preventDefault();
        setProductsList([...productsList, { name: form.name, category: form.category }]);
        setForm((prev) => ({ ...prev, name: '', category: 0 }));
    };

    const handleRemove = () => {
        setProductsList(productsList.filter((product, index) => product.name !== selectedRow.name));
        setWarning((prev) => !prev);
    }

    const handleOnChange = (event: any) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    const disableButton = form.name === '' || form.category === 0;

    return (
        <div className="ProductPage">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortProducts(productsList).map((product, index) => (
                        <tr key={index}>
                            <td >
                                {product.name}
                            </td>
                            <td>
                                {product.category}
                            </td>
                            <td>
                                <button onClick={() => {
                                    setWarning((prev) => prev = true);
                                    setSelectedRow({ name: product.name, category: product.category });
                                }}>Remove</button>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
            <form onSubmit={handleAdd}>
                <label htmlFor='name'>Product:</label>
                <input
                    name='name'
                    id='name'
                    type="text"
                    placeholder="Add product"
                    onChange={handleOnChange}
                    value={form.name} />
                <label htmlFor='category'>Category:</label>
                <input
                    name='category'
                    id='category'
                    type="number"
                    min={0}
                    onChange={handleOnChange}
                    value={form.category} />
                <button type='submit' disabled={disableButton}>+Add</button>
            </form>
            {warning && (
                <div>
                    <span color='danger'>
                        Are you sure you want to delete <strong>{selectedRow.name}</strong> product?
                    </span>
                    <button onClick={() => setWarning(false)}>Cancel</button>
                    <button onClick={handleRemove}>Confirm</button>
                </div>)}
        </div>
    );
};

export default ProductTable;