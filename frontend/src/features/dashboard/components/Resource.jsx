import { ArrowBigDownDash, ArrowDown, File, GraduationCap } from "lucide-react"

const resources = [
    {
        title: "Introduction to Data Structures and Algorithm", 
        content: "Comprehensive guide covering arrays, linked list, tress, graphs, and sorting algorithms",
        department: "Computer Science",
        courseCode: "CSC 301",
        level: "300",
        size: "2.4 MB",
        stat: "1234"
    },
    {
        title: "Financial Accounting Principles", 
        content: "Comprehensive guide covering arrays, linked list, tress, graphs, and sorting algorithms",
        department: "Computer Science",
        courseCode: "CSC 301",
        level: "300",
        size: "2.4 MB",
        stat: "1234"
    },
    {
        title: "Human Anatomy and Physiology", 
        content: "Comprehensive guide covering arrays, linked list, tress, graphs, and sorting algorithms",
        department: "Computer Science",
        courseCode: "CSC 301",
        level: "300",
        size: "2.4 MB",
        stat: "1234"
    },
    {
        title: "Engineering Mathematics II", 
        content: "Comprehensive guide covering arrays, linked list, tress, graphs, and sorting algorithms",
        department: "Computer Science",
        courseCode: "CSC 301",
        level: "300",
        size: "2.4 MB",
        stat: "1234"
    },
    {
        title: "Research Methodology and Statistics", 
        content: "Comprehensive guide covering arrays, linked list, tress, graphs, and sorting algorithms",
        department: "Computer Science",
        courseCode: "CSC 301",
        level: "300",
        size: "2.4 MB",
        stat: "1234"
    },
    {
        title: "Organic Chemistry Lab Manual", 
        content: "Comprehensive guide covering arrays, linked list, tress, graphs, and sorting algorithms",
        department: "Computer Science",
        courseCode: "CSC 301",
        level: "300",
        size: "2.4 MB",
        stat: "1234"
    },
    {
        title: "Marketing Management Strategies", 
        content: "Comprehensive guide covering arrays, linked list, tress, graphs, and sorting algorithms",
        department: "Computer Science",
        courseCode: "CSC 301",
        level: "300",
        size: "2.4 MB",
        stat: "1234"
    },
    {
        title: "Constitutional Law and Governance", 
        content: "Comprehensive guide covering arrays, linked list, tress, graphs, and sorting algorithms",
        department: "Computer Science",
        courseCode: "CSC 301",
        level: "300",
        size: "2.4 MB",
        stat: "1234"
    }
]

const Resource = () => {
  return (
    <div>
      {resources.map((resource, index) => (
        <div key={index} className='w-full p-6 bg-white rounded-md shadow-sm mt-10'>
            <div className='flex space-x-4'>
                <div className='size-8 bg-primary/10 text-primary rounded-sm grid place-items-center'>
                    <File size={15} />
                </div>
                <div className="w-full flex items-center justify-between">
                    <div>
                        <h1>{resource.title}</h1>
                        <p className="mt-1 text-sm text-gray-500">{resource.content}</p>

                        <div className="mt-2 flex items-center space-x-2">
                            <p className="text-[10px] text-gray-500 flex items-center">
                                <File size={10} className="mr-1"/>
                                <span>{resource.department}</span>
                            </p>
                            <p className="text-[10px] text-gray-500 flex items-center">
                                <File size={10} className="mr-1"/>
                                {resource.courseCode}
                            </p>
                            <p className="text-[10px] text-gray-500 flex items-center">
                                <GraduationCap size={10} className="mr-1"/>
                                {resource.level} Level
                            </p>
                            <p className="text-[10px] text-gray-500 flex items-center">
                                <File size={10} className="mr-1"/>
                                PDF .{resource.size}
                            </p>
                            <p className="text-[10px] text-gray-500 flex items-center">
                                <ArrowBigDownDash size={10} className="mr-1"/>
                                {resource.stat} Downloads
                            </p>
                        </div>
                    </div>

                    <div>
                        <button className="flex items-center justify-center text-white text-sm bg-primary/90 hover:bg-primary transition-colors px-4 py-2 rounded-md">
                            <ArrowDown size={10} className="mr-2"/>
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Resource
