// components/ProductCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
        <Card className="max-w-sm rounded overflow-hidden shadow-lg m-4" sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
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
                <Typography variant="h6" component="div">
                    ${product.price}
                </Typography>
                <div className='flex justify-center'>
                    <Button size='small' variant="contained" className="m-3">
                        Add to Cart
                    </Button>
                    <Button size='small' variant="contained" className="m-3">
                        <Link href={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                            View
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;