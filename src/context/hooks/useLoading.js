import { useMemo } from 'react'
import { useNecoBot } from '../NecoBot_context';

export const useLoading = () => {
  const { dispatch } = useNecoBot();

  const loading = useMemo(
    () => ({
      run: () => dispatch({ type: 'LOADING_RUN' }),
      stop: () => dispatch({ type: 'LOADING_STOP' }),
    }),
    [dispatch]
  );

  return loading;
};