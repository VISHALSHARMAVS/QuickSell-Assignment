import  { useCallback, useEffect, useState } from 'react';
import Header from './Component/Header';
import Grid from './Component/Grid';
import { loadGrid, mapUsersByUserId } from './Utils/reducer';
import Loader from './Component/Loader';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({});
  const [gridData, setGridData] = useState({});
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    loadSettings();
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(resp => resp.json())
      .then(res => {
        const { tickets, users } = res;
        setTickets(tickets);
        setUserData(mapUsersByUserId(users));
      })
      .catch(err => { console.error(err); });
  }, []);

  useEffect(() => {
    if (!tickets.length) return;
    setGridData(loadGrid(tickets, grouping, ordering));
    setLoading(false);
  }, [grouping, ordering, tickets]);

  const onSetGrouping = useCallback((value) => {
    setLoading(true);
    setGrouping(value);
    saveSettings({ grouping: value });
  }, []);

  const onSetOrdering = useCallback((value) => {
    setLoading(true);
    setOrdering(value);
    saveSettings({ ordering: value });
  }, []);

  const saveSettings = useCallback((data) => {
    for (let key in data) {
      localStorage.setItem(key, data[key]);
    }
  }, []);

  const loadSettings = useCallback(() => {
    setGrouping(localStorage.getItem("grouping") || "status");
    setOrdering(localStorage.getItem("ordering") || "priority");
  }, []);

  return (
    <div className="App">
      <Header grouping={grouping} setGrouping={onSetGrouping} ordering={ordering} setOrdering={onSetOrdering} />
      {loading ? <Loader /> : <Grid gridData={gridData} grouping={grouping} userIdToData={userData} />}
    </div>
  );
}

export default App;
