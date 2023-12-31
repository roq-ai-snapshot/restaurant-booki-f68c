import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  total_price: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  menu_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
