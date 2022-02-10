import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/header';
import { Footer } from './Components/Footer/footer';
import {
  ErrorPage,
  StartPage,
  LoginPage,
  RegistrationPage,
  Validation,
  ListingPage,
  HelperListPage,
  JobListPage,
  HelperProfilePage,
  SearchPage,
  AboutPage,
  FAQPage,
  SupportPage,
  MyProfilePage,
  NewJob,
  PrivateJob,
  Job,
  ViewJob,
  MemberProfilePage,
  RegisterHomepage,
  RegisterHelper,
  RegisterMember,
} from './Pages';

export const RoutesIndex = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='p-4 pt-28 container md:container md:mx-auto'>
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='registration' element={<RegistrationPage />} />
            <Route path='validation' element={<Validation />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='search' element={<SearchPage />} />

            <Route path='faq' element={<FAQPage />} />
            <Route path='support' element={<SupportPage />} />

            <Route path='register' element={<RegisterHomepage />} />
            <Route path='member-register' element={<RegisterMember />} />
            <Route path='helper-register' element={<RegisterHelper />} />

            <Route path='listing' element={<ListingPage />}>
              <Route index element={<HelperListPage />} />
              <Route path='helpers' element={<HelperListPage />} />
              <Route path='jobs' element={<JobListPage />} />
            </Route>

            <Route path='job' element={<Job />}>
              <Route path=':jobID' element={<ViewJob />} />{' '}
              <Route path='new' element={<NewJob />} />
              <Route path='private' element={<PrivateJob />} />
            </Route>

            <Route path='member' element={<MemberProfilePage />} />

            <Route path='helper' element={<HelperProfilePage />} />

            <Route path='private-job' element={<PrivateJob />} />
            <Route path='my-profile' element={<MyProfilePage />} />

            <Route path='about' element={<AboutPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer className='p-5' />
      </BrowserRouter>
    </>
  );
};
