
import { useState } from "react"

function SearchForm({onClicked, onSubmitted}) {

    return (
      <form onSubmit={onSubmitted} className="form" action="">
        <input placeholder="Enter the name of the User" type="text" name="text" className="form-text" />
        
        <input type="button" onClick={onClicked} className="form-btn" value="Search" />
      </form>
    )
  }
  function DisplayUsers({data}) {
    const users = data.map((user) => {
      const key = self.crypto.randomUUID()
      return (
        <div key={key} className="user-div">
          
            <div className="user-link-div">
                <a target="_blank" className="user-link" href={user.html_url}>Visit {user.login}</a>
            </div>
              <div className="user-subdiv">
                <img className="user-img" src={user.avatar_url} alt="User avg" />
                <h3 className="user-name">{user.login}</h3>
              </div>
        </div>
      )
    })
    return (
      <div>
        <h1 className="results-text">Results: </h1>
      <div className="users-div">
        {users}
      </div>
      </div>
    )
  }
  
export default  function SearchUsers() {
    
    const [data, setData] = useState([]);
  
    const API_URL = "https://api.github.com";
  
    async function findUsers(query) {
      try {
        const response = await fetch(`${API_URL}/search/users?q=${query}`);
        const json = await response.json()
        return json.items || []
      } catch(err) {
        throw new Error(err)
      }
      
    }
  
    
    async function onClicked(event) {
      let textQuery = event.target.parentNode.text.value;
      let results = await findUsers(textQuery)
      setData(results);
    }
    async function onSubmitted(event) {
      event.preventDefault()
      let textQuery = event.target.text.value;
      let results = await findUsers(textQuery)
      setData(results);
    }
  return (
    <div>
      <SearchForm onClicked={onClicked} onSubmitted={onSubmitted}/>
  
      <hr />
      {data == [] ? "Loading" : <DisplayUsers data={data} />}
    </div>
  )
  }
  