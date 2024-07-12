const getExistList=()=>{
    const DonationList = localStorage.getItem('donationList');
    if(DonationList){
        return JSON.parse(DonationList);
    }
    else{
        return [];
    }
}
const SetItemToLocal=(id)=>{
    const ExistList  = getExistList();
    const check = ExistList.find(arr=>arr===id);
    if(!check){
        ExistList.push(id);
        localStorage.setItem('donationList', JSON.stringify(ExistList));
    }
    else{
        return -5;
    }
    
}
export {SetItemToLocal, getExistList};