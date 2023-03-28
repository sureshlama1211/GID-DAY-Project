import React from "react";
import Landingpage from "./Components/pages/Landingpage";
import Loginpage from "./Components/forms/Loginpage";
import Signup from "./Components/forms/Signup";
import Beforesignin from "./Components/pages/Beforesign";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignAsArtist from "./Components/forms/SignAsArtist";
import VerifyEmail from "./Components/pages/verifyEmail";
import EmailVerificationLandingPage from "./Components/pages/emailVerification/EmailVerificationLandingPage";
import ProtectedRoute from "./Components/protrctedRoute/ProtectedRoute";
import SignAsRestaurant from "./Components/forms/SignAsRestaurant";
import Error from "./error/404 error";
import SignAsViewer from "./Components/forms/SignAsViewer";
import FindArtist from "./Components/pages/pagesforrestaurant/FindArtist";
import DashBoardForRestaurant from "./Components/pages/pagesforrestaurant/DashBoardForRestaurant";
import DashBoardForArtist from "./Components/pages/PagesForArtist/DashBoardForArtist";
import ApplyForGig from "./Components/pages/PagesForArtist/ApplyForGig";
import SettingForRestaurant from "./Components/pages/pagesforrestaurant/SettingForRestaurant";
import DashBoardForViewer from "./Components/pages/pages for viewer/DashboardForViewer";
import FindShows from "./Components/pages/pages for viewer/FindShows";
import ViewArtist from "./Components/pages/pages for viewer/ViewArtist";
import SettingForArtist from "./Components/pages/PagesForArtist/SettingForArtist";
import SettingForViewer from "./Components/pages/pages for viewer/SettingForViewer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/beforesign" element={<Beforesignin />} />

        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route
          path="/verify-email/:verificationString"
          element={<EmailVerificationLandingPage />}
        />
        <Route
          path="/signasartist"
          element={
            <ProtectedRoute>
              <SignAsArtist />
            </ProtectedRoute>
          }
        />
        <Route path="/signasrestaurant" element={<SignAsRestaurant />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/signasviewer" element={<SignAsViewer />}></Route>
        <Route path="/findartist" element={<FindArtist />}></Route>
        <Route
          path="/dashboardforrestaurant"
          element={<DashBoardForRestaurant />}
        ></Route>
        <Route path="/dashboardforartist" element={<DashBoardForArtist />} />
        <Route path="/settingforartist" element={<SettingForArtist />} />
        <Route path="/applyforgig" element={<ApplyForGig />} />
        <Route path="/prosetforres" element={<SettingForRestaurant />} />
        <Route path="/dashboardforviewer" element={<DashBoardForViewer />} />
        {/* pages for viewer */}
        <Route path="/findshows" element={<FindShows />} />
        <Route path="/viewartist" element={<ViewArtist />} />
        <Route path="/settingforviewer" element={<SettingForViewer />} />
      </Routes>
      {/* for artist */}
    </BrowserRouter>
  );
}

export default App;
