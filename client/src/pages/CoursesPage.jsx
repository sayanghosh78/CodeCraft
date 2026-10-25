
import { CourseCard } from '../components/courses/CourseCard'
import coursesData from '../data/coursesData'

const CoursesPage = () => {
  return (
    <div className='min-h-screen w-full bg-[#0A0907] pt-40 space-y-45'>
        
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        
    </div>
  )
}

export default CoursesPage