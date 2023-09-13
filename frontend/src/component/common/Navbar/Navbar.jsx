import React from 'react'
import style from './style'
import NavButton from './Buttons/NavButton'
import Alert from '../Alert/Alert'

export default function Navbar() {
  return (
    <>  
        {/* <Alert alertMessage={{isAlert: true, message: "All Good! just checking", type: "success"}} /> */}
        <nav style={style.nav}>
        <div style={style.leftBox} >
          <NavButton text={"Home"} path={'/'} />
          {/* <NavButton text={"Contact"} path={'/contact'} /> */}
          <NavButton text={"About"} path={'/about'} />
          <NavButton text={"Background"} path={'/resume'} />
        </div>
        </nav>
        </>
  )
}
