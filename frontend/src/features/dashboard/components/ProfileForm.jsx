import { useState } from "react"
import Input from "../../auth/components/Input"

const ProfileForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail ] = useState("")
  const [university, setUniversity] = useState("")
  const [department, setDepartment ] = useState("")
  
  return (
    <form>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <Input
            label="Name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <Input
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <Input
            label="University"
            type="text"
            placeholder="University"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
        />
        <Input
            label="Department"
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
        />
        <select className='w-full text-sm py-2 pl-4 bg-gray-50 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary'>
            <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>All Levels</option>
            <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>100</option>
            <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>200</option>
            <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>300</option>
            <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>400</option>
            <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>500</option>
        </select>
    </div>
    </form>
  )
}
export default ProfileForm
