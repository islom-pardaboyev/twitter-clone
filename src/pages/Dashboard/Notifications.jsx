import React from 'react'
import { DarkLightModeBtn } from '../../assets/images/Icons'

function Notifications() {
  return (
    <>
      <div className="p-5 flex items-center justify-between border-b border-gray">
        <p className="font-bold text-[24px] leading-[31.92px]">Notifications</p>
        <DarkLightModeBtn />
      </div>
    </>
  )
}

export default Notifications