import React from 'react'
import InsideNav from './InsideNav'
import DashboardFooter from './DashboardFooter'
import AssessmentHead from './AssessmentHead'
import AssessmentCard from './AssessmentCard'

function Assessment() {
    return (
        <div>
            <InsideNav />
            <div style={{height:'50px'}}></div>
            <AssessmentHead />
            <AssessmentCard />
            <div style={{height:'200px'}}></div>
            <DashboardFooter />
        </div>
    )
}

export default Assessment
