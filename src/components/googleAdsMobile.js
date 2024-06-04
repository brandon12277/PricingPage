import ToggleBlock from "./ToggleBlock.js"



const GoogleAdsMobile = () =>{

    return (
        <>
              
              <div className='flex  w-[55vh] flex-col items-center justify-center border'>

           
              <ToggleBlock
  packageName="Four Class Plan"
  price="Rs. 8999/-"
  packageDetails={[
    {
      heading: "",
      points: ["Ads Management Upto 2 Campaigns"]
    },
    {
      heading: "",
      points: [
        "Ads design and creation",
        "Google shopping ads",
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
  packageName="Six Class Plan"
  price="Rs. 12999/-"
  packageDetails={[
    {
      heading: "",
      points: ["Ads Management Upto 6 Campaigns"]
    },
    {
      heading: "",
      points: [
        "Ads design and creation",
        "Google shopping ads",
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
  packageName="Ten Class Plan"
  price="Rs. 19999/-"
  packageDetails={[
    {
      heading: "",
      points: ["Ads Management Upto 15 Campaigns"]
    },
    {
      heading: "",
      points: [
        "Ads design and creation",
        "Google shopping ads",
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

export default GoogleAdsMobile;