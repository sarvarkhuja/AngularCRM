import { map } from 'rxjs/operators';
import { ResponseModel } from '../models/base/response.model';

/**
 *
 */
export const gridMap = map((data: ResponseModel<any>) => {
  return data.result;
});

/**
 *
 */
export const selectMap = map((s: ResponseModel<any>) =>
  s.result.map(w => {
    return {
      text: w.text,
      value: Number(w.value)
    };
  })
);
