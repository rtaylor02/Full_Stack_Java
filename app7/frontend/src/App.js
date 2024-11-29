import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="mt-5 container">
      <div className='card'>
        <div className='card-header'>Your todo's</div>
        <div className='card-body'>
            <table>
                <thead>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>Description</th>
                      <th scope='col'>Assigned</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>1</th>
                    <td>Feed dog</td>
                    <td>Eric</td>
                  </tr>
                  <tr>
                    <th scope='row'>2</th>
                    <td>Walk dog</td>
                    <td>Eric</td>
                  </tr>
                  <tr>
                    <th scope='row'>3</th>
                    <td>Play dog</td>
                    <td>Mendez</td>
                  </tr>
                </tbody>
            </table>
        </div>

      </div>
    </div>
  );
}

export default App;
