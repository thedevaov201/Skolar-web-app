import { Search,  } from "lucide-react"

import Resource from "../components/Resource"

const ResourcesPage = () => {
  return (
    <div>
      <h1 className='text-2xl'>Resource Library</h1>
      <p className="mt-2 text-sm text-gray-500">Download study materials, past questions, and reference documents</p>

      <div className='w-full p-6 bg-white rounded-md shadow-sm mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='relative'>
                <div className='text-gray-400 absolute top-[50%] left-2 translate-y-[-50%]'>
                  <Search size={18} />
                </div>
                <input type='text' placeholder='Search resources...' className='w-full text-sm py-2 pl-8 bg-gray-50 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary' />
            </div>

            <select className='w-full text-sm py-2 pl-4 bg-gray-50 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary'>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>All Departments</option>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>Computer Science</option>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>Mathematics</option>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>Physics</option>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>EEE</option>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>MEE</option>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>CVE</option>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>Biology</option>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>law</option>
            </select>

            <select className='w-full text-sm py-2 pl-4 bg-gray-50 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary'>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>All Levels</option>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>100</option>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>200</option>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>300</option>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>400</option>
              <option href='#' className='block text-sm text-gray-700 px-4 py-2 hover:bg-primary hover:text-white transition-colors'>500</option>
            </select>
        </div>
        <p className="mt-4 text-sm text-gray-400">8 resources found</p>
      </div>

      <Resource />
    </div>
  )
}

export default ResourcesPage
