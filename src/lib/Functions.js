
export const GetResponse =async(query)=>{
    
  const response = await fetch ('http://localhost:8080/response',{
    method:"POST",
    headers:{
        'Content-Type':"application/json"

    },
    body:JSON.stringify({query})
    })
    const data= await response.json()

  return data.reponse.textContent

    
}

