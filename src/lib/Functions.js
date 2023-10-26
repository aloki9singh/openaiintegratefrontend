
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

export const handleGenerate = async (content_type, user_query) => {
  const queryParams = new URLSearchParams({ content_type, user_query });
  const url = `https://dark-lime-long-underwear.cyclic.app/api1/shayarigenerator?${queryParams.toString()}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.response.textContent;
  } catch (error) {
    console.error(error);
    // Handle the error, e.g., by returning a default value or showing an error message.
    return "An error occurred.";
  }
};
