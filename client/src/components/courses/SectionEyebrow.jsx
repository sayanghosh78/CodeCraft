

const SectionEyebrow = ({course}) => {
  return (
    <div className='flex- flex-col space-y-5'>
        <div className='flex items-center gap-4'>
            <span className='text-sm text-blue-500'>{course.section.number}</span>
            <span className='text-xs text-zinc-300 uppercase font-semibold tracking-[0.2em]'>
              {course.section.label}
            </span>
        </div>

        <h2 className='max-w-4xl text-pretty font-bold text-2xl md:text-3xl tracking-tight leading-tight'>
            <span className='text-zinc-500'>{course.section.headingMuted}</span>
            <span className='text-white'>{course.section.headingHighlight}</span>
        </h2>
    </div>
  )
}

export default SectionEyebrow