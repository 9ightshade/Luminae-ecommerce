import { Blog } from "./pages/Blog";
import { useState } from "react";

function App() {
  const [mobileNavDisplay, setmobileNavDisplay] = useState(false);
  return (
    <>
      <Blog
        mobileNavDisplay={mobileNavDisplay}
        setmobileNavDisplay={setmobileNavDisplay}
    
      />
      
    </>
  );
}

export default App;
