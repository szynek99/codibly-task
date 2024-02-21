import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

type NullableKeys = 'id';
type NonNullableKeys = 'page' | 'per_page';
type ParamKeys = NullableKeys | NonNullableKeys;

const keys: NullableKeys[] = ['id'];
const keysWithDefaultValue: NonNullableKeys[] = ['page', 'per_page'];

const DEFAULT_PARAM_VALUES: Record<NonNullableKeys, string> = {
  page: '1',
  per_page: '5',
};

export const useParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = useCallback((key: ParamKeys) => searchParams.get(key) || '', [searchParams]);

  const setParam = useCallback(
    (key: ParamKeys, value?: string) => {
      if (value) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const getParams = useCallback(() => {
    const params = {} as Record<ParamKeys, string>;
    for (const key of keysWithDefaultValue) {
      params[key] = getParam(key) || DEFAULT_PARAM_VALUES[key];
    }

    for (const key of keys) {
      if (getParam(key)) {
        params[key] = getParam(key);
      }
    }

    return params;
  }, [getParam]);

  return { getParam, setParam, getParams };
};
