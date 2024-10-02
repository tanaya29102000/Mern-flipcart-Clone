import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Box, Typography, Button, CircularProgress, CardMedia, Grid, Divider, Paper } from '@mui/material';

const ProductDetail = () => {
    const { id } = useParams(); // Extract product ID from the URL
    const navigate = useNavigate(); // Initialize navigate to redirect users
    const [product, setProduct] = useState(null); // Holds product details
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Fetch product details based on product ID
    const fetchProduct = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:8080/products/${id}`);
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Product not found.');
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            }
            const data = await response.json(); // Parse the JSON response
            setProduct(data); // Set product details to state
        } catch (error) {
            console.error('Error fetching product:', error.message);
            setError(error.message); // Set error message if any
        } finally {
            setLoading(false); // Set loading state to false
        }
    }, [id]);

    // Use useEffect to fetch product data when the component mounts
    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    // Function to handle adding product to the cart
    const handleAddToCart = async () => {
        if (!product) return; // Prevent adding to cart if product doesn't exist

        try {
            const cartItem = {
                id: product.id, // Product ID
                price: product.price.cost, // Product price
                image: product.detailUrl || product.url || '/path/to/fallback-image.jpg', // Product image
                quantity: 1, // Default quantity for cart
            };

            // Make a POST request to add the item to the cart
            const response = await fetch('http://localhost:8080/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartItem),
            });

            if (!response.ok) {
                throw new Error(`Error adding to cart: ${response.statusText}`);
            }

            // If successful, navigate to the cart page
            console.log('Product added to cart:', cartItem);
            navigate('/cart');

        } catch (error) {
            console.error('Error adding product to cart:', error.message);
        }
    };

    // Render loading state
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <CircularProgress />
            </Box>
        );
    }

    // Render error state
    if (error) {
        return (
            <Typography color="error" align="center" sx={{ mt: 4 }}>
                {error}
            </Typography>
        );
    }

    // Render if no product found
    if (!product) {
        return (
            <Typography align="center" sx={{ mt: 4 }}>
                No product found.
            </Typography>
        );
    }

    return (
        <Box sx={{ maxWidth: 870, mx: 'auto', p: 3 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Grid container spacing={4}>
                    {/* Product Image and Action Buttons */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <CardMedia
                            component="img"
                            image={product?.detailUrl || product?.url || '/path/to/fallback-image.jpg'}
                            alt={product?.title?.longTitle || 'Product Image'}
                            sx={{ width: '100%', mb: 2 }}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="warning"
                                    fullWidth
                                    disabled={!product?.stock} // Disable if product is out of stock
                                    sx={{ py: 1, mb: 1 }}
                                    onClick={handleAddToCart} // Add to cart handler
                                >
                                    Add to Cart
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="warning"
                                    fullWidth
                                    disabled={!product?.stock} // Disable if out of stock
                                    sx={{ py: 1 }}
                                >
                                    Buy Now
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Product Details */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                            {product?.title?.longTitle || 'Product Title'}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" paragraph>
                            {product?.description || 'No description available.'}
                        </Typography>

                        <Divider sx={{ my: 2 }} />

                        <Grid container spacing={2}>
                            {/* Price and MRP */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="textPrimary">Price:</Typography>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    ₹{product?.price?.cost || 'N/A'}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" color="textPrimary">MRP:</Typography>
                                <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
                                    ₹{product?.price?.mrp || 'N/A'}
                                </Typography>
                            </Grid>

                            {/* Discount */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="textPrimary">Discount:</Typography>
                                <Typography variant="body2" color="green">{product?.discount || 'N/A'}</Typography>
                            </Grid>

                            {/* Rating */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="textPrimary">Rating:</Typography>
                                <Typography variant="body2">
                                    {product?.rating || 'No rating'} ⭐
                                </Typography>
                            </Grid>

                            {/* Stock */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="textPrimary">Stock:</Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    {product?.stock ? 'In Stock' : 'Out of Stock'}
                                </Typography>
                            </Grid>

                            {/* Category */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="textPrimary">Category:</Typography>
                                <Typography variant="body2">{product?.category || 'Unknown'}</Typography>
                            </Grid>

                            {/* Tagline */}
                            <Grid item xs={12}>
                                <Typography variant="body2" color="textPrimary">Tagline:</Typography>
                                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>{product?.tagline || 'N/A'}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default ProductDetail;
