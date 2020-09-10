import React,{useState} from 'react';
import './addPage.scss';
import ManuallyAdd from './ManuallyAdd';
import { addDaily, getDaily } from "../Redux/actions/dailyActions"
import { getGoal } from "../Redux/actions/goalActions"
import { useDispatch, connect, useSelector } from "react-redux";
import { useEffect } from 'react';

function AddPage(props) {

  const fetchDaily = useSelector(state=>state.dailyReducer)
  const fetchGoal = useSelector(state=>state.goalReducer)
  const dispatch = useDispatch();


  const [kcalAddAmount,setKcalAddAmount] = useState(0);
  const [dailyInformation,setdailyInformation] = useState({
    DailyCount: 0,
    Date: "",
    Success: false,
    User_ID: 1,
    Goal:"0"
  })
  
  useEffect(()=>{
    setdailyInformation({...dailyInformation,...fetchDaily}) 
  },[fetchDaily])

  useEffect(()=>{
    setdailyInformation({...dailyInformation,Goal:fetchGoal.Goal})
  },[fetchGoal])

  useEffect(()=>{
    dispatch(getGoal()) // Get goal on load
    dispatch(getDaily()) // Get daily Count on load
  },[])

  const AddKcalAmount = () =>{
    dispatch(addDaily(kcalAddAmount))
  }

  const handleKcalChange = (amount) => {
    amount = parseInt(amount.target.value)
    if (amount>0&&amount<5000)
      setKcalAddAmount(amount)
    else
      console.log("Error, add amount out of bounds")
  }

  console.log("daily",dailyInformation)

  return (
    <div className="add-meals-page">
        {dailyInformation.Goal}
        <ManuallyAdd handleKcalChange={handleKcalChange} 
        addKcalAmount={AddKcalAmount}></ManuallyAdd>
    </div>
  );
}

export default connect(null,{addDaily,getGoal})(AddPage)
