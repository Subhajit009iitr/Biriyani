// import React from 'react';
// import Cover from "../components/covers/cover";
// import HomeBody from '../components/covers/homeBody';
// import NavBar from '../components/navbars/nav';

// function Home() {

//   return (
//     <div>
//         <NavBar/>
//         <Cover/>
//         <HomeBody/>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from 'react';
import Cover from "../components/covers/cover";
import HomeBody from '../components/covers/homeBody';
import NavBar from '../components/navbars/nav';

function Home() {
  // Step 1: Manage state in the parent component
  const [selectedImage, setSelectedImage] = useState(null);

  // Step 2: Handle card clicks to update the cover image
  const handleCardClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div>
        <NavBar />
        <Cover selectedImage={selectedImage} />
        <HomeBody onCardClick={handleCardClick} />
    </div>
  );
}

export default Home;
