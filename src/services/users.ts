import { User } from "@/types";

export const getUsersTableData = async () => {
  try {
    const res = await fetch(
      "https://run.mocky.io/v3/3730fbe5-0140-42c5-8d38-9c191ce3064b"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error('Error fetching data') 
  }
};

export const getUserDetails = async (id:string) =>{
    const rawData = sessionStorage.getItem('lendsqrMockData');
    if(!rawData){
        throw new Error('No data found') 
    }
    const data = JSON.parse(rawData)
    const userInfo = data.find((user: User)=> user.id === id)

    if(!userInfo)
      throw new Error('No data found') 
    
    return userInfo
  }
