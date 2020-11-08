import React,{useState} from 'react';
import './HomePage.scss';
import AddKcalManually from './AddKcalManually';
import { addDaily, getDaily } from "../Redux/actions/dailyActions"
import { getGoal } from "../Redux/actions/goalActions"
import { useDispatch, connect, useSelector } from "react-redux";
import { useEffect } from 'react';
import DailySummary from './DailySummary';

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
    // eslint-disable-next-line
  },[fetchDaily])

  useEffect(()=>{
    setdailyInformation({...dailyInformation,Goal:fetchGoal.Goal})
    // eslint-disable-next-line
  },[fetchGoal])

  useEffect(()=>{
    dispatch(getGoal()) // Get goal on load
    dispatch(getDaily()) // Get daily Count on load
  },[dispatch])

  const AddKcalAmount = () =>{
    dispatch(addDaily(kcalAddAmount))
    // setdailyInformation({...dailyInformation, DailyCount:"0"})
  }

  const handleKcalChange = (amount) => {
    amount = parseInt(amount.target.value)
    if(Number.isNaN(amount)){
      amount = 0;
    }
    if (amount>=0&&amount<5000)
      setKcalAddAmount(amount)
    else
      console.log("Error, add amount out of bounds")
  }

  return (
    <div className="add-meals-page">
        <DailySummary dailyInformation={dailyInformation}/>
        <AddKcalManually handleKcalChange={handleKcalChange} addKcalAmount={AddKcalAmount}></AddKcalManually>
    </div>
  );
}

export default connect(null,{addDaily,getGoal})(AddPage)
