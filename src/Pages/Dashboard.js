import React from 'react'
import InsideNav from '../components/InsideNav'
import DashboardCards from '../components/DashboardCards';
import DashboardFooter from '../components/DashboardFooter';
import TaskCards from '../components/TaskCards';
import LevelCards from '../components/LevelCards';
import DashboardHead from '../components/DashboardHead';
function Dashboard() {
    return (
        <div>
            <InsideNav />
            <br></br>
            <DashboardHead />
            <TaskCards />
            <DashboardCards />
            <LevelCards />
            <DashboardFooter />
        </div>
    )
}

export default Dashboard;
