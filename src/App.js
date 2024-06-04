
import './App.css';
import FaceBookAds from './components/FacebookAds';
import GoogleManagementAds from './components/GoogleManagementplans';

import "./css/fonts.css"

import DigitalMarketing from './components/digitalmarketingplans';
import FaceBookMobile from './components/facebookMobile';
import FeaturesPlan from './components/features';
import GoogleAdsMobile from './components/googleAdsMobile';
import InfluenceMobile from './components/influenceMarketingMobile';
import InfluenceMarketing from './components/influencemarketing';
import Seo from './components/seoplans';
import { useMediaQuery } from 'react-responsive';
import SeoMobile from './components/seoplansMobile';
import AdsSeoMobile from './components/adsSeoPlansMobile';


function App() {
  const isMobile = useMediaQuery({ maxWidth: 960 });
  return (
    <div className="flex flex-col gap-10 items-center justify-center App jakarta-font">

      {
         
        //  This is for desktop view

        !isMobile?
        <>
         
         {/* Inital Plans Table */}
         
        <DigitalMarketing/>
       

        {/* remaining card advertisments */}

        <FaceBookAds/>
        <GoogleManagementAds/>
        <Seo/>
        <InfluenceMarketing/>
        </>
        :

        // this is for mobile view

        <>
        <div className='mt-10 w-full  bck-image h-[50vh] flex flex-col items-center justify-center'>

        
            <h1 className="font-bold text-3xl roboto">Digital Marketing</h1>
      <h1 className="font-bold text-3xl roboto">Plans and Pricing</h1>
      </div>

            <p className="font-bold text-xl mt-6 roboto">Features Plan</p>
            <FeaturesPlan/>

            <p className="font-bold text-xl mt-6 roboto">INFLUENCER MARKETING</p>
            <InfluenceMobile/>
            <p className="font-bold text-xl mt-6 roboto ">FACEBOOK ADS PLANS</p>
            <FaceBookMobile/>

            <p className="font-bold text-xl mt-6 roboto">GOOGLE ADS MANAGEMENT PLANS</p>
            <GoogleAdsMobile/>

            <p className="font-bold text-xl mt-6 roboto">SEO PLANS</p>
            <SeoMobile/>

            <p className="font-bold text-xl mt-6 roboto">ADS + SEO PLANS</p>
            <AdsSeoMobile/>
           
           
        </>
      }
        
            
          
    </div>
  );
}

export default App;
