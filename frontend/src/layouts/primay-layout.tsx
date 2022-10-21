import * as React from 'react';
import Header from './header';

type LayoutProps = {
  children: React.ReactNode
}

const PrimaryLayout: React.FC<LayoutProps> = ({ children }) => {
  return <div className='container min-h-screen h-auto bg-gray-100 mx-auto'>
    <div className='w-full md:w-[650px] lg:w-[900px] xl:w-[1200px] mx-auto h-full overflow-hidden'>
      <Header />
      <div className='mt-4'>
        {children}
      </div>
    </div>
  </div>;
}

export default PrimaryLayout;