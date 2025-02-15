import React from 'react'

function App() {
  return (
    <>
      <header className="header">
  <div className="logo">
    <img src="/logo.svg" alt="Logo" />
  </div>
  <div >
    <input className="search-bar" type="text" placeholder="Search..." />
  </div> 
  <div className="icons">
    <a href="#" className="icon">
      <img   src="https://static.vecteezy.com/system/resources/previews/000/450/352/original/notification-vector-icon.jpg" alt="Notifications" />
    </a>
    <a href="#" className="icon">
      <img  src="https://th.bing.com/th/id/OIP.RmYbsdvh7NdvW48q-twvTAHaHa?rs=1&pid=ImgDetMain" alt="Settings" />
    </a>
  </div>
</header>

    </>
  )
}

export default App