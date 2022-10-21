import * as React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ShortLink: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function loadURL(shorten: string) {
      try {
        const response = await axios.get(`http://localhost:3100/api/link/${shorten}`);
        if (response?.status === 200) {
          window.location.href = response.data.data.link;
        }
      } catch (err) {
        navigate("/");
      }
    }


    if (location?.pathname) {
      const path = location.pathname.substring(1);
      loadURL(path);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <div className='container min-h-screen h-auto bg-gray-100 mx-auto flex items-center justify-center'>
    <p>Loading</p>
  </div>;
}

export default ShortLink;