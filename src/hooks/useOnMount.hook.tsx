/**
 * thi effect will be call only once
 */
import { useEffect } from 'react';
// eslint-disable-next-line react-hooks/exhaustive-deps
export const useMountEffect = fun => useEffect(fun, []);
