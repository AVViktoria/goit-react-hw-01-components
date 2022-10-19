import React from "react";
// import PropTypes from "prop-types";
import Profile from "./components/Profile";
import user from "./DATA/user.json";

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}
