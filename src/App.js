import zenclass from './images/zenclass.png';
import avatar from './images/avatar.png';
import angular from './images/angular.png';

function Header() {
  return(
        <div class  ="shadow-sm p-3 bg-white rounded">
            <div className="container">
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <img src={zenclass} alt="Zen Class" width="57" height="50" />
                    </div>
                    <div className="p-2">
                        <div className="p-2">
                            <i className="fa fa-bell" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="dropdown-toggle" >
                            <img src={avatar} alt="Avatar" className="rounded-pill" height="40" width="40" />
                        </div>
                    </div>
                  </div>  
            </div>
        </div>
  );
}
function Sidebar() {
  return (
    <div class="sidebar">
      <div className="row p-2 mt-2 ml-2">
        <i className="fa fa-dashboard" aria-hidden="true">
          &nbsp;Dashboard
        </i>
      </div>
      <div className="row p-2 mt-2 ml-2">
        <i className="fa fa-building" aria-hidden="true">
          &nbsp;Class
        </i>
      </div>
      <div className="row p-2  mt-2 ml-2">
        <i className="fa fa-tasks" aria-hidden="true">
          &nbsp;Tasks
        </i>
      </div>
      <div className="row p-2 mt-2 ml-2 active">
        <i className="fa fa-comments" aria-hidden="true">
          &nbsp;Query
        </i>
      </div>
      <div className="row p-2 mt-2 ml-2">
        <i className="fa fa-calendar" aria-hidden="true">
          &nbsp;Calender
        </i>
      </div>
      <div className="row p-2 mt-2 ml-2">
        <i className="fa fa-envelope" aria-hidden="true">
          &nbsp;Apply jobs
        </i>
      </div>
    </div>
  );
}
function Content() {
  return(
    <div className="content">
      <h2 className="mt-4">Query Section</h2>
      <hr />
      <div className="card shadow-sm">
          <div className="card-header cindigo">
              <h6>Next Query Session</h6>
          </div>
          <div className="card-body">
              <div className="row">
                  <div className="col-sm-7">
                      <div className="thumbnail">
                          <i className="fa fa-play fa-3x"></i>
                          <img src={angular} alt="Angular" className="px-5 brindigo rounded" height="50%" width="90%" />
                      </div>
                  </div>
                  <div className="col-sm-5 p-4">
                      <div className="row p-2">
                          <div className="col-md-3">Date</div>
                          <div className="col-md-9">30/01/2021(Saturday)</div>
                      </div>
                      <div className="row p-2">
                          <div className="col-md-3">Time</div>
                          <div className="col-md-9">Evening 06:00 P.M. to 07:00 P.M.</div>
                      </div>
                      <div className="row p-2">
                          <div className="col-md-3">Topic</div>
                          <div className="col-md-9">Angular</div>
                      </div>
                  </div>
              </div>
          </div>
      </div> <br />
      <div className="card shadow-sm mt-2">
          <div className="card-header cindigo">
              <h6>History of Queries</h6>
          </div>
          <div className="card-body">
              <table className="table">
                  <thead>
                    <tr>
                      <th className="font-weight-normal text-muted">Date</th>
                      <th className="font-weight-normal text-muted">Ticket Name</th>
                      <th className="font-weight-normal text-muted">Description</th>
                      <th className="font-weight-normal text-muted">Type</th>
                      <th className="font-weight-normal text-muted">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20/01/2021</td>
                      <td>Javascript</td>
                      <td>What is JavaScript?</td>
                      <td>Descriptive</td>
                      <td className="text-success"><u>Answered</u></td>
                    </tr>
                    <tr>
                      <td>22/01/2021</td>
                      <td>Angular</td>
                      <td>What is Angular?</td>
                      <td>Subjective</td>
                      <td className="cindigo">Processing</td>
                    </tr>
                    <tr>
                      <td>24/01/2021</td>
                      <td>React</td>
                      <td>What is React?</td>
                      <td>Objective</td>
                      <td className="text-danger">Yet to open</td>
                    </tr>
                  </tbody>
                </table>
          </div>
      </div>
      <br /><br />
  </div>                  
  );
}
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-sm-2 cindigo sidebar"><Sidebar></Sidebar></div>
          <div className="px-5 col col-sm-10"><Content></Content></div>
        </div>
      </div>
      
    </div>
  );

}


export default App;
