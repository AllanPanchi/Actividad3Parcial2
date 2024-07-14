// components/ProductDetail.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import '../styles/globals.css';

const ProductDetail = ({ product }) => {
    return (
        <Card className="max-w-2xl mx-auto mt-8 rounded overflow-hidden shadow-lg">
            <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="h6" component="div" className="mt-4">
                    ${product.price}
                </Typography>
                <div className='flex justify-center'>
                    <Button variant="contained" color="primary" className="m-5">
                        Add to Cart
                    </Button>
                    <Button variant="contained" color="primary" className="m-5">
                        <Link href={`/`} style={{ textDecoration: "none", color: "inherit" }}>
                            Home
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductDetail;
