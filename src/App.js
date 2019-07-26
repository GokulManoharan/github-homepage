import React from 'react'
import './App.css'
import './queries.css'

// importing components
import Contents from './components/contents/Contents'
import ProfileSection from './components/profileSection/ProfileSection'

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <ProfileSection className="profile" />
        </div>
        <div className="col-md-9 contents">
          <Contents />
        </div>
      </div>       
    </div>
  );
}

export default App;
