import React from 'react'
import CommunityFeeds from '../components/CommunityFeeds'

const CommunityPage = () => {
  return (
    <div>
      <h1 className='text-2xl'>Community Feed</h1>
      <p className="mt-2 text-sm text-gray-500">Connect with fellow students, shares experiences, and collaborate</p>

      <div className='w-full p-6 bg-white rounded-md shadow-sm mt-10'>
        <div className='flex space-x-2'>
          <img src='/user1.jpg' className='size-10 rounded-full'/>
          <textarea className='w-full h-18 text-sm p-3 text-gray-400 border border-gray-200 rounded-md' placeholder='share something with the community...'/>
        </div>
        <div className='w-full flex justify-end mt-4'>
          <button className='px-4 py-2 text-white text-sm bg-primary/90 hover:bg-primary rounded-sm transition-colors'>Post</button>
        </div>
      </div>

      <CommunityFeeds />
    </div>
  )
}

export default CommunityPage
