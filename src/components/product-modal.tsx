import { Box, List, Divider, ListItem, ListItemText, Typography } from '@mui/material';
import { getProduct } from 'api/services';
import { Product } from 'api/types';
import { FC, useEffect, useState } from 'react';
import { ModalComponent } from './modal';
import toast from 'react-hot-toast';

type ProductModalProps = {
  open: boolean;
  handleClose: () => void;
  productId?: number;
};

export const ProductModal: FC<ProductModalProps> = ({ open, handleClose, productId }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setLoading(true);
    if (productId) {
      getProduct(productId)
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          toast.error(error.message);
          handleClose();
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [handleClose, productId]);

  return (
    <ModalComponent open={open} handleClose={handleClose}>
      {loading ? (
        <Typography height={300} textAlign="center">
          Loading...
        </Typography>
      ) : (
        <List sx={{ paddingY: 0 }}>
          <ListItem>
            <ListItemText primary="Id" secondary={product?.id} />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Name" secondary={product?.name} />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Year" secondary={product?.year} />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText
              primary="Color"
              secondary={
                <Box display="flex" flexDirection="row" alignItems="center" gap={2} component="span">
                  <Box
                    width={25}
                    height={25}
                    sx={{ backgroundColor: product?.color }}
                    borderRadius="50%"
                    component="span"
                  />
                  {product?.color}
                </Box>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Pantone value" secondary={product?.pantone_value} />
          </ListItem>
        </List>
      )}
    </ModalComponent>
  );
};
