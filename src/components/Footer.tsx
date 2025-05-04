import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start text-center lg:text-left space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Logo Section */}
          <div className="w-full lg:w-1/3 mb-6">
            <span className="text-3xl font-bold text-blue-600 uppercase tracking-wider">
              Mian <span className="text-red-600">$ab</span>
            </span>

            <p className="mt-2">
              Building amazing websites with Next.js and Tailwind CSS.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full lg:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.26 4.26 0 001.88-2.37 8.45 8.45 0 01-2.7 1.04 4.22 4.22 0 00-7.18 3.85A12 12 0 012 5.3a4.22 4.22 0 001.31 5.64 4.2 4.2 0 01-1.9-.52v.05a4.22 4.22 0 003.39 4.13 4.23 4.23 0 01-1.89.07 4.22 4.22 0 003.94 2.93A8.5 8.5 0 012 19.54a12 12 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.36 8.36 0 0024 4.56a8.49 8.49 0 01-2.54.7z" />
                </svg>
              </Link>
              <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.04 3.74 9.21 8.5 9.88v-6.99H7.36v-2.9h3.14V9.42c0-3.11 1.87-4.82 4.72-4.82 1.37 0 2.79.24 2.79.24v3.08h-1.57c-1.54 0-2.02.96-2.02 1.94v2.34h3.46l-.55 2.9h-2.91v6.99C18.26 21.21 22 17.04 22 12z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 2.263.243 3.1.518a6.575 6.575 0 0 1 2.42 1.42 6.578 6.578 0 0 1 1.42 2.42c.275.837.464 1.93.518 3.1.058 1.265.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.243 2.263-.518 3.1a6.575 6.575 0 0 1-1.42 2.42 6.578 6.578 0 0 1-2.42 1.42c-.837.275-1.93.464-3.1.518-1.265.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-2.263-.243-3.1-.518a6.575 6.575 0 0 1-2.42-1.42 6.578 6.578 0 0 1-1.42-2.42c-.275-.837-.464-1.93-.518-3.1-.058-1.265-.07-1.65-.07-4.85s.012-3.584.07-4.85c.054-1.17.243-2.263.518-3.1a6.575 6.575 0 0 1 1.42-2.42 6.578 6.578 0 0 1 2.42-1.42c.837-.275 1.93-.464 3.1-.518 1.265-.058 1.65-.07 4.85-.07M12 0C8.736 0 8.332.015 7.053.073 5.75.131 4.666.353 3.758.703a8.118 8.118 0 0 0-2.97 1.95A8.119 8.119 0 0 0 .703 5.758c-.35.908-.572 1.993-.63 3.295C0 8.333 0 8.74 0 12c0 3.26.015 3.667.073 4.948.058 1.302.28 2.387.63 3.295a8.118 8.118 0 0 0 1.95 2.97 8.119 8.119 0 0 0 2.97 1.95c.908.35 1.993.572 3.295.63C8.332 23.985 8.736 24 12 24c3.26 0 3.667-.015 4.948-.073 1.302-.058 2.387-.28 3.295-.63a8.118 8.118 0 0 0 2.97-1.95 8.118 8.118 0 0 0 1.95-2.97c.35-.908.572-1.993.63-3.295.058-1.282.073-1.688.073-4.948 0-3.26-.015-3.667-.073-4.948-.058-1.302-.28-2.387-.63-3.295a8.118 8.118 0 0 0-1.95-2.97A8.118 8.118 0 0 0 20.243.703c-.908-.35-1.993-.572-3.295-.63C15.668.015 15.264 0 12 0zm0 5.837a6.163 6.163 0 1 0 0 12.327 6.163 6.163 0 0 0 0-12.327zm0 10.163a3.837 3.837 0 1 1 0-7.674 3.837 3.837 0 0 1 0 7.674zm7.852-10.245a1.437 1.437 0 1 1-2.874 0 1.437 1.437 0 0 1 2.874 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} This Site Create By Abubakar Mukhtar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
