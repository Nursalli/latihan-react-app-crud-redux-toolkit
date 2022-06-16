import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, productSelectors, deleteProduct } from "../features/productSlice";
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="shadow mt-2 p-4">
      <Link to="/add" className="btn btn-success mb-3">Add</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={p.id}>
              <td>{i + 1}</td>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>
                <Link to={`/edit/${p.id}`} className='btn btn-warning me-2'>
                  Edit
                </Link>
                <Button onClick={() => dispatch(deleteProduct(p.id))} className='btn-danger'>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ShowProducts;
