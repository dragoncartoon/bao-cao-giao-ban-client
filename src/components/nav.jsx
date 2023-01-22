import Link from 'next/link';

function Nav() {
  return (
    <div
      className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-80 
        backdrop-blur transition-all duration-100 
        bg-base-100 text-base-content shadow-sm">
      <nav className="navbar w-full">
        <div className="flex flex-1 md:gap-1 lg:gap-2">
          <span>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-square btn-ghost drawer-button lg:hidden">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </span>
          {/* Logo appear when viewport small  */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link href={'/'}>
              <div className="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
                <span className="lowercase text-primary">TTCC</span>
                <span className="uppercase text-base-content">115</span>
              </div>
            </Link>
          </div>

          {/* Search box appear when viewport large */}
          <div className="hidden w-full max-w-sm lg:flex">
            <p>Here is searchbox in Nav bar</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
