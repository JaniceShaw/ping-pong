import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/header';
import { Footer } from './Components/Footer/footer';
import {
  StartPage,
  Register,
  Validation,
  LoginPage,
  ListingPage,
  HelperListPage,
  JobListPage,
  Job,
  NewJob,
  PrivateJob,
  HelperProfilePage,
  MemberProfilePage,
  AboutPage,
  FAQPage,
  SupportPage,
  ErrorPage,
  // MyProfilePage,
} from './Pages';

export const RoutesIndex = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='p-4 pt-20 container md:container md:mx-auto bg-bg_light'>
          <Routes>
            <Route path='/' element={<StartPage />} />

            <Route path='register' element={<Register />} />
            <Route path='register/validation' element={<Validation />} />

            <Route path='login' element={<LoginPage />} />

            <Route path='listing' element={<ListingPage />}>
              <Route index element={<HelperListPage />} />
              <Route path='helpers' element={<HelperListPage />} />
              <Route path='jobs' element={<JobListPage />} />
            </Route>

            <Route path='job' element={<Job />}>
              <Route path=':jobID' element={<Job />} />{' '}
            </Route>

            <Route path='job/new' element={<NewJob />} />
            <Route path='job/private' element={<PrivateJob />} />

            <Route path='member' element={<MemberProfilePage />} />

            <Route path='helper' element={<HelperProfilePage />}>
              <Route path=':profileID' element={<HelperProfilePage />} />
            </Route>

            <Route path='support' element={<SupportPage />} />
            <Route path='faq' element={<FAQPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer className='p-5' />
      </BrowserRouter>
    </>
  );
};
