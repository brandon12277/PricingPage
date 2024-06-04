
import "../css/fonts.css"

const InfluenceMarketing = () =>{

    const pricingPlans = [
        { name: "BASE PLAN", price: "₹ 8999",color : "text-green-500",bg : "bg-green-500" },
        { name: "MIDDLE PLAN", price: "₹ 12999",color : "text-blue-500",bg : "bg-blue-500" },
        { name: "ULTIMATE PLAN", price: "₹ 19999",color : "text-red-500",bg : "bg-red-500" },
       
        
      ];
  

     return(
        <>
         
          <div className="w-full mt-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl mb-4 mt-10 font-bold roboto">INFLUENCE MARKETING</h1>

            <table className="flex flex-col gap-2 items-center justify-center">

<thead>
<tr>
{pricingPlans.map((plan, index) => (
<>

<th key={index} className=" px-24 py-4  text-xl text-left font-medium  block md:table-cell">
<div className="mb-4">
                <p className={`${plan.color} text-lg roboto`}>{plan.name}</p>
                <p className={`${plan.color} text-md roboto`} >{plan.price}</p>

                </div>
               
                <button className={` ${plan.bg} px-2 py-2 text-sm rounded-lg bg-black text-white`}>get now</button>
</th>
<th className=""></th>

</>


))}
</tr>

</thead>
<tbody>

   <tr className=" px-20 py-10" >
            <td class="p-4 border">6 - 8 Collaborations</td>
            <td className="px-16"></td>
            <td class="p-4 border">10 - 12 Collaborations</td>
            <td className="px-16"></td>
            <td class="p-4 border">15 - 17 Collaborations</td>
    </tr>

</tbody>
</table>

<h1 className="text-3xl mb-4 mt-40 font-bold roboto">PROFESSIONAL BUNDLE - RS. 14999/-</h1>
<table className="border border-black">
  <thead>
    <tr>
      <th class="px-20 py-10 bg-yellow-300">Instagram Marketing</th>
      <th class="px-20 py-10 bg-yellow-300"></th>
      <th class="px-20 py-10 bg-yellow-300">Facebook Marketing</th>
      <th class="px-20 py-10 bg-yellow-300"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="p-4">Post</td>
      <td class="p-4">15/M</td>
      <td class="p-4">Post(including reels)</td>
      <td class="p-4">15/M</td>
    </tr>
    <tr>
      <td class="p-4">Reels</td>
      <td class="p-4">5/M</td>
      <td class="p-4">Reels</td>
      <td class="p-4">15/M</td>
    </tr>
    <tr>
      <td class="p-4">Stories uploading</td>
      <td class="p-4">20/M</td>
      <td class="p-4">Stories uploading</td>
      <td class="p-4">20/M</td>
    </tr>
    <tr>
      <td class="p-4">Hashtags Research</td>
      <td class="p-4"></td>
      <td class="p-4">Post Creative Designing</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4">Post Creative Designing</td>
      <td class="p-4"></td>
      <td class="p-4">Facebook Business Manager Set Up</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4">Audience Research</td>
      <td class="p-4"></td>
      <td class="p-4">Group Joining and Posting</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4">Post Boosting</td>
      <td class="p-4"></td>
      <td class="p-4">Pixel Installation</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4">Instagram Ads (META)</td>
      <td class="p-4"></td>
      <td class="p-4">Remarketing (Ads)</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4"></td>
      <td class="p-4"></td>
      <td class="p-4">Creation Custom Audience Creation (Ads)</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4"></td>
      <td class="p-4"></td>
      <td class="p-4">Facebook Analytics Report Creation</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4"></td>
      <td class="p-4"></td>
      <td class="p-4">Ad Campaign Monitoring</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4"></td>
      <td class="p-4"></td>
      <td class="p-4">E-commerce ads</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4"></td>
      <td class="p-4"></td>
      <td class="p-4">Facebook Catalogue Creation</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4"></td>
      <td class="p-4"></td>
      <td class="p-4">Dynamic Ads Creation</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4"></td>
      <td class="p-4"></td>
      <td class="p-4">Customization Of Ad Placements</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4"></td>
      <td class="p-4"></td>
      <td class="p-4">Carousel And collection Ads</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4"></td>
      <td class="p-4"></td>
      <td class="p-4">Monthly Report</td>
      <td class="p-4">✔️</td>
    </tr>
    <tr>
      <td class="p-4"></td>   
      <td class="p-4"></td>
      <td class="p-4">Traffic Monitoring</td>
      <td class="p-4">✔️</td>
    </tr>
  </tbody>
</table>


<h1 className="text-3xl mb-4 mt-40 font-bold roboto">ADS + SEO PLANS - RS. 20999/-</h1>

<table className="border border-black">
  <thead>
    <tr>
      <th class="px-10 py-10 bg-yellow-300 border border-black">Facebook Ads</th>
      <th class="px-10 py-10 bg-yellow-300 border border-black"></th>
      <th class="px-10 py-10 bg-yellow-300 border border-black">Google Ads</th>
      <th class="px-10 py-10 bg-yellow-300 border border-black"></th>
      <th class="px-10 py-10 bg-yellow-300 border border-black">SEO (Search engine optimization)</th>
      <th class="px-10 py-10 bg-yellow-300 border border-black"></th>
    </tr>
  </thead>
  <tbody >
  <tr className="">
    <td class="p-4">Ads Management</td>
    <td class="p-4">Up to 5 campaign</td>
    <td class="p-4">Ads Management</td>
    <td class="p-4">Up to 2 campaign</td>
    <td class="p-4">Local SEO</td>
    <td class="p-4">Yes</td>
  </tr>
  <tr>
    <td class="p-4">Ads design and creation</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Ads design and creation</td>
    <td class="p-4">Yes</td>
    <td class="p-4">National SEO</td>
    <td class="p-4">Yes</td>
  </tr>
  <tr>
    <td class="p-4">Facebook shopping ads</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Google shopping ads</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Initial Audit Report</td>
    <td class="p-4">Yes</td>
  </tr>
  <tr>
    <td class="p-4">Ad optimization</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Ad optimization</td>
    <td class="p-4">Yes</td>
    <td class="p-4">SEO Technical Audit</td>
    <td class="p-4">Yes</td>
  </tr>
  <tr>
    <td class="p-4">Campaign strategy and Set Up</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Campaign strategy and Set Up</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Keywords</td>
    <td class="p-4">10</td>
  </tr>
  <tr>
    <td class="p-4">Campaign monitoring</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Campaign monitoring</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Backlinks Per Month</td>
    <td class="p-4">60</td>
  </tr>
  <tr>
    <td class="p-4">Ad's Monitoring and Management</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Ad's Monitoring and Management</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Competitor Analysis</td>
    <td class="p-4">Yes</td>
  </tr>
  <tr>
    <td class="p-4">Ads setup</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Ads setup</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Duplicate Content Check</td>
    <td class="p-4">Yes</td>
  </tr>
  <tr>
    <td class="p-4">Audience Reach</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Audience Reach</td>
    <td class="p-4">Yes</td>
    <td class="p-4">Title Tag Optimization</td>
    <td class="p-4">Yes</td>
  </tr>
  <tr>
    <td class="p-4">Ad's Running time</td>
    <td class="p-4">As per the Client</td>
    <td class="p-4">Ad's Running time</td>
    <td class="p-4">As per the Client</td>
    <td class="p-4">Meta Tag Optimization</td>
    <td class="p-4">Yes</td>
  </tr>
  <tr>
    <td class="p-4">Ad Budget Extra</td>
    <td class="p-4">Provided by Client</td>
    <td class="p-4">Ad Budget Extra</td>
    <td class="p-4">Provided by Client</td>
    <td class="p-4">Image Alt Tag Optimization</td>
    <td class="p-4">Yes</td>
    </tr>
    <tr>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4">Content Optimization</td>
  <td class="p-4">Yes</td>
</tr>
<tr>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4">404 Page Implementation</td>
  <td class="p-4">Yes</td>
</tr>
<tr>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4">Website Speed Check</td>
  <td class="p-4">Yes</td>
</tr>
<tr>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4">Robots.txt Creation</td>
  <td class="p-4">Yes</td>
</tr>
<tr>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4">Google XML Sitemap</td>
  <td class="p-4">Yes</td>
</tr>
<tr>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4">Google Webmaster Setup</td>
  <td class="p-4">Yes</td>
</tr>
<tr>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4">Google Analytics Setup</td>
  <td class="p-4">Yes</td>
</tr>
<tr>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4">Blog Posting</td>
  <td class="p-4">8/M</td>
</tr>
<tr>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4">Social Bookmarking</td>
  <td class="p-4">Yes</td>
</tr>
<tr>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4">Socials Profile Creation</td>
  <td class="p-4">6</td>
</tr>
<tr>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4">Classified Submission</td>
  <td class="p-4">Yes</td>
</tr>
<tr>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4">Image Sharing</td>
  <td class="p-4">Yes</td>
</tr>
<tr>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4"></td>
  <td class="p-4">GMB Creation One Time</td>
  <td class="p-4">Yes</td>
</tr>

    </tbody>

</table>
     




          </div>

        </>
     )
 

}

export default InfluenceMarketing