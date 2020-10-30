import React, { Suspense } from 'react'
import PageLoader from '../common/PageLoading';
import { useWindowWidth,} from '@react-hook/window-size';
import { StoreContext } from '../context/store.context';


//Lazy-Load Imports
const Navbar = React.lazy(() => import('../components/Navbar'))
const BottomNavbar = React.lazy(() => import('../components/BottomNav'))


 
const MOBILE_BREAKPOINTS = 600;

function NavbarController(props) {

  const windowWidth = useWindowWidth();

  const {state} = React.useContext(StoreContext);




  return (
    <Suspense fallback={<PageLoader />}>
      {
        <>
        {
          windowWidth >= MOBILE_BREAKPOINTS ?
          <Navbar  user={state}/>:
          <BottomNavbar user={state} />
        }
        </>
      }
    </Suspense>

  )
}



export default NavbarController
