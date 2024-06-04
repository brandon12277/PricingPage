
import ToggleBlock from "./ToggleBlock.js"

const FaceBookMobile = () =>{
    return(
        <>

<div className='flex  w-[55vh] flex-col items-center justify-center border'>

             <ToggleBlock
  packageName="Premium Plan"
  price="Rs. 8999/-"
  packageDetails={[
    {
      heading: "",
      points: ["Ads Management Upto 5 Campaigns"]
    },
    {
        heading: "",
      points: [
        "Ads design and creation",
        "Facebook shopping ads",
        "Ad optimization",
        "Campaign strategy and Set Up",
        "Campaign monitoring",
        "Ad’s Monitoring and Management",
        "Ads setup",
        "Audience Reach",
        "Ad’s Running time – As per the Client",
        "Ad Budget Extra – Provided by Client"
      ]
    }
  ]}
/>

<ToggleBlock
  packageName="Elite Plan"
  price="Rs. 12999/-"
  packageDetails={[
    {
      heading: "",
      points: ["Ads Management Upto 10 Campaigns"]
    },
    {
      heading: "",
      points: [
        "Ads design and creation",
        "Facebook shopping ads",
        "Ad optimization",
        "Campaign strategy and Set Up",
        "Campaign monitoring",
        "Ad’s Monitoring and Management",
        "Ads setup",
        "Audience Reach",
        "Ad’s Running time – As per the Client",
        "Ad Budget Extra – Provided by Client"
      ]
    }
  ]}
/>

<ToggleBlock
  packageName="Pro Plan"
  price="Rs. 18999/-"
  packageDetails={[
    {
      heading: "",
      points: ["Ads Management Upto 20 Campaigns"]
    },
    {
      heading: "",
      points: [
        "Ads design and creation",
        "Facebook shopping ads",
        "Ad optimization",
        "Campaign strategy and Set Up",
        "Campaign monitoring",
        "Ad’s Monitoring and Management",
        "Ads setup",
        "Audience Reach",
        "Ad’s Running time – As per the Client",
        "Ad Budget Extra – Provided by Client"
      ]
    }
  ]}
/>

                </div>        
        </>
    )
}

export default FaceBookMobile;