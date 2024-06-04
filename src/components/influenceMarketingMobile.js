import ToggleBlock from "./ToggleBlock.js"

const InfluenceMobile = () =>{
    return(
        <>


<div className='flex  w-[55vh] flex-col items-center justify-center border'>
<ToggleBlock
  packageName="Base Plan"
  price="Rs. 9999/-"
  packageDetails={[
    {
      heading: "",
      points: ["6-8 Collaborations"]
    }
  ]}
/>

<ToggleBlock
  packageName="Middle Plan"
  price="Rs. 14999/-"
  packageDetails={[
    {
        heading: "",
      points: ["10-12 Collaborations"]
    }
  ]}
/>

<ToggleBlock
  packageName="Ultimate Plan"
  price="Rs. 19999/-"
  packageDetails={[
    {
        heading: "",
      points: ["15-17 Collaborations"]
    }
  ]}
/>
</div>
        </>
    )
}
export default InfluenceMobile;