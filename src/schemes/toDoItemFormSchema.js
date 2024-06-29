import * as yup from 'yup';

export const toDoItemValidationSchema = yup.object({
  title: yup.string().required().label('Title').min(3).max(255),
  description: yup.string().required().label('Description').min(10)
});
