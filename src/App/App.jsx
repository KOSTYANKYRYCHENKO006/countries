import { CountriesPage } from '../pages/CountriesPage';

import './App.scss';

export function App() {
  return (
    <div className="App">
      <div className='App-background'>
        <div className='App-wrapper'>
          <CountriesPage />
        </div>
      </div>
    </div>
  );
}