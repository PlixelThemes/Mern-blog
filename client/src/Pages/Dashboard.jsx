import { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import { DashSidebar, DashProfile } from '../Components/index'

const Dashboard = () => {
  const location = useLocation()
  const [tab, setTab] = useState('')

  useEffect( () => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl) {
      setTab(tabFromUrl)
    }
  }, [location.search])

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* Sidebar */}
      <div className='md:w-56'>
        <DashSidebar />
      </div>
      {/* rest */}
      {tab === 'profile' && <DashProfile /> }
    </div>
  )
}

export default Dashboard