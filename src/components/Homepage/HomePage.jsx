import React,{useState,useEffect} from 'react';
import AddKcalManually from './AddKcalManually';
import { useDispatch, connect, useSelector } from "react-redux";
import { addDaily, getDaily } from "../Redux/actions/dailyActions";
import { getGoal } from "../Redux/actions/goalActions";
import DailySummary from './DailySummary';
import HomePageLink from './HomePageLink';
import './HomePage.scss';

function AddPage(props) {

  const fetchDaily = useSelector(state=>state.dailyReducer)
  const fetchGoal = useSelector(state=>state.goalReducer)
  const dispatch = useDispatch();


  const [kcalAddAmount,setKcalAddAmount] = useState(0);
  const [dailyInformation,setdailyInformation] = useState({
    daily_count: 0,
    date: "",
    success: false,
    user_id: 1,
    goal:"0"
  })
  
  useEffect(()=>{
    setdailyInformation({...dailyInformation,...fetchDaily}) 
    // eslint-disable-next-line
  },[fetchDaily])

  useEffect(()=>{
    setdailyInformation({...dailyInformation,goal:fetchGoal.goal})
    // eslint-disable-next-line
  },[fetchGoal])

  useEffect(()=>{
    dispatch(getGoal()) // Get goal on load
    dispatch(getDaily()) // Get daily Count on load
  },[dispatch])

  const AddKcalAmount = () =>{
    dispatch(addDaily(kcalAddAmount));
    setdailyInformation({...dailyInformation});
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
        <AddKcalManually handleKcalChange={handleKcalChange} addKcalAmount={AddKcalAmount}/>
        <HomePageLink title={'Add Meals'} path={'/meals/manual'} info={"Add meals products manually, adding the name, category & amound of energy the product has."}/>
        <HomePageLink title={'Show Meals'} path={'/meals/'} info={""}/>
    </div>
  );
}

export default connect(null,{addDaily,getGoal})(AddPage)
