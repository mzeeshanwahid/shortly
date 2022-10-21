import * as React from 'react';
import HeroArea from '../components/hero';
import Shortner from '../components/shortner';
import PrimaryLayout from '../layouts/primay-layout';

const Home: React.FC = () => {
  return <PrimaryLayout>
    <HeroArea />
    <Shortner />
  </PrimaryLayout>;
}

export default Home;