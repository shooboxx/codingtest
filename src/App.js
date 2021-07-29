
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'

function App() {
  const [type, setType] = useState('');
  const [milage, setMilage] = useState(0);
  const [hybrid, setHybrid] = useState(false);
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    axios.get('/api/').then((res)=> {

      const { data } = res
      setVehicles(data)
      
    }).catch(()=> {
      console.log('Doesn\'t work')
    })
    return () => {
      
    }
  }, [])
  const addVehicle = (e) => {
    // e.preventDefault();

    const newVehicle = {
      "type": type,
      "milage": parseInt(milage),
      "hybrid": hybrid === 'Yes'
    }
    axios.post('/api/', newVehicle).then((res)=> {

      setVehicles(vehicles => [...vehicles, newVehicle])
    }).catch(()=> {
      console.log('Doesn\'t work')
    })
  }
  return (
    <div className="App">
      <div className="vehicle-list">
        <div className="add-vehicle">
            <h3 className="heading-3">Add a vehicle</h3>
            <div className="form">
                <form action="">
                    <div className="input-form">
                        <label for="vtype">Type</label>
                        <br />
                        <input type="text" name="vtype" id="vtype" className='vtype' onChange={(e)=> {setType(e.target.value)}}/>
                    </div>
                    <div className="input-form">
                        <label for="vmilage">Milage</label>
                        <br />
                        <input type="text" name="vmilage" id="vmilage" className='vmilage' onChange={(e)=> {setMilage(e.target.value)}} />
                    </div>
                    <div className="input-form">
                        <label for="vhybrid">Hybid?</label> <br />
                        <select name="vhybrid" id="vhybrid" onChange={(e)=> {setHybrid(e.target.value)}}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div> 
                    <button id="addVehicleBtn" onClick={addVehicle}>Add Vehicle</button>

                </form>
            </div>
        </div>
        <table>
            <tr>
                <th>Vehicle Type</th>
                <th>Milage</th>
                <th>Hybrid</th>
            </tr>

            { vehicles.map((v, index) => {
                      return (
                        <tr>
                          <td key={index}>{v.type} </td>
                          <td>{v.milage} </td>
                          <td>{v.hybrid ? 'Yes' : 'No'} </td>
                          
                        </tr>
                      )
            })}
        </table>
    </div>
    </div>
  );
}

export default App;
