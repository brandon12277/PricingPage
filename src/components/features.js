import ToggleBlock from "./ToggleBlock.js"
import "../css/fonts.css"


const FeaturesPlan = () =>{

    return (
        <>
              
              <div className='flex  w-[55vh] flex-col items-center justify-center border'>

           
<ToggleBlock
packageName="Startup"
price="Rs. 8,999"
packageDetails={[
{
heading: "",
points: ["Account Creation", "Account Management", "Account Optimization"]
},
{
heading: "Instagram Marketing",
points: [
"Post(including reels) – 10/M",
"Reels – 4/M",
"Stories Uploading -15/M",
"Hashtag Research",
"Post Creative Designing"
]
},
{
heading: "Facebook Marketing",
points: [
"Post – 10/M",
"Reels – 4/M",
"Stories Uploading -15/M",
"Post Creative Designing",
"Facebook Business Manager Set Up"
]
}
]}
/>

<ToggleBlock
packageName="Business"
price="Rs. 12,999"
packageDetails={[
{
heading: "",
points: ["Account Creation", "Account Management", "Account Optimization"]
},
{
heading: "Instagram Marketing",
points: [
"Post(including reels) – 12/M",
"Reels – 4/M",
"Stories Uploading -15/M",
"Post Creative Designing",
"Hashtags Research"
]
},
{
heading: "Facebook Marketing",
points: [
"Post – 12/M",
"Reels – 4/M",
"Stories Uploading – 15/M",
"Post Creative Designing",
"Facebook Business Manager Set Up"
]
},
{
heading: "Google My Business (GMB)",
points: [
"Create Business Profile",
"Add Contact Information",
"Write A Business Description"
]
}
]}
/>

<ToggleBlock
packageName="Pro"
price="Rs. 14,999"
packageDetails={[
{
heading: "",
points: ["Account Creation", "Account Management", "Account Optimization"]
},
{
heading: "Instagram Marketing",
points: [
"Post(including reels) – 15/M",
"Reels – 5/M",
"Stories Uploading – 20/M",
"Post Creative Designing",
"Hashtags Research",
"Post Boosting",
"Audience Research",
"Instagram Ads (META)"
]
},
{
heading: "Facebook Marketing",
points: [
"Post – 15/M",
"Reels – 5/M",
"Stories Uploading – 20/M",
"Post Creative Designing",
"Facebook Business Manager Set Up",
"Pixel Installation",
"Remarketing (Ads)",
"Custom Audience Creations (Ads)",
"Facebook Analytics Report Creation",
"Ad Campaign Monitoring",
"Ecommerce Ads",
"Facebook Catalogue Creation",
"Dynamic Ads Creation",
"Customization of Ad Placements",
"Carousel and Collection Ads",
"Monthly Report",
"Traffic Monitoring"
]
}
]}
/>

<ToggleBlock
packageName="Enterprise"
price="Rs. 19,999"
packageDetails={[
{
heading: "",
points: ["Account Creation", "Account Management", "Account Optimization"]
},
{
heading: "Instagram Marketing",
points: [
"Post(including reels) – 18/M",
"Reels – 5/M",
"Stories Uploading -23/M",
"Hashtags Research",
"Audience Research",
"Post Creative Designing",
"Post Boosting",
"Instagram Ads (META)"
]
},
{
heading: "Facebook Marketing",
points: [
"Post (Including Reels) – 18/M",
"Reels – 5/M",
"Stories Uploading – 23/M",
"Post Creative Designing",
"Group Joining and Posting",
"Facebook Business Manager Set Up",
"Pixel Installation",
"Remarketing (Ads)",
"Custom Audience Creation (Ads)",
"Facebook Analytics Report Creation",
"Ad Campaign Monitoring",
"E-commerce ads",
"Facebook Catalogue Creation",
"Dynamic Ads Creation",
"Customization Of Ad Placements",
"Carousel And collection Ads",
"Traffic Monitoring",
"Monthly Report"
]
},
{
heading: "Google My Business (GMB)",
points: [
"Create Business Profile",
"Add Contact Information",
"Write A Business Description",
"Publish Google Posts – 6/M",
"Upload New Photos – 6/M",
"Add/Update Products/Services",
"Review Submission- 4/M",
"QR Creation"
]
},
{
heading: "LinkedIn Marketing",
points: [
"Post creation – 23/M",
"Blogs sharing – 2/M",
"Connection Building",
"Business Account Set Up",
"Monthly Reporting"
]
}
]}
/>


</div>

        </>
    )
}

export default FeaturesPlan