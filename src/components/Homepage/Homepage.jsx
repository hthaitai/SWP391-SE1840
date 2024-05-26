import './Homepage.scss';
import { Grid, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { aget } from '../../net/Axios';
import { Link } from 'react-router-dom';

export default function Homepage() {

  let [products, setProducts] = useState([]);

  useEffect(() => {
    aget('/products').then((res) => {
      setProducts(res.data);
    })
  }, []);

  return (
    <div className='homepage'>
      <div className='banner-container'>
        <div className='banner'></div>
      </div>
      <div>
        <p className='title'>Our products</p>
        <p className='subtitle'>Explore some of our favorite jewelries</p>
        <div className='products-container'>
          <Grid container spacing={2}>
            {
              products.map((product) => {
                return (
                  <Grid item xs={12} sm={3} md={3} key={product.id}>
                    <div className='card'>
                      <div className='image' style={{ backgroundImage: `url(${product.image})` }}></div>
                      <p className='title'>{product.name}</p>
                      <Button variant="contained" className='btn-explore' component={Link} to={`/products/${product.id}`}>Explore</Button>
                    </div>
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
      </div>
    </div>
  )
}