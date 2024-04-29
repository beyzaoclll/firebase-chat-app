import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RoomPage from './pages/RoomPage'
import ChatPage from './pages/ChatPage'

const App = () => {
  // kullanıcnın yetkisi var mı state'i
  const [isAuth, setIsAuth] = useState(localStorage.getItem("refreshToken"))

  // kullanıcının hangi odaya girdiğinin state'i
  const [room, setRoom] = useState(null);

  //yetkisi yoksa >> giriş sayfası
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />

  //yetkisi varsa >> oda seçme sayfası
  return <div className="container">
    {room ? (
        // oda seçildiyse > sohbet sayfası
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        // oda tanımsızsa > oda seçme sayfası
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
  </div>
}

export default App