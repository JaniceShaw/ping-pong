import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/header';
import { Footer } from './Components/Footer/footer';
import {
  StartPage,
  RegisterHomepage,
  RegisterHelper,
  RegisterMember,
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
        <main>
          <Routes>
            <Route path='/' element={<StartPage />} />

            <Route path='register' element={<RegisterHomepage />} />
            <Route path='register/member' element={<RegisterMember />} />
            <Route path='register/helper' element={<RegisterHelper />} />
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

            <Route path='member' element={<MemberProfilePage />}>
              <Route path=':profileID' element={<MemberProfilePage />} />
            </Route>

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
