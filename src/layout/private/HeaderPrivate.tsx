import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const HeaderPrivate = () => {
  const [isLogin, setIsLogin] = useState(false)
  const url = useRouter();
  useEffect(()=>{
    if(url.pathname.includes('login'))
      setIsLogin(true)
  },[])
  return (
    <nav className="border-gray-20 fixed-header-private">
      <div className='flex flex-wrap justify-between items-center container-fluid header-group-menu'>
        <a href="" className="flex items-center">
          <img className="logo-header" src="/assets/images/toma-fun-lg.png" />
        </a>
        <button className={!isLogin ? "logout" : "hidden"}>ログアウト</button>
      </div>
    </nav>
  )
};

export { HeaderPrivate };
