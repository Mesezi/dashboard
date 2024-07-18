import { tableData } from "@/lib/dummyData";
import { User } from "@/types";

export const getUsersTableData = async () => {
  try {
    // Simulate a network delay with a promise that resolves after a short timeout
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Return the dummy data
    return tableData;
  } catch (err) {
    throw new Error('Error fetching data');
  }
};

export const getUserDetails = async (id:string) =>{
    const rawData = sessionStorage.getItem('dashboardMockData');
    if(!rawData){
        throw new Error('No data found') 
    }
    const data = JSON.parse(rawData)
    const userInfo = data.find((user: User)=> user.id === id)

    if(!userInfo)
      throw new Error('No data found') 
    
    return userInfo
  }
