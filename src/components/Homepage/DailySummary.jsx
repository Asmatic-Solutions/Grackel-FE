import React from 'react';


function DailySummary({dailyInformation}) {
    return (
    <div className="daily-summary wrapper wide">
        <div className="kcalInfo">
            <h1 className="title">Daily Amonut</h1>
            <div className="counter">
                <span className={dailyInformation.success?"success":"failed"}>{dailyInformation.daily_count}</span>/{dailyInformation.goal}
                <span className="kcal">Kcal</span>
            </div>
        </div>
        <div className="date">
            {new Date(dailyInformation.date).toDateString()}
        </div>
    </div>
  );
}

export default DailySummary;
