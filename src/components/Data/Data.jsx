import React, {useMemo, useState, useEffect} from 'react';
import axios from 'axios'; 

const Data = () => {
    const APILINK = 'https://ndforler.github.io/HockeyAPI/data.json';

    const [data, setData] = useState([]);
    const players = useMemo(() => data, [data]);


    useEffect(() => {
        axios.get(APILINK)
        .then(resp => {
          setData(resp.data);
        });
      }, []);

    const sort = () => {
          axios.get(APILINK)
            .then(() => {
                const dataSorted = 'points';
                const sorted = data.sort((a, b) => b[dataSorted] - a[dataSorted]);
                setData([...sorted]);
            });
    };

      const filter = event => {
    
        event.persist();
        const value = event.target.value;
        
        if (value.length === 0) {
            axios.get(APILINK)
            .then(resp => {
              setData(resp.data);
            });
        } else if (isNaN(value)) {
          const regex = new RegExp(value.toString().toLowerCase());
          axios.get(APILINK)
            .then(resp =>
                setData([...resp.data.filter(plays => (regex.test(plays.name.toString().toLowerCase())))])
            );
        } else {
          const num = Number(value);
          console.log(num);
          axios.get(APILINK)
            .then(resp =>
                setData([...resp.data.filter(plays => (Number(plays.games) === num || Number(plays.goals) === num) || (Number(plays.assists) === num || (Number(plays.points) === num )))])
            );
        }
      };


    return (
        <>
            <div>
                <h2>Hockey Players Table</h2>
                <hr/>
                <div id="filtering">
                    <label htmlFor="filter">Filter</label>
                    <input type="text" name="filter" onChange ={filter}/>
                    <button onClick={sort}>Sort Points</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Games Played</td>
                            <td>Goals</td>
                            <td>Assists</td>
                            <td>Points</td>
                        </tr>
                    </thead>
                    {players.map((player, i) => (
                    <tbody>
                        <td>{player.name}</td>
                        <td>{player.games}</td>
                        <td>{player.goals}</td>
                        <td>{player.assists}</td>
                        <td>{player.points}</td>
                    </tbody>
                ))}
                </table>
            </div>
        </>
    );
}
 
export default Data;