export const getUsersTableData = async () => {
  try {
    const res = await fetch(
      "https://run.mocky.io/v3/d0d97570-fa27-4d8e-b7a0-39ac0bbd31e2"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserDetails = async (id:string) =>{
    const rawData = sessionStorage.getItem('lendsqrMockData');
    if(!rawData){
        console.log('no data')
        throw new Error('No data found') 
    }
    const data = JSON.parse(rawData)
    const userInfo = data.find((user: any)=> user.id === id)
    return userInfo
  }
