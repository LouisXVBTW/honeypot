import Main from './pages/main';
import Pew from './pages/pewpew';
import Credits from './pages/credits';
import Shodans from './pages/shodans';
import { Switch, Route, BrowserRouter} from 'react-router-dom';



function RouterFile() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Route exact path='/' component={Main} />
          <Route path='/pewpew' component={Pew} />
          <Route path='/sshdata' component={Credits}/>
          <Route path='/shodan' component={Shodans}/>

        </BrowserRouter>
        
       
      </div>

    </div>
  );
}

export default RouterFile;