import { ArrowDownToLine, Camera, Book, MessageCircle } from "lucide-react"
import ProfileForm from "../components/ProfileForm"

const ProfilePage = () => {
  return (
    <div>
      <h1 className='text-2xl'>My Profile</h1>
      <p className="mt-2 text-sm text-gray-500">Manage your account information and preferences</p>

      <div className='w-full pb-6 bg-white rounded-md shadow-sm mt-10'>
        <div className='w-full h-20 bg-primary rounded-t-md'></div>

        <div className="px-6">

          <div className="flex justify-items-center justify-between">
            <div className="relative flex space-x-4">
              <div className='relative size-20 -top-10'>
                <img src='/user1.jpg' className='size-full rounded-full'/>
                <div className='absolute -bottom-1 -right-1 size-6 bg-primary text-white grid place-items-center rounded-full'>
                  <Camera size={12} />
                </div>
              </div>
              <div>
                  <h1 className="text-lg">Adeleke Victory</h1>
                  <p className="text-gray-400 text-sm font-semibold">University of Ilorin . Computer Science . 300 Level</p>
              </div>
            </div>

            <div>
              <button className="mt-2 flex items-center justify-center text-white text-sm bg-primary/90 hover:bg-primary transition-colors px-4 py-2 rounded-md">
                Edit Profile
              </button>  
            </div>

          </div>
            <ProfileForm />


        </div>
        
      </div>
        {/* Box 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="px-6 py-4 bg-white rounded-md shadow-sm">
                <div className="size-12 flex items-center justify-center bg-primary rounded-md">
                    <Book size={24} className="text-white"/>
                </div>
                <h1 className="text-3xl mt-4">24</h1>
                <p className="mt-2 text-sm text-gray-500">Articles Read</p>
            </div>

            <div className="px-6 py-4 bg-white rounded-md shadow-sm">
                <div className="size-12 flex items-center justify-center bg-green-400 rounded-md">
                    <ArrowDownToLine size={24} className="text-white"/>
                </div>
                <h1 className="text-3xl mt-4">12</h1>
                <p className="mt-2 text-sm text-gray-500">Resources Downloaded</p>
            </div>

            <div className="px-6 py-4 bg-white rounded-md shadow-sm">
                <div className="size-12 flex items-center justify-center bg-primary rounded-md">
                    <MessageCircle size={24} className="text-white"/>
                </div>
                <h1 className="text-3xl mt-4">8</h1>
                <p className="mt-2 text-sm text-gray-500">Community Post</p>
            </div>             
        </div>

    </div>
  )
}

export default ProfilePage
