
import React from "react";
import "../css/fonts.css"

const TableRow = (props) =>{

   

      const rows = props.features.map((value,ind)=>(
           
         <tr className={` ${ind %2 == 0 ? "bg-white-100" : "bg-gray-100"} text-md `}>
            <td>{value.heading}</td>
            <td className={` ${value.startup == '✓' ? "text-green-500" : ""} ${value.startup == '-' ? "text-gray-500 text-2xl" : ""} `}>{value.startup}</td>
            <td className={` ${value.business == '✓' ? "text-green-500" : ""} ${value.business == '-' ? "text-gray-500 text-2xl" : ""} `}>{value.business}</td>
            <td className={` ${value.enterprise == '✓' ? "text-green-500" : ""} ${value.enterprise == '-' ? "text-gray-500 text-2xl" : ""} `}>{value.enterprise}</td>
            <td className={` ${value.platinum == '✓' ? "text-green-500" : ""} ${value.platinum == '-' ? "text-gray-500 text-2xl" : ""} `}>{value.platinum}</td>
            <td className={` ${value.master == '✓' ? "text-green-500" : ""} ${value.master == '-' ? "text-gray-500 text-2xl" : ""} `}>{value.master}</td>
            <td className={` ${value.supreme == '✓' ? "text-green-500" : ""} ${value.supreme == '-' ? "text-gray-500 text-2xl" : ""} `}>{value.supreme}</td>
            <td className={` ${value.allinone == '✓' ? "text-green-500" : ""} ${value.allinone == '-' ? "text-gray-500 text-2xl" : ""} `}>{value.allinone}</td>


         </tr>
         
      ))

    return(

        <>
        {/* this is the heading for every social handle */}
        <tr className="font-semibold">
            <td className="p-2 bg-gray-100 block md:table-cell text-xl">{props.handle}</td>
            <td className="p-2 bg-gray-100 block md:table-cell"></td>
            <td className="p-2 bg-gray-100 block md:table-cell"></td>
            <td className="p-2 bg-gray-100 block md:table-cell"></td>
            <td className="p-2 bg-gray-100 block md:table-cell"></td>
            <td className="p-2 bg-gray-100 block md:table-cell"></td>
            <td className="p-2 bg-gray-100 block md:table-cell"></td>
            <td className="p-2 bg-gray-100 block md:table-cell"></td>
           
               
               
        </tr>
        {rows}

         
        </>
    )



}

export default TableRow;