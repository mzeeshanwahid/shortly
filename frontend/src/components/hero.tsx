import * as React from 'react';

const HeroArea: React.FC = () => {
  return <div className='w-full h-auto lg:h-[400px] border-y-2'>
    <div className='flex flex-col-reverse lg:flex-row gap-2'>
      <div className='w-full lg:w-4/6 p-3 font-bold flex flex-col justify-center mb-5 lg:mb-0'>
        <h1 className='text-3xl lg:text-4xl'>Frustrated with long URL's?</h1>
        <p className='text-2xl lg:text-4xl leading-normal mt-3'>Short.ly is the unique solution to<br/>your modern problems</p>
      </div>
      <div className='w-full lg:w-2/6'>
        <img className='object-cover' width={450} src="/assets/imgs/hero.png" alt="hero" />
      </div>
    </div>
  </div>;
}
 
export default HeroArea;