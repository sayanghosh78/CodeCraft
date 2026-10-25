import { ArrowRight, Crown, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const CourseMeta = ({course}) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <p className="text-[15px] font-semibold tracking-[0.18em] text-zinc-500 uppercase">
          {course.category}
        </p>

        <h1 className="text-2xl md:text-3xl">
          {course.title}
        </h1>

        <p className="max-w-2xl leading-7 text-lg md:text-xl text-zinc-400">
          {course.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {course.technologies.map((item) => (
            <li
              key={item.name}
              className="inline-flex items-center h-7 gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-2.5 text-xs text-zinc-300 "
            >
              <img src={item.icon} width={10} height={10} alt="" />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col mt-4 gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              {course.community.avatars.map((avatar) => (
                <img
                  key={avatar.id}
                  src={avatar}
                  className="
                                h-8 w-8 rounded-full
                                border-[3px] border-[#1a1a1a]
                                object-cover -ml-3 first:ml-0
                            "
                />
              ))}
            </div>
            
            <span className="text-sm text-zinc-400">
              {"Join "}

              <span className="font-medium text-white">
                {"1350"}
                {"+"}
              </span>

              {" engineers"}
            </span>
          </div>

          <div className="flex items-center gap-8">
            <span className="flex items-center text-2xl font-bold">
              <IndianRupee width={18} height={18} />
              {course.price}
            </span>
            <Link className="flex items-center gap-1.5 bg-[#135DFB] rounded-full px-7 py-3 font-semibold text-[16px] text-white">
              Details{" "}
              <span>
                <ArrowRight width={18} height={18} />
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-1.5">
            <span>
              <Crown color="yellow" width={15} height={15} />
            </span>
            <span className="text-xs text-gray-500 hover:text-white transition-colors duration-300">
              Included in Full Platform Access
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMeta;
