import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  const {
    items,
    total,
    clearCart,
  } = useCart();

  const handlePayment = () => {
    alert('Payment successful! Order placed.');

    clearCart();

    navigate('/');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>

        <Typography
          variant="h3"
          gutterBottom
        >
          Checkout Page
        </Typography>

        <Paper sx={{ p: 4 }}>

          <Typography
            variant="h5"
            gutterBottom
          >
            Order Summary
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 2,
              }}
            >
              <Typography>
                {item.name} × {item.quantity}
              </Typography>

              <Typography>
                $
                {(
                  (typeof item.price === 'string'
                    ? parseFloat(item.price)
                    : item.price) * item.quantity
                ).toFixed(2)}
              </Typography>
            </Box>
          ))}

          <Divider sx={{ my: 3 }} />

          <Typography
            variant="h6"
            sx={{ mb: 3 }}
          >
            Total: ${total.toFixed(2)}
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
            onClick={handlePayment}
          >
            Pay Now
          </Button>

        </Paper>
      </Box>
    </Container>
  );
};

export default Checkout;