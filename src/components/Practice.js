import React from 'react'
import InsideNav from './InsideNav'
import DashboardFooter from './DashboardFooter'
import PracticeCard from './PracticeCard'
import PracticeHead from './PracticeHead'

function Practice() {
    return (
        <div>
            <InsideNav />
            <div style={{height:'50px'}}></div>
            <PracticeHead />
            <PracticeCard />
            <DashboardFooter />
        </div>
    )
}

export default Practice
