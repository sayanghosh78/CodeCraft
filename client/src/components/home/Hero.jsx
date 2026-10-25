import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroImage from "../../assets/itGuy1.png";

const people = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvMFDtJFJLzEYY5bLQhfUwWBljfDu4l0qhnyOhkya1SOWltYgSZQ11eU&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvMFDtJFJLzEYY5bLQhfUwWBljfDu4l0qhnyOhkya1SOWltYgSZQ11eU&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvMFDtJFJLzEYY5bLQhfUwWBljfDu4l0qhnyOhkya1SOWltYgSZQ11eU&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvMFDtJFJLzEYY5bLQhfUwWBljfDu4l0qhnyOhkya1SOWltYgSZQ11eU&s=10",
];

const keyPoints = [
  {
    point: "Architecture-first",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-network size-4 text-white/40"
      >
        <rect x="16" y="16" width="6" height="6" rx="1"></rect>
        <rect x="2" y="16" width="6" height="6" rx="1"></rect>
        <rect x="9" y="2" width="6" height="6" rx="1"></rect>
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
        <path d="M12 12V8"></path>
      </svg>
    ),
  },
  {
    point: "Project-driven courses",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-folder-git2 lucide-folder-git-2 size-4 text-white/40"
      >
        <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path>
        <circle cx="13" cy="12" r="2"></circle>
        <path d="M18 19c-2.8 0-5-2.2-5-5v8"></path>
        <circle cx="20" cy="19" r="2"></circle>
      </svg>
    ),
  },
  {
    point: "Free lessons included",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-circle-play size-4 text-white/40"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="10 8 16 12 10 16 10 8"></polygon>
      </svg>
    ),
  },
];

const highlights = [
  {
    topic: "Student discount",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-shield-check text-green-400"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    topic: "Free course previews",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-shield-check text-green-400"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    topic: "100% money-back guarantee",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-shield-check text-green-400"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
];

const Hero = () => {
  return (
    <section
      className="
            min-h-screen w-full
            bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,#110F1D_0%,#0D0B0E_45%,#0A0907_100%)]
            bg-[size:80px_80px,80px_80px,100%_100%]
        "
    >
      {/* Hero section container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pt-40 items-stretch px-6 md:px-0">
        {/* Left Container */}
        <div className="flex flex-col gap-8 items-start">
          {/* Key Highlights */}
          <div className="flex items-center">
            {/* Left Achivment Leaf icon */}
            <div>
              <svg
                viewBox="0 0 30 60"
                fill="none"
                class="hidden sm:block h-[45px] w-[30px] shrink-0 text-zinc-600"
                aria-hidden="true"
              >
                <path
                  d="M14.0947 9.35871C16.8587 9.08173 19.5519 5.86753 19.2482 1.59668C15.2005 2.17114 12.7117 6.59369 14.0947 9.35871Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M9.84495 15.0454C11.3313 13.8755 12.8841 8.96429 9.62272 5.5204C5.42024 8.68822 8.16782 14.1711 9.84495 15.0454Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M8.46051 23.3394C9.32182 21.6553 9.0378 16.0771 4.0246 15.0236C1.87123 19.234 6.57147 23.2461 8.46051 23.3394Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M8.77875 32.5161C9.07611 30.648 6.91525 24.8271 1.82228 25.3781C1.0788 30.0483 6.2582 32.8936 8.77875 32.5161Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M11.9011 41.4024C11.7067 39.4928 7.80018 34.1114 2.48796 34.954C3.04076 41.4024 10.0796 42.0072 11.9011 41.4024Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M17.5849 49.6023C16.9542 47.5302 10.9975 42.1893 5.07298 43.8383C7.33357 50.3866 15.6209 50.5148 17.5849 49.6023Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M24.8713 56.5979C23.8075 54.7112 17.1405 50.6749 11.7124 53.5655C14.3717 58.2824 21.3974 58.8228 24.8713 56.5979Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M26.5857 55.0667C28.347 54.4303 30.5452 48.9804 25.9242 46.1679C21.7057 49.784 24.2179 53.7486 26.5857 55.0667Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M19.5207 48.7717C21.3778 48.5311 24.5242 43.6143 20.6204 39.8695C15.7201 42.4882 18.3433 47.3157 19.5207 48.7717Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M13.8978 40.9918C15.6131 41.0353 18.6613 37.4608 16.1737 33.5105C12.0313 36.0546 13.0368 39.508 13.8978 40.9918Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M10.1811 32.3355C11.8166 32.7276 15.575 30.4957 14.2307 25.9681C9.53946 26.0767 9.8478 30.7897 10.1811 32.3355Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M10.12 23.6177C11.3059 24.3893 16.173 23.0644 16.1718 18.8474C12.0709 17.9523 10.1563 22.2037 10.12 23.6177Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M11.775 15.8755C12.9608 16.6471 18.1349 16.152 17.8265 11.7638C14.5411 11.176 11.8113 14.4615 11.775 15.8755Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
              </svg>
            </div>

            <div
              className="
                  flex items-center justify-center gap-2
                  px-3 py-2 rounded-3xl bg-white/[0.03]
                  border border-[#3a3a3c]/80
                "
            >
              <div className="flex -space-x-3">
                {people.map((image, index) => (
                  <div
                    key={index}
                    className="
                      h-6 w-6
                      overflow-hidden rounded-full
                      border-2 border-[#0D0B0E]
                    "
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Text */}
              <span className="whitespace-nowrap text-sm text-white/70">
                150K+ engineers follow us
              </span>

              {/* Rating */}
              <div className="flex items-center gap-1 text-sm text-yellow-400">
                <span>★</span>
                <span>4.9</span>
              </div>
            </div>

            {/* Right Achivment Leaf Icon */}
            <div>
              <svg
                viewBox="0 0 30 60"
                fill="none"
                class="hidden sm:block h-[45px] w-[30px] shrink-0 scale-x-[-1] text-zinc-600"
                aria-hidden="true"
              >
                <path
                  d="M14.0947 9.35871C16.8587 9.08173 19.5519 5.86753 19.2482 1.59668C15.2005 2.17114 12.7117 6.59369 14.0947 9.35871Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M9.84495 15.0454C11.3313 13.8755 12.8841 8.96429 9.62272 5.5204C5.42024 8.68822 8.16782 14.1711 9.84495 15.0454Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M8.46051 23.3394C9.32182 21.6553 9.0378 16.0771 4.0246 15.0236C1.87123 19.234 6.57147 23.2461 8.46051 23.3394Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M8.77875 32.5161C9.07611 30.648 6.91525 24.8271 1.82228 25.3781C1.0788 30.0483 6.2582 32.8936 8.77875 32.5161Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M11.9011 41.4024C11.7067 39.4928 7.80018 34.1114 2.48796 34.954C3.04076 41.4024 10.0796 42.0072 11.9011 41.4024Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M17.5849 49.6023C16.9542 47.5302 10.9975 42.1893 5.07298 43.8383C7.33357 50.3866 15.6209 50.5148 17.5849 49.6023Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M24.8713 56.5979C23.8075 54.7112 17.1405 50.6749 11.7124 53.5655C14.3717 58.2824 21.3974 58.8228 24.8713 56.5979Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M26.5857 55.0667C28.347 54.4303 30.5452 48.9804 25.9242 46.1679C21.7057 49.784 24.2179 53.7486 26.5857 55.0667Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M19.5207 48.7717C21.3778 48.5311 24.5242 43.6143 20.6204 39.8695C15.7201 42.4882 18.3433 47.3157 19.5207 48.7717Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M13.8978 40.9918C15.6131 41.0353 18.6613 37.4608 16.1737 33.5105C12.0313 36.0546 13.0368 39.508 13.8978 40.9918Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M10.1811 32.3355C11.8166 32.7276 15.575 30.4957 14.2307 25.9681C9.53946 26.0767 9.8478 30.7897 10.1811 32.3355Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M10.12 23.6177C11.3059 24.3893 16.173 23.0644 16.1718 18.8474C12.0709 17.9523 10.1563 22.2037 10.12 23.6177Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M11.775 15.8755C12.9608 16.6471 18.1349 16.152 17.8265 11.7638C14.5411 11.176 11.8113 14.4615 11.775 15.8755Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
              </svg>
            </div>
          </div>

          {/* Hrader Text */}
          <div>
            <h1 className="text-[54px] leading-15 font-bold">
              Master Production-Grade{" "}
              <span className="text-yellow-300">Software Engineering.</span>
            </h1>
          </div>

          {/* Sub-Header Text */}
          <div>
            <h4 className="text-xl leading-8 text-gray-400/90">
              Build the skills companies expect from strong software engineers -
              from architecture and databases to scalable, production-ready
              systems.
            </h4>
          </div>

          {/* Key Points */}
          <div className="flex items-center justify-center gap-6 text-gray-400/90">
            {keyPoints.map(({ point, icon }) => (
              <div key={point} className="flex gap-2 items-center text-sm">
                <span>{icon}</span>
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Navigate Buttons */}
          <div className="flex gap-5 items-center">
            <Link
              className="
                              group flex items-center
                              bg-[#FCD600] text-black font-semibold
                              px-8 py-4 rounded-3xl gap-3 text-[17px]
                              shadow-[0_0_20px_rgba(250,204,21,0.35),0_0_50px_rgba(250,204,21,0.25)]
                              
                            "
            >
              <span>Start Learning for Free</span>
              <ArrowRight
                size={19}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>

            <Link
              to={"/courses"}
              className="
                    flex items-center 
                    px-7 py-4 rounded-3xl border border-[#3a3a3c]/80
                  hover:bg-white/5 hover:border-white/40
                   transition-colors duration-300
                "
            >
              Check our Courses
            </Link>
          </div>

          {/* Highlights */}
          <div className="flex items-center justify-center gap-6 text-gray-400/90">
            {highlights.map(({ topic, icon }) => (
              <div key={topic} className="flex items-center gap-2 text-sm">
                <span>{icon}</span>
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Container */}
        <div className="relative w-full h-full min-h-[500px]">
          <img
            src={HeroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
