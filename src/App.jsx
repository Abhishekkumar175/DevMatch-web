import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

import NavBar from "./components/home/NavBar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import HowItWorks from "./components/home/HowItWorks";
import Testimonials from "./components/home/Testimonials";
import CTA from "./components/home/CTA";
import Footer from "./components/home/Footer";



// Home Page Layout
const HomePageLayout = () => (
  <div className="min-h-screen bg-gray-950 text-white">
    <NavBar />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </main>
    <Footer />
  </div>
);

// A reusable layout for pages like Feed, Profile, etc.
const PageWithLayout = ({ children }) => (
  <Body>{children}</Body>  // pass children instead of Outlet
);

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePageLayout />} />
          <Route path="/login" element={<Login />} />

          {/* Protected routes using layout */}
          <Route
            path="/feed"
            element={
              <PageWithLayout>
                <Feed />
              </PageWithLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <PageWithLayout>
                <Profile />
              </PageWithLayout>
            }
          />
          <Route
            path="/connections"
            element={
              <PageWithLayout>
                <Connections />
              </PageWithLayout>
            }
          />
          <Route
            path="/requests"
            element={
              <PageWithLayout>
                <Requests />
              </PageWithLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
