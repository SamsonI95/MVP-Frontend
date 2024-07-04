import React from 'react'
import PasswordField from '../formFields/PasswordField'

const ChangePassword = () => {
  return (
    <div className='w-[482px] flex flex-col items-start gap-8'>
        <PasswordField
            label={`Old Password`}
            placeholder={`*********`}
        />
        <PasswordField
            label={`New Password`}
            placeholder={`********`}
        />
        <PasswordField
            label={`Confirm Password`}
            placeholder={`********`}
        />
    </div>
  )
}

export default ChangePassword