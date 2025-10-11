import ControlledForm from './components/ControlledForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">User Registration</h1>

      <h2 className="text-xl mt-8 mb-2 text-center">Controlled Component Form</h2>
      <ControlledForm />

      <h2 className="text-xl mt-12 mb-2 text-center">Formik + Yup Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;
