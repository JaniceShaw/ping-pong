import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/header';
import { Footer } from './Components/Footer/footer';
import {
  ErrorPage,
  StartPage,
  LoginPage,
  RegistrationPage,
  Validation,
  CreateUserPage,
  ListingPage,
  HelperListPage,
  JobListPage,
  HelperProfilePage,
  HelperInfo,
  HelperJobs,
  SearchPage,
  AboutPage,
  FAQPage,
  SupportPage,
  MyProfilePage,
  NewJob,
  PrivateJob,
  Job,
  MapPage,
  ViewJob,
  MemberProfilePage,
  MemberInfo,
  MemberJobs,
  EditHelper,
  EditMember,
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
            <Route path='create-user' element={<CreateUserPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='new-job' element={<NewJob />} />
            <Route path='private-job' element={<PrivateJob />} />
            <Route path='view-job' element={<ViewJob />}>
              <Route path=':jobID' element={<ViewJob />} />
            </Route>
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

            <Route path='Job' element={<Job />} />

            <Route path='member-profile' element={<MemberProfilePage />}>
              <Route index element={<MemberInfo />} />
              <Route path='edit' element={<EditMember />} />
              <Route path='info' element={<MemberInfo />} />
              <Route path='jobs' element={<MemberJobs />} />
            </Route>

            <Route path='helper-profile' element={<HelperProfilePage />}>
              <Route index element={<HelperInfo />} />
              <Route path='edit' element={<EditHelper />} />
              <Route path='info' element={<HelperInfo />} />
              <Route path='jobs' element={<HelperJobs />} />
            </Route>

            <Route path='private-job' element={<PrivateJob />} />
            <Route path='my-profile' element={<MyProfilePage />} />

            <Route path='maps' element={<MapPage />} />

            <Route path='about' element={<AboutPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer className='p-5' />
      </BrowserRouter>
    </>
  );
};
