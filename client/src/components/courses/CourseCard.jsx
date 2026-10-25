
import CourseCurriculumPreview from './CourseCurriculumPreview'
import CourseMeta from './CourseMeta'
import SectionEyebrow from './SectionEyebrow'

export const CourseCard = ({course}) => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div>
            <SectionEyebrow course={course}/>
        </div>
        
        <div className='w-full grid grid-cols-1 lg:grid-cols-[60%_40%] border border-[#3a3a3c]/40  hover:border-[#3a3a3c]/90 transition-colors duration-300 rounded-3xl py-6 mt-10 cursor-pointer'>
            <div className='pl-9 py-4'>
                <CourseMeta course={course} />
            </div>
            <div className='border-t border-white/15 lg:border-t-0 lg:border-l lg:border-dashed lg:border-white/15 pl-9 py-4'>
                <CourseCurriculumPreview course={course} />
            </div>
        </div>
    </div>
  )
}
