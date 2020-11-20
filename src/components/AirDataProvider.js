// import React,{useState,createContext,useEffect} from 'react'

// import axios from 'axios'

// const airDataContext = createContext(undefined);
// const airDataDispatchContext = createContext(undefined);

// const AirDataProvider = ({children})=>{



//     const [airData,setAirData]= useState([]);

//     useEffect(function(){
//         axios({
//             url:"http://localhost:4000/api",
//             method:"GET"}
//         ).then(result=>{console.log(result.data);if(result.data!==undefined){setAirData(result.data)}}).catch(err=>console.log(err))
//     })

   
//     return <airDataContext.Provider value={airData}>
//         <airDataDispatchContext.Provider value={setAirData}>
//             {children}

//         </airDataDispatchContext.Provider>
//     </airDataContext.Provider>

// }

// export { AirDataProvider, airDataContext, airDataDispatchContext }