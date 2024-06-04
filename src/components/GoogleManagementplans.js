import "../css/fonts.css"


const GoogleManagementAds = () =>{

    const pricingPlans = [
        { name: "FOUR CLASS PLAN", price: "₹ 8999",color : "text-green-500",bg : "bg-green-500"  },
        { name: "SIX CLASS PLAN", price: "₹ 12999",color : "text-blue-500",bg : "bg-blue-500"  },
        { name: "TEN CLASS PLAN", price: "₹ 19999",color : "text-red-500",bg : "bg-red-500"  },
       
      ];

 
     return(

        <>
        <div className="flex flex-col gap-2 items-center justify-center">

            <h1 className="text-3xl mb-4 mt-10 font-bold roboto">Google Management Ads</h1>

            <table className=" flex flex-col gap-2 items-center justify-center">

                <thead>
               <tr>
               {pricingPlans.map((plan, index) => (
                <>
                
              <th key={index} className=" px-40 py-10   text-2xl text-left font-medium  block md:table-cell">
                <div className="mb-4">
                <p className={`${plan.color} text-lg roboto`}>{plan.name}</p>
                <p className={`${plan.color} text-md roboto`} >{plan.price}</p>

                </div>
               
                <button className={` ${plan.bg} px-2 py-2 text-sm rounded-lg bg-black text-white`}>get now</button>
              </th>
              <th className=""></th>
              <th className=""></th>
              </>
             
              
            ))}
               </tr>

                </thead>
                <tbody className="text-sm">
  <tr>
    <td class="p-8 border">Ads Management</td>
    <td class="p-8 border">Up to 5 campaigns</td>
    <td className="p-4"></td>
    <td class="p-8 border">Ads Management</td>
    <td class="p-8 border">Up to 10 campaigns</td>
    <td className="p-4"></td>
    <td class="p-8 border">Ads Management</td>
    <td class="p-8 border">Up to 10 campaigns</td>
  </tr>
  <tr>
    <td class="p-4  border">Ads design and creation</td>
    <td class="p-4 border">Yes</td>
    <td></td>
    <td class="p-4  border">Ads design and creation</td>
    <td class="p-4  border">Yes</td>
    <td></td>
    <td class="p-4  border">Ads design and creation</td>
    <td class="p-4  border">Yes</td>
  </tr>
  <tr>
    <td class="p4  border">Facebook shopping ads</td>
    <td class="p-4  border">Yes</td>
    <td></td>
    <td class="p-4 border">Facebook shopping ads</td>
    <td class="p-4  border">Yes</td>
    <td></td>
    <td class="p-4  border">Facebook shopping ads</td>
    <td class="p-4  border">Yes</td>
  </tr>
  <tr>
    <td class="p-4  border">Ad optimization</td>
    <td class="p-4  border">Yes</td>
    <td></td>
    <td class="p-4  border">Ad optimization</td>
    <td class="p-4  border">Yes</td>
    <td></td>
    <td class="p-4  border">Ad optimization</td>
    <td class="p-4  border">Yes</td>
  </tr>
  <tr>
    <td class="p-4  border">Campaign strategy and Set Up</td>
    <td class="p-4  border">Yes</td>
    <td></td>
    <td class="p-4  border">Campaign strategy and Set Up</td>
    <td class="p-4  border">Yes</td>
    <td></td>
    <td class="p-4  border">Campaign strategy and Set Up</td>
    <td class="p-4  border">Yes</td>
  </tr>
  <tr>
    <td class="p-4 border">Campaign monitoring</td>
    <td class="p-4 border">Yes</td>
    <td></td>
    <td class="p-4 border">Campaign monitoring</td>
    <td class="p-4 border">Yes</td>
    <td></td>
    <td class="p-4 border">Campaign monitoring</td>
    <td class="p-4 border">Yes</td>
  </tr>
  <tr>
    <td class="p-4 border">Ad's Monitoring and Management</td>
    <td class="p-4 border">Yes</td>
    <td></td>
    <td class="p-4 border">Ad's Monitoring and Management</td>
    <td class="p-4 border">Yes</td>
    <td></td>
    <td class="p-4 border">Ad's Monitoring and Management</td>
    <td class="p-4 border">Yes</td>
  </tr>
  <tr>
    <td class="p-4 border">Ads setup</td>
    <td class="p-4 border">Yes</td>
    <td></td>
    <td class="p-4 border">Ads setup</td>
    <td class="p-4 border">Yes</td>
    <td></td>
    <td class="p-4 border">Ads setup</td>
    <td class="p-4 border">Yes</td>
  </tr>
  <tr>
    <td class="p-4 border">Audience Reach</td>
    <td class="p-4 border">Yes</td>
    <td></td>
    <td class="p-4 border">Audience Reach</td>
    <td class="p-4 border">Yes</td>
    <td></td>
    <td class="p-4 border">Audience Reach</td>
    <td class="p-4 border">Yes</td>
  </tr>
  <tr>
    <td class="p-4 border">Ad's Running time</td>
    <td class="p-4 border">As per the Client</td>
    <td></td>
    <td class="p-4 border">Ad's Running time</td>
    <td class="p-4 border">As per the Client</td>
    <td></td>
    <td class="p-4 border">Ad's Running time</td>
    <td class="p-4 border">As per the Client</td>
</tr>
</tbody>

                
               

            </table>

        </div>
        </>
     )

}

export default GoogleManagementAds