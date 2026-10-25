import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";




const CourseCurriculumPreview = ({course}) => {
  return (
    <div className="flex flex-col space-y-12">
        <div className="flex flex-col gap-6">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#FFDF20] uppercase">
                inside the course
            </p>
            <div className="space-y-2">
                {course.curriculum.map((item) => (
                    <ol key={item.id} className="grid gap-2">
                        <li className="flex items-baseline gap-3 text-sm text-zinc-200">

                            <span className="w-5 shrink-0 text-xs font-mono text-zinc-500">
                                {item.id}
                            </span>

                            <span>
                                {item.title}
                            </span>
                        </li>
                    </ol>
                ))}
            </div>
        </div>

        <div>
            <Link className="group flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-300">
                <span className="text-cyan-400 hover:text-cyan-600 transition-colors">See the full syllabus</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300"><ArrowRight width={18} height={18}/></span>
            </Link>
        </div>
    </div>
  )
}

export default CourseCurriculumPreview