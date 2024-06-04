import "../css/fonts.css"

const Seo = () =>{
    const pricingPlans = [
        { name: "BEGINNER PLAN", price: "₹ 8999",color : "text-green-500",bg : "bg-green-500" },
        { name: "PRO PLAN", price: "₹ 12999",color : "text-blue-500",bg : "bg-blue-500" },
        { name: "ELITE PLAN", price: "₹ 19999",color : "text-red-500",bg : "bg-red-500" },
       
        
      ];

      const beginner = [
        { "name": "Local SEO", "tag": "✓" },
        { "name": "National SEO", "tag": "-" },
        { "name": "International SEO", "tag": "-" },
        { "name": "Initial Audit Report", "tag": "✓" },
        { "name": "SEO Technical Audit", "tag": "✓" },
        { "name": "Keywords", "tag": "5" },
        { "name": "Backlinks Per Month", "tag": "40" },
        { "name": "Competitor Analysis", "tag": "-" },
        { "name": "Duplicate Content Check", "tag": "-" },
        { "name": "Google Penalty Check", "tag": "-" },
        { "name": "Website Canonical Check", "tag": "-" },
        { "name": "Title Tag Optimization", "tag": "✓" },
        { "name": "Meta Tag Optimization", "tag": "✓" },
        { "name": "Image Alt Tag Optimization", "tag": "-" },
        { "name": "Content Optimization", "tag": "✓" },
        { "name": "SEO Friendly URL Setup", "tag": "-" },
        { "name": "404 Page Implementation", "tag": "-" },
        { "name": "Website Speed Check", "tag": "-" },
        { "name": "Google Indexed Pages Check", "tag": "-" },
        { "name": "Robots.txt Creation", "tag": "-" },
        { "name": "Google XML Sitemap", "tag": "-" },
        { "name": "Google Webmaster Setup", "tag": "-" },
        { "name": "Google Analytics Setup", "tag": "✓" },
        { "name": "Blog Posting", "tag": "4/M" },
        { "name": "Social Bookmarking", "tag": "✓" },
        { "name": "Socials Profile Creation", "tag": "3" },
        { "name": "Classified Submission", "tag": "-" },
        { "name": "Image Sharing", "tag": "-" },
        { "name": "GMB Creation One Time", "tag": "✓" }
      ]


      const pro = [
        { "name": "Local SEO", "tag": "✓" },
        { "name": "National SEO", "tag": "✓" },
        { "name": "International SEO", "tag": "-" },
        { "name": "Initial Audit Report", "tag": "✓" },
        { "name": "SEO Technical Audit", "tag": "✓" },
        { "name": "Keywords", "tag": "10" },
        { "name": "Backlinks Per Month", "tag": "60" },
        { "name": "Competitor Analysis", "tag": "-" },
        { "name": "Duplicate Content Check", "tag": "-" },
        { "name": "Google Penalty Check", "tag": "-" },
        { "name": "Website Canonical Check", "tag": "-" },
        { "name": "Title Tag Optimization", "tag": "✓" },
        { "name": "Meta Tag Optimization", "tag": "✓" },
        { "name": "Image Alt Tag Optimization", "tag": "✓" },
        { "name": "Content Optimization", "tag": "✓" },
        { "name": "SEO Friendly URL Setup", "tag": "-" },
        { "name": "404 Page Implementation", "tag": "✓" },
        { "name": "Website Speed Check", "tag": "✓" },
        { "name": "Google Indexed Pages Check", "tag": "-" },
        { "name": "Robots.txt Creation", "tag": "✓" },
        { "name": "Google XML Sitemap", "tag": "✓" },
        { "name": "Google Webmaster Setup", "tag": "✓" },
        { "name": "Google Analytics Setup", "tag": "✓" },
        { "name": "Blog Posting", "tag": "8/M" },
        { "name": "Social Bookmarking", "tag": "✓" },
        { "name": "Socials Profile Creation", "tag": "6" },
        { "name": "Classified Submission", "tag": "-" },
        { "name": "Image Sharing", "tag": "-" },
        { "name": "GMB Creation One Time", "tag": "✓" }
      ]

      const expert = [
        { "name": "Local SEO", "tag": "✓" },
        { "name": "National SEO", "tag": "✓" },
        { "name": "International SEO", "tag": "-" },
        { "name": "Initial Audit Report", "tag": "✓" },
        { "name": "SEO Technical Audit", "tag": "✓" },
        { "name": "Keywords", "tag": "20" },
        { "name": "Backlinks Per Month", "tag": "100" },
        { "name": "Competitor Analysis", "tag": "✓" },
        { "name": "Duplicate Content Check", "tag":"✓" },
        { "name": "Google Penalty Check", "tag": "✓" },
        { "name": "Website Canonical Check", "tag": "✓" },
        { "name": "Title Tag Optimization", "tag": "✓" },
        { "name": "Meta Tag Optimization", "tag": "✓" },
        { "name": "Image Alt Tag Optimization", "tag": "✓" },
        { "name": "Content Optimization", "tag": "✓" },
        { "name": "SEO Friendly URL Setup", "tag": "✓" },
        { "name": "404 Page Implementation", "tag": "✓" },
        { "name": "Website Speed Check", "tag": "✓" },
        { "name": "Google Indexed Pages Check", "tag": "✓" },
        { "name": "Robots.txt Creation", "tag": "✓" },
        { "name": "Google XML Sitemap", "tag": "✓" },
        { "name": "Google Webmaster Setup", "tag": "✓" },
        { "name": "Google Analytics Setup", "tag": "✓" },
        { "name": "Blog Posting", "tag": "12/M" },
        { "name": "Social Bookmarking", "tag": "✓" },
        { "name": "Socials Profile Creation", "tag": "10" },
        { "name": "Classified Submission", "tag": "✓" },
        { "name": "Image Sharing", "tag": "✓" },
        { "name": "GMB Creation One Time", "tag": "✓" }
      ]

      const elite = [
        { "name": "Local SEO", "tag": "✓" },
        { "name": "National SEO", "tag": "✓" },
        { "name": "International SEO", "tag": "✓" },
        { "name": "Initial Audit Report", "tag": "✓" },
        { "name": "Paid PR Media Release (Indian Only)", "tag": "✓" },
        { "name": "Keywords", "tag": "50" },
        { "name": "Backlinks Per Month", "tag": "200" },
        { "name": "Competitor Analysis", "tag": "✓" },
        { "name": "Duplicate Content Check", "tag":"✓" },
        { "name": "Google Penalty Check", "tag": "✓" },
        { "name": "Website Canonical Check", "tag": "✓" },
        { "name": "Title Tag Optimization", "tag": "✓" },
        { "name": "Meta Tag Optimization", "tag": "✓" },
        { "name": "Image Alt Tag Optimization", "tag": "✓" },
        { "name": "Content Optimization", "tag": "✓" },
        { "name": "SEO Friendly URL Setup", "tag": "✓" },
        { "name": "404 Page Implementation", "tag": "✓" },
        { "name": "Website Speed Check", "tag": "✓" },
        { "name": "Google Indexed Pages Check", "tag": "✓" },
        { "name": "Robots.txt Creation", "tag": "✓" },
        { "name": "Google XML Sitemap", "tag": "✓" },
        { "name": "Google Webmaster Setup", "tag": "✓" },
        { "name": "Google Analytics Setup", "tag": "✓" },
        { "name": "Blog Posting", "tag": "20/M" },
        { "name": "Social Bookmarking", "tag": "✓" },
        { "name": "Socials Profile Creation", "tag": "20" },
        { "name": "Classified Submission", "tag": "✓" },
        { "name": "Image Sharing", "tag": "✓" },
        { "name": "GMB Creation One Time", "tag": "✓" }
      ]

      

    return(

        <>

<div className="flex flex-col gap-2 items-center justify-center">

<h1 className="text-3xl mb-4 mt-10 font-bold roboto">SEO PLANS</h1>

<table className="flex flex-col gap-2 items-center justify-center">

    
   <tr>
   {pricingPlans.map((plan, index) => (
    <>
    
  <th key={index} className=" p-4 text-2xl text-left font-medium  block md:table-cell">
  <div className="mb-4">
                <p className={`${plan.color} text-lg roboto`}>{plan.name}</p>
                <p className={`${plan.color} text-md roboto`} >{plan.price}</p>

                </div>
               
                <button className={` ${plan.bg} px-2 py-2 text-sm rounded-lg bg-black text-white`}>get now</button>
  </th>
  <th className="p-12 "></th>
  <th className="p-12 "></th>
  
  
  </>
 
 
  
))}
   <th className=" p-8  text-2xl text-left font-medium  block md:table-cell">
   <div className="mb-4">
    <p className={` text-pink-500 text-lg roboto`}>PREMIUM PLAN</p>
    <p className={` text-pink-500 text-md roboto`}>₹ 19999</p>

    </div>
    <button className="bg-pink-500 px-2 py-2 text-sm rounded bg-black text-white">get now</button>
   </th>
 
   </tr>

    
    <tbody className="text-sm">

    {
        beginner.map((item,ind)=>(

         <tr>
          
            <td class="p-4 border">{item.name}</td>
            <td className={`p-4 border ${item.tag == "✓" ? "text-green-500" : ""} `}>{item.tag}</td>
            <td class="p-4 "></td>
            <td class="p-4 border">{pro[ind].name}</td>
            <td className={`p-4 border ${pro[ind].tag == "✓" ? "text-green-500" : ""} `}>{pro[ind].tag}</td>
            <td class="p-4 "></td>
            <td class="p-4 border">{expert[ind].name}</td>
            <td className={`p-4 border ${expert[ind].tag == "✓" ? "text-green-500" : ""} `}>{expert[ind].tag}</td>
            <td class="p-4 "></td>
            <td class="p-4 border">{elite[ind].name}</td>
            <td className={`p-4 border ${elite[ind].tag == "✓" ? "text-green-500" : ""} `}>{elite[ind].tag}</td>
           
            

            
        
            
          </tr>

        )) 
        
    }
 
 
</tbody>





    
   

</table>

</div>
        
        </>

    )
}

export default Seo;