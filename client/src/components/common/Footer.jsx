import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import Logo from "../../assets/Footer.png";

const socials = [
  {
    name: "X (Twitter)",
    url: "https://x.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },

  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },

  {
    name: "Discord",
    url: "https://discord.gg",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
      </svg>
    ),
  },

  {
    name: "YouTube",
    url: "https://youtube.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.86.502 5.74a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.86 24 12 24 12s0-3.86-.502-5.74zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const SocialLinks = ({ mobile = false }) => {
  return (
    <div className="flex items-center gap-3">
      {socials.map(({ name, url, icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={`
            flex shrink-0 items-center justify-center
            rounded-xl
            border border-[#3a3a3c]/40
            bg-linear-to-b from-[#2c2c2e]/80 to-[#1c1c1e]/80
            text-white
            shadow-[0_4px_10px_rgba(255,255,255,0.1)]
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:shadow-[0_10px_20px_rgba(255,255,255,0.25)]
            ${mobile ? "h-12 w-12" : "h-10 w-10"}
          `}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

const EmailLink = ({ mobile = false }) => {
  return (
    <a
      href="mailto:coderstack@gmail.com"
      className={`
        flex items-center justify-center gap-2
        transition-colors
        hover:text-white
        ${
          mobile
            ? "rounded-xl bg-linear-to-b from-[#2c2c2e]/80 to-[#1c1c1e]/80 px-8 py-2 text-lg text-gray-400/90"
            : "text-sm text-gray-400/90"
        }
      `}
    >
      {mobile && <Mail size={18} />}
      <span>coderstack@gmail.com</span>
    </a>
  );
};

const LegalLinks = () => {
  return (
    <div className="flex items-center gap-5">
      <Link
        to="/privacy-policy"
        className="transition-colors hover:text-white"
      >
        Privacy Policy
      </Link>

      <Link
        to="/refund-policy"
        className="transition-colors hover:text-white"
      >
        Refund Policy
      </Link>
    </div>
  );
};

const DesktopFooter = () => {
  return (
    <footer className="px-4 py-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-[#3a3a3c]/80">
        <div className="px-5 py-10 sm:px-8 lg:px-24 xl:px-35">

          {/* Top Section */}
          <div
            className="
              flex items-center justify-between
              border-b border-dashed border-[#3a3a3c]
              pb-5
            "
          >
            {/* Brand + Email */}
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-3"
              >
                <img
                  src={Logo}
                  alt="Coder's Craft"
                  className="h-10 w-10 object-contain"
                />

                <span className="text-lg font-bold">
                  Coder's Craft
                </span>
              </Link>

              <span className="text-xl text-gray-400/90">
                /
              </span>

              <EmailLink />
            </div>

            {/* Social Links */}
            <SocialLinks />
          </div>

          {/* Bottom Section */}
          <div
            className="
              flex items-center justify-between
              pt-5
              text-sm text-gray-400/90
            "
          >
            <span>
              © 2026 Coder's Craft — All rights reserved.
            </span>

            <LegalLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

const MobileFooter = () => {
  return (
    <footer className="mx-2 mb-4">
      <div
        className="
          flex flex-col
          rounded-3xl
          border border-[#3a3a3c]/80
          px-5 pb-8
        "
      >
        {/* Follow Section */}
        <div
          className="
            flex flex-col items-center
            gap-6
            border-b border-dashed border-[#3a3a3c]
            py-10
          "
        >
          <span className="text-xl font-bold text-gray-400/50">
            ~ Follow us ~
          </span>

          <SocialLinks mobile />

          <EmailLink mobile />
        </div>

        {/* Bottom Section */}
        <div
          className="
            flex flex-col items-center
            gap-3
            pt-5
            text-sm text-gray-400/90
          "
        >
          <LegalLinks />

          <span>
            © 2026 Coder's Craft — All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};



const Footer = () => {
  return (
    <>
      {/* Mobile: < 768px */}
      <div className="md:hidden">
        <MobileFooter />
      </div>

      {/* Desktop: ≥ 768px */}
      <div className="hidden md:block">
        <DesktopFooter />
      </div>
    </>
  );
};

export default Footer;