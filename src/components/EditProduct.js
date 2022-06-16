import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useDispatch , useSelector} from "react-redux";
import { getProducts, productSelectors, updateProduct } from "../features/productSlice";
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {id} = useParams()

  const product = useSelector((state) => productSelectors.selectById(state, id))

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  useEffect(() => {
    if(product) {
      setTitle(product.title);
      setPrice(product.price);
    }
  }, [product]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateProduct({ id, title, price }))
    navigate('/')
  }

  return (
    <div className="shadow mt-2 p-4">
      <Form onSubmit={handleUpdate}>
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
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditProduct;
