import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

type ParamKeys = 'page' | 'per_page';

const defaultParams = {
  page: '1',
  per_page: '5',
};

export const useParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = useCallback((key: ParamKeys) => searchParams.get(key) || '', [searchParams]);

  const setParam = useCallback(
    (key: ParamKeys, value: string) => {
      searchParams.set(key, value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const getParams = useCallback(() => {
    const params = {} as Record<ParamKeys, string>;
    for (const key of ['page', 'per_page'] as ParamKeys[]) {
      params[key] = getParam(key) || defaultParams[key];
    }
    return params;
  }, [getParam]);

  return { getParam, setParam, getParams };
};
