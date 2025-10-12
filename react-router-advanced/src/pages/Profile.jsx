import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "../components/ProfileDetails";
import ProfileSettings from "../components/ProfileSettings";

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <Link to="details" style={{ marginRight: "10px" }}>Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
