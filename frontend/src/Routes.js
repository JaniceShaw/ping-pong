import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/header';
import { Footer } from './Components/Footer/footer';
import {
  ErrorPage,
  StartPage,
  LoginPage,
  RegistrationPage,
  ListingPage,
  HelperListPage,
  JobListPage,
  HelperProfilePage,
  HelperInfo,
  HelperJobs,
  SearchPage,
  AboutPage,
  MyProfilePage,
  NewJob,
  Job,
  ViewJob,
  PrivateJob,
} from './Pages';

export const RoutesIndex = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='p-5'>
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='registration' element={<RegistrationPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='new-job' element={<NewJob />} />
            <Route path='view-job' element={<ViewJob />} />

            <Route path='listing' element={<ListingPage />}>
              <Route index element={<HelperListPage />} />
              <Route path='helpers' element={<HelperListPage />} />
              <Route path='jobs' element={<JobListPage />} />
            </Route>

            <Route path='Job' element={<Job />} />

            <Route path='helper-profile' element={<HelperProfilePage />}>
              <Route index element={<HelperInfo />} />
              <Route path='info' element={<HelperInfo />} />
              <Route path='jobs' element={<HelperJobs />} />
            </Route>

            <Route path='private-job' element={<PrivateJob />} />
            <Route path='my-profile' element={<MyProfilePage />} />

            <Route path='about' element={<AboutPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer className='p-5' />

        {/* <Route path="search" element={<Search />}>
              <Route index element={<Restaurants />} />
              <Route path="restaurants" element={<Restaurants />} />
              <Route path="reviews" element={<SearchReviews />} />
              <Route path="users" element={<Users />} />
            </Route>
            <Route path="restaurant">
              <Route path=":restaurantID" element={<RestaurantPage />} />
            </Route>
            <Route path="reviews/new" element={<NewReview />} />
            <Route path="profile" element={<Profile />}>
              <Route index element={<Reviews />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="comments" element={<Comments />} />
              <Route
                path="my-restaurants"
                element={<ProfileRestaurants />}
              ></Route>
              <Route path="edit-profile" element={<EditProfile />} />
            </Route>
            <Route path="restaurants/new" element={<NewRestaurant />} />

            <Route path="register" element={<Register />}>
              <Route index element={<RegistrationForm />} />
              <Route path="success" element={<RegisterSuccessPage />} />
              <Route path="new_user" element={<NewUserForm />} />
              <Route path="*" element={<ErrorPage />} />
            </Route> */}
      </BrowserRouter>
    </>
  );
};
