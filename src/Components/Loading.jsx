import React from 'react'

export default function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 3000); 
  
      
      return () => clearTimeout(timeout);
    }, []); 
  return (
    <div className="loading">
   <img src={require("../Components/assets/Navbar/loader.gif")}/>
  </div>
  )
}
