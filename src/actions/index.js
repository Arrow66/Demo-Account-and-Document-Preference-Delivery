export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const SET_SELECTED_ACCOUNT = "SET_SELECTED_ACCOUNT";
export const SET_DEFAULT_ACCOUNT = "SET_DEFAULT_ACCOUNT";

export const fetchDataSuccessAction = (mockData)=>(dispatch)=>{
    const {accounts,prefDocuments} = mockData;
   const finalData =  accounts.reduce((acc,account)=>{
    const documentbyAccountKey= prefDocuments.find((document)=>{
        return document.account_key === account.key;
    })
    acc[account.key]  = {
        accountName:account.description +" " +(account.typeDesc !== "IMA" ? account.id.slice(0, 3) + "-" + account.id.slice(3):account.id)+" " +account.typeDesc,
        docs:documentbyAccountKey.docs
    };

    return acc
    },{})
    dispatch({ type: FETCH_DATA_SUCCESS, payload: {finalData} })
}

export const setSelectedAccountAction = (key)=>(dispatch)=>{
    dispatch({
       type: SET_SELECTED_ACCOUNT,
       payload:key
    })
}

export const setDefaultAccount  = (defaultAccountData) =>(dispatch)=>{
    const {data} = defaultAccountData;
    dispatch({
       type: SET_SELECTED_ACCOUNT,
       payload:data.default_accounts[0].account_key
    })
}