import { React, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { saveProduct } from "../features/productSlice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const createProduct = async (e) => {
    e.preventDefault()
    await dispatch(saveProduct({ title, price }))
    navigate('/')
  }

  return (
    <div className="shadow mt-2 p-4">
      <Form onSubmit={createProduct}>
        <Form.Group className="mb-3" controlId="titleId">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" 
          value={title}
          onChange={ (e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="priceId">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" 
          value={price}
          onChange={ (e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
