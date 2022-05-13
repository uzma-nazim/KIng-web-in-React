import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Mint from './mint'
import Navbar from './navbar'
import Staking from './staking'
import Home from './home'
import Kingweb from './website'
import Introduction from './intorduction'

const App = () => {
  return (
   <Router>
			<main>
     	
        <Switch>
        <Route exact path="/"
            render={(props)=>
              (
                <Home {...props} 
                  
                />
              )
            }
          />
          <Route exact path="/intodunton"
            render={(props)=>
              (
                <Introduction {...props} 
                  
                />
              )
            }
          />
          <Route path="/staking"
            render={(props) =>
              (
                <Staking {...props}
                  
                />
              )
            }
          />
        </Switch>
			</main>
		</Router>
  )
}

export default App