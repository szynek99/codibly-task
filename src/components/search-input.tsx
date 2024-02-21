import { FC, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useParams } from 'hooks/use-params';
import { TextField, TextFieldProps } from '@mui/material';

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
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
}));

export const SearchInput: FC = () => {
  const [inputValue, setInputValue] = useState<string>();
  const { getParam, setParam } = useParams();

  useEffect(() => {
    const setSearch = setTimeout(() => {
      setParam('id', inputValue);
    }, 200);

    return () => clearTimeout(setSearch);
  }, [inputValue, setParam]);

  useEffect(() => {
    setInputValue(getParam('id'));
  }, [getParam]);

  return (
    <SearchField
      label="Search by id"
      type="number"
      size="small"
      value={inputValue || ''}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
