import React from "react";

import { Link } from "react-router-dom";

const Authorization = () => {
  return (

      <div   style = {{height: '50em', position: 'relative', backgroundImage : 'url(https://st2.depositphotos.com/1637332/9519/i/600/depositphotos_95196146-stock-photo-businessman-pressing-modern-technology-panel.jpg)', backgroundSize: 'cover'}}>
        <a style = {{color: 'black',margin: '0', position:' absolute', top: '50%', left: '50%',marginRight: '-50%',  transform: 'translate(-50%, -50%)' }}
        href="https://unsplash.com/oauth/authorize?client_id=8kg4TDfxSTMsMwOLpuObmbhy6PDXlT_JeNAvUF9ctlI&redirect_uri=http://localhost:8080/code&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections">
          Авторизоваться
        </a>
      </div>
  );
};
export default Authorization;
