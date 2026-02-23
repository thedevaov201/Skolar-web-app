import { Heart, MessageCircle, Share} from "lucide-react"

const feeds = [
    {
        image: "/user1.jpg",
        name: "Adeleke Victory",
        university: "Ladoke Akintola University of Technology",
        department: "Computer Science",
        level: "200",
        time: "2 hours",
        message: "Just finished my final year project presentation!",
        likes: 45,
        comments: 12
    },
    {
        image: "/user1.jpg",
        name: "Adeleke Victory",
        university: "Ladoke Akintola University of Technology",
        department: "Computer Science",
        level: "200",
        time: "2 hours",
        message: "Just finished my final year project presentation!",
        likes: 45,
        comments: 12
    },
    {
        image: "/user1.jpg",
        name: "Adeleke Victory",
        university: "Ladoke Akintola University of Technology",
        department: "Computer Science",
        level: "200",
        time: "2 hours",
        message: "Just finished my final year project presentation!",
        likes: 45,
        comments: 12
    },
    {
        image: "/user1.jpg",
        name: "Adeleke Victory",
        university: "Ladoke Akintola University of Technology",
        department: "Computer Science",
        level: "200",
        time: "2 hours",
        message: "Just finished my final year project presentation!",
        likes: 45,
        comments: 12
    },
    {
        image: "/user1.jpg",
        name: "Adeleke Victory",
        university: "Ladoke Akintola University of Technology",
        department: "Computer Science",
        level: "200",
        time: "2 hours",
        message: "Just finished my final year project presentation!",
        likes: 45,
        comments: 12
    }
]

const CommunityFeeds = () => {
  return (
    <div className="mt-10 space-y-4">
      {feeds.map((feed, index) => (
        <div key={index} className='w-full p-6 bg-white rounded-md shadow-sm'>
          <div className="flex space-x-3">
            <img src={feed.image} className="size-10 rounded-full"/>
            <div>
              <h1>{feed.name}</h1>
              <p className="text-[10px] text-gray-400">{feed.university} . {feed.department} . {feed.level} Level</p>
              <p className="text-[8px] text-gray-400">{feed.time} ago</p>

              <h2 className="my-4 text-sm">{feed.message}</h2>

              <div className="flex space-x-2">
                <p className="text-[10px] text-gray-500 flex items-center">
                  <Heart size={10} className="mr-1"/>
                  <span>{feed.likes}</span>
                </p>
                <p className="text-[10px] text-gray-500 flex items-center">
                  <MessageCircle size={10} className="mr-1"/>
                  <span>{feed.likes}</span>
                </p>
                <p className="text-[10px] text-gray-500 flex items-center">
                  <Share size={10} className="mr-1"/>
                  <span>Share</span>
                </p>
              </div>

            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default CommunityFeeds
