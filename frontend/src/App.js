import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from './Pages/Error/Error';
import { Header } from './Components/Header/header';
import { HomePage } from './Pages/Home/Home';
import { LoginPage } from './Pages/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
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

            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
