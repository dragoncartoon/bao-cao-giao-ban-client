// import Drawer from "./drawer"
import Link from 'next/link';
import Nav from './nav';

function Layout({ children }) {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* <div className="drawer-content flex flex-col items-center justify-center"> */}
      <div className="drawer-content">
        <Nav/>

        {/* Page content here */}
        <div className="px-6 xl:pr-2 pb-16">
          <div className="flex flex-col items-center justify-center">
            <div className="prose w-full max-w-4xl flex-grow">{children}</div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link href={'/'}>Trang chủ</Link>  
          </li>
          <li>
            <Link href={'/login'}>Đăng nhập</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Layout;
