import TableRow from "./tableRows";

import "../css/fonts.css"


// Starting table to be used

const DigitalMarketing = () =>{

    const pricingPlans = [
        { name: "Startup", price: "₹ 8999/-" ,color : "text-green-500",bg : "bg-green-500"},
        { name: "Business", price: "₹ 12999/-" ,color : "text-blue-500",bg : "bg-blue-500"},
        { name: "Enterprise", price: "₹ 19999/-",color : "text-green-500",bg : "bg-green-500" },
        { name: "Platinum", price: "₹ 24999/-",color : "text-pink-500",bg : "bg-pink-500" },
        { name: "Master", price: "₹ 29999/-",color : "text-yellow-500" ,bg : "bg-yellow-500"},
        { name: "Supreme", price: "₹ 39999/-",color : "text-purple-500",bg : "bg-purple-500" },
        { name: "All-In-One", price: "₹ 49999/-",color : "text-red-500",bg : "bg-red-500" },
      ];

    return(

    
    <div className="mt-40 w-full flex flex-col justify-center items-center"> 
    {/* remove margin mt-40 on placing the navbar  */}
    <div className="w-full bck-image h-[50vh] flex flex-col items-center justify-center">

    <h1 className="font-bold text-6xl roboto">Digital Marketing</h1>
      <h1 className="font-bold text-6xl roboto ">Plans and Pricing</h1>

    </div>

      

      <table className="mt-10 w-full border-collapse block md:table">
        <thead className="w-full block md:table-header-group">
       
         
          <th className="flex items-center p-8 m-10 justify-center ">
            <h1 className="text-2xl roboto">Features Comparison</h1>
            </th>
            {pricingPlans.map((plan, index) => (
              <th key={index} className="p-8   text-left font-medium  block md:table-cell">
                <div className="mb-4">
                <p className={`${plan.color} text-lg roboto`}>{plan.name}</p>
                <p className={`${plan.color} text-md roboto`} >{plan.price}</p>

                </div>
               
                <button className={` ${plan.bg} px-2 py-1 rounded-lg bg-black text-white`}>get now</button>
              </th>
            ))}
          
        </thead>
        <tbody className="jakarta-font">
          {/* table for instagram prices */}
            <TableRow
               
               handle = {"Instagram"}
               features = {[
                {
                  heading: "Post (including reels)",
                  startup: "10/M",
                  business: "12/M",
                  enterprise: "18/M",
                  platinum: "20/M",
                  master: "20/M",
                  supreme: "18/M",
                  allinone: "25/M"
                },
                {
                  heading: "Reels",
                  startup: "4/M",
                  business: "4/M",
                  enterprise: "5/M",
                  platinum: "5/M",
                  master: "5/M",
                  supreme: "5/M",
                  allinone: "5/M"
                },
                {
                  heading: "Stories uploading",
                  startup: "15/M",
                  business: "15/M",
                  enterprise: "23/M",
                  platinum: "25/M",
                  master: "25/M",
                  supreme: "23/M",
                  allinone: "30/M"
                },
                {
                  heading: "Hashtags Research",
                  startup: "✓",
                  business: "✓",
                  enterprise: "✓",
                  platinum: "✓",
                  master: "✓",
                  supreme: "✓",
                  allinone: "✓"
                },
                {
                  heading: "Post Creative Designing",
                  startup: "✓",
                  business: "✓",
                  enterprise: "✓",
                  platinum: "✓",
                  master: "✓",
                  supreme: "✓",
                  allinone: "✓"
                },
                {
                  heading: "Audience Research",
                  startup: "-",
                  business: "-",
                  enterprise: "✓",
                  platinum: "✓",
                  master: "✓",
                  supreme: "✓",
                  allinone: "✓"
                },
                {
                  heading: "Post Boosting",
                  startup: "-",
                  business: "-",
                  enterprise: "✓",
                  platinum: "✓",
                  master: "✓",
                  supreme: "✓",
                  allinone: "✓"
                },
                {
                  heading: "Instagram Ads (META)",
                  startup: "-",
                  business: "-",
                  enterprise: "✓",
                  platinum: "✓",
                  master: "✓",
                  supreme: "✓",
                  allinone: "✓"
                }
              ]}

               
               
                   
                
                />
                <tr className="bg-white ">
                    <th className="p-4"></th>
                </tr>

                 {/* table for Facebook prices */}
                <TableRow
                   
                   handle={"Facebook"}
                   const features = {[
                    {
                      heading: "Post (including reels)",
                      startup: "10/M",
                      business: "12/M",
                      enterprise: "18/M",
                      platinum: "20/M",
                      master: "20/M",
                      supreme: "18/M",
                      allinone: "25/M"
                    },
                    {
                      heading: "Reels",
                      startup: "4/M",
                      business: "4/M",
                      enterprise: "5/M",
                      platinum: "5/M",
                      master: "5/M",
                      supreme: "5/M",
                      allinone: "5/M"
                    },
                    {
                      heading: "Stories uploading",
                      startup: "15/M",
                      business: "15/M",
                      enterprise: "23/M",
                      platinum: "25/M",
                      master: "25/M",
                      supreme: "23/M",
                      allinone: "30/M"
                    },
                    {
                      heading: "Post Creative Designing",
                      startup: "✓",
                      business: "✓",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Facebook Business Manager Set Up",
                      startup: "✓",
                      business: "✓",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Group Joining and Posting",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Pixel Installation",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Remarketing (Ads)",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Custom Audience Creation (Ads)",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Facebook Analytics Report Creation",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Ad Campaign Monitoring",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "E-commerce ads",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Facebook Catalogue Creation",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Dynamic Ads Creation",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Customization Of Ad Placements",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Carousel And collection Ads",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Monthly Report",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Traffic Monitoring",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    }
                  ]}
                  
                   
                />

                {/* table for Google my Bussiness */}
                <tr className="bg-white ">
                    <th className="p-4"></th>
                </tr>

                <TableRow
                
                  handle={"GOOGLE MY BUSSINESS"}
                  features ={[
                    {
                      heading: "Create Business Profile",
                      startup: "-",
                      business: "✓",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Add Contact Information",
                      startup: "-",
                      business: "✓",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Write A Business Description",
                      startup: "-",
                      business: "✓",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Publish Google Posts",
                      startup: "-",
                      business: "-",
                      enterprise: "6/M",
                      platinum: "8/M",
                      master: "8/M",
                      supreme: "6/M",
                      allinone: "12/M"
                    },
                    {
                      heading: "Upload New Photos",
                      startup: "-",
                      business: "-",
                      enterprise: "6/M",
                      platinum: "8/M",
                      master: "8/M",
                      supreme: "6/M",
                      allinone: "12/M"
                    },
                    {
                      heading: "Add/Update Products/Services",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Review Submission",
                      startup: "-",
                      business: "-",
                      enterprise: "4/M",
                      platinum: "8/M",
                      master: "8/M",
                      supreme: "4/M",
                      allinone: "15/M"
                    },
                    {
                      heading: "QR Creation",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    }
                  ]}
                  
                  
                
                />

                 {/* table for Twitter */}
                 <tr className="bg-white ">
                    <th className="p-4"></th>
                </tr>

                <TableRow
                handle={"Twitter"}
                
                features = {[
                    {
                      heading: "Post creation",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "25/M",
                      master: "25/M",
                      supreme: "-",
                      allinone: "30/M"
                    },
                    {
                      heading: "Tweet Engagement Ads",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "Video Or GIF View Ads",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "Awareness Ads",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "Website Conversion Ads",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone:"✓"
                    },
                    {
                      heading: "In-stream Video View Ads",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "Follower Ads",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "App Install Ads",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "App Re-engagement",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "Audience Creation",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "Monthly Report",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "✓",
                      master: "✓",
                      supreme: "-",
                      allinone: "✓"
                    }
                  ]}
                 
                
                />

<tr className="bg-white ">
                    <th className="p-4"></th>
                </tr>
            

             {/* table for LinkedIn */}
                <TableRow
                  
                   handle={"LinkedIn"}
                   features = {[
                    {
                      heading: "Post creation",
                      startup: "-",
                      business: "-",
                      enterprise: "23/M",
                      platinum: "25/M",
                      master: "25/M",
                      supreme: "23/M",
                      allinone: "30/M"
                    },
                    {
                      heading: "Blogs sharing",
                      startup: "-",
                      business: "-",
                      enterprise: "2/M",
                      platinum: "4/M",
                      master: "4/M",
                      supreme: "2/M",
                      allinone: "10/M"
                    },
                    {
                      heading: "Connection Building",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Business Account Set Up",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Monthly Report",
                      startup: "-",
                      business: "-",
                      enterprise: "✓",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    }
                  ]}
                
                />

<tr className="bg-white ">
                    <th className="p-4"></th>
                </tr>

                 {/* table for Youtube */}

                <TableRow
                handle={"Youtube"}
                  
                  features = {[
                    {
                      heading: "Youtube Shots",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "5/M"
                    },
                    {
                      heading: "Video Editing",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "Video Scheduling",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "Video Uploading",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "Thumbnail Creation",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "✓"
                    }
                  ]}
                
                />

<tr className="bg-white ">
                    <th className="p-4"></th>
                </tr>
 
                {/* table for pin interest */}
                <TableRow
                  
                   handle={"PINTEREST"}
                   features = {[
                    {
                      heading: "Pinterest Ac Setup",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Profile Optimization",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Post Pins(image)",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "25/M",
                      master: "25/M",
                      supreme: "-",
                      allinone: "30/M"
                    },
                    {
                      heading: "Board creation",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    },
                    {
                      heading: "Pinboard update",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "✓",
                      master: "✓",
                      supreme: "✓",
                      allinone: "✓"
                    }
                  ]}
                
                />

<tr className="bg-white ">
                    <th className="p-4"></th>
                </tr>

                 {/* table for Seo */}

                <TableRow
                handle={
                    "SEO"
                }
                 
                 features = {[
                    {
                      heading: "Local SEO",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "✓",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "National SEO",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "✓",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "Paid PR Media Release (Indian Only)",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "-",
                      allinone: "30"
                    },
                    {
                      heading: "Initial Audit Report",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "✓",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "SEO Technical Audit",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "✓",
                      supreme: "-",
                      allinone: "✓"
                    },
                    {
                      heading: "Keywords",
                      startup: "",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "10",
                      supreme: "-",
                      allinone: "20"
                    },
                    {
                        heading: "Backlinks Per Month",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "60",
                        supreme: "-",
                        allinone: "100"
                      },
                      {
                        heading: "Competitor Analysis",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Duplicate Content Check",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Google Penalty Check",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "-",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Website Canonical Check",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "-",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Title Tag Optimization",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Meta Tag Optimization",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Image Alt Tag Optimization",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Content Optimization",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "SEO Friendly URL Setup",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "-",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "404 Page Implementation",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Website Speed Check",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Google Indexed Pages Check",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "-",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Robots.txt Creation",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Google XML Sitemap",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Google Webmaster Setup",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Google Analytics Setup",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Blog Posting",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "8/M",
                        supreme: "-",
                        allinone: "12/M"
                      },
                      {
                        heading: "Social Bookmarking",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Socials Profile Creation",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "6",
                        supreme: "-",
                        allinone: "10"
                      },
                      {
                        heading: "Classified Submission",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "Image Sharing",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      },
                      {
                        heading: "GMB Creation One Time",
                        startup: "-",
                        business: "-",
                        enterprise: "-",
                        platinum: "-",
                        master: "✓",
                        supreme: "-",
                        allinone: "✓"
                      }
                   
                  ]}
                
                />

<tr className="bg-white ">
                    <th className="p-4"></th>
                </tr>
                 
                  {/* table for user Generated Content */}
                <TableRow
                handle={"USER GENERATED CONTENT"}
                 
                 features = {[
                    {
                      heading: "Images (Product | Faced)",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "20",
                      allinone: "5"
                    },
                    {
                      heading: "Videos (Product | Faced)",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "5",
                      allinone: "3"
                    },
                    {
                      heading: "Reviews (Faced)",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "3",
                      allinone: "1"
                    },
                    {
                      heading: "E-commerce Shoot (Product Shoot)",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "10",
                      allinone: "-"
                    },
                    {
                      heading: "Revisions",
                      startup: "-",
                      business: "-",
                      enterprise: "-",
                      platinum: "-",
                      master: "-",
                      supreme: "1",
                      allinone: "1"
                    }
                  ]}
                
                />
            

        

        </tbody>
        </table>


    </div>
    )
     





}


export default DigitalMarketing;