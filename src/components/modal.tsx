import { Modal, Box, colors, IconButton } from '@mui/material';

import { FC, ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';

type ModalComponentProps = {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
};

export const ModalComponent: FC<ModalComponentProps> = ({ open, handleClose, children }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        padding={2}
        boxShadow={24}
        width={300}
        sx={{ transform: 'translate(-50%, -50%)', backgroundColor: colors.grey[100] }}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>

        {children}
      </Box>
    </Modal>
  );
};
