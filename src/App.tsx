import React from 'react';
import './App.css';
import { Staff } from './Components/EmployeeArea/Staff/Staff';
import { BestSeller } from './Components/GameArea/BestSeller/BestSeller';
import { GameCard } from './Components/GameArea/GameCard/GameCard';
import { GameList } from './Components/GameArea/GameList/GameList';
import { RandomGames } from './Components/GameArea/RandomGames/RandomGames';
import { Sale } from './Components/GameArea/Sale/Sale';
import { Copyrights } from './Components/LayoutArea/Copyrights/Copyrights';
import { Search } from './Components/Search/Search/Search';
import { Clock } from './Components/SharedArea/Clock/Clock';


function App() {
  return (
    <div className="App">
<h1>Welcme to our Games Website</h1>
<p>Here yo can find many games!</p>
<GameCard />
<Sale />
<Copyrights />
<Staff />
<GameList />
<BestSeller />
<Clock />
<RandomGames />
<Search />
    </div>
  );
}

export default App;
