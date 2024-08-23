import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import AllDoctor from './pages/doctor/AllDoctor';
import DoctorsProfile from './pages/doctor/DoctorsProfile';
import NewPatient from './pages/patient/NewPatient';
import AllPatient from './pages/patient/AllPatient';
import NewPrescription from './pages/prescription/NewPrescription';
import AllPrescription from './pages/prescription/AllPrescription';
import NewAppointment from './pages/appointment/NewAppointment';
import Logins from './pages/auth/Logins';
import SignUps from './pages/auth/SignUps';

// import Patient from './pages/patient/Patient';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
      <Route
          path="/auth/logins"
          element={
            <>
              <PageTitle title="Logins Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Logins />
            </>
          }
        />
         <Route
          path="/auth/signups"
          element={
            <>
              <PageTitle title="SignUps | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUps />
            </>
          }
        />
        <Route
          path="/doctor/doctorsprofile"
          element={
            <>
              <PageTitle title="Doctors Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <DoctorsProfile />
            </>
          }
        />
         <Route
          path="/doctor/alldoctor"
          element={
            <>
              <PageTitle title="All Doctor | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AllDoctor />
            </>
          }
        />
        {/* <Route
          path="/patient"
          element={
            <>
              <PageTitle title="Patient | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Patient />
            </>
          }
        /> */}
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/patient/newpatient"
          element={
            <>
              <PageTitle title="New Patient | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <NewPatient />
            </>
          }
        />
         <Route
          path="/patient/allpatient"
          element={
            <>
              <PageTitle title="New Patient | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AllPatient />
            </>
          }
        />
         <Route
          path="/prescription/newprescription"
          element={
            <>
              <PageTitle title="New Prescription | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <NewPrescription />
            </>
          }
        />
         <Route
          path="/prescription/allprescription"
          element={
            <>
              <PageTitle title="All Prescription | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AllPrescription />
            </>
          }
        />
        
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
          <Route
          path="/appointment/newappointment"
          element={
            <>
              <PageTitle title="New Appointment | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <NewAppointment />
            </>
          }
        />
        <Route
          path="/appointment/newappointment"
          element={
            <>
              <PageTitle title="New Appointment | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <NewAppointment />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
