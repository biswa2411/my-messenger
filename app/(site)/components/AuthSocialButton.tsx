import { IconType } from "react-icons"

interface AuthSocialButtonProps{
    icon:IconType,
    onClick?:()=>void
}

const AuthSocialButton:React.FC<AuthSocialButtonProps> = ({
    icon:Icon,
    onClick
}) => {
  return (
   <button 
   type="button"
   onClick={onClick}
   className="
   inline-flex
   w-full
   justify-center
   px-4
   py-2
   rounded-md
   bg-white
   text-gray-500
   shadow-sm
   ring-1
   ring-inset
   ring-gray-300
   hover:bg-gray-50
   focus:outline-offset-0
   "
   >
<Icon/>
   </button>
  )
}

export default AuthSocialButton