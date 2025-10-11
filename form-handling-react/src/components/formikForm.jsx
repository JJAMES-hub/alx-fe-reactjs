import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define validation schema
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const FormikForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Formik form submitted:', values);

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => console.log('Mock API response:', data));

    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="flex flex-col gap-3 max-w-sm mx-auto mt-10">
          <div>
            <Field name="username" type="text" placeholder="Username" className="border p-2 rounded w-full" />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field name="email" type="email" placeholder="Email" className="border p-2 rounded w-full" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field name="password" type="password" placeholder="Password" className="border p-2 rounded w-full" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
