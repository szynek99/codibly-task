import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { styled } from '@mui/material/styles';

const SearchField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  width: 150,
  '& label': {
    color: theme.palette.common.white,
  },
  '& input': {
    color: theme.palette.common.white,
  },
  '& label.Mui-focused': {
    color: theme.palette.common.white,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.common.white,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.common.white,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.common.white,
      borderWidth: 2,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.common.white,
    },
  },
}));

export const SearchInput: FC = () => {
  return <SearchField label="Search" type="number" size="small" />;
};