import React from 'react';


function DailySummary({dailyInformation}) {
    console.log(dailyInformation)

    return (
    <div className="daily-summary wrapper">
        <div className="kcalInfo">
            <h1 className="title">Daily Amonut</h1>
            <div className="counter">
                <span className={dailyInformation.Success?"success":"failed"}>{dailyInformation.DailyCount}</span>/{dailyInformation.Goal}
                <span className="kcal">Kcal</span>
            </div>
        </div>
        <div className="date">
            {new Date(dailyInformation.Date).toDateString()}
        </div>
    </div>
  );
}

export default DailySummary;
