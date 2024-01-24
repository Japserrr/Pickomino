import React, { useState } from 'react';
import Player from '../../../Common/Types/Player';
import PkoButton from '../../../Common/Components/PkoButton';
import PlayerCard from '../Organisms/PlayerCard';



export default function GameLobby() {
    const [players, setPlayers] = useState<Player[]>([]);
    
    const addPlayer = () => {
        let nextPlayerId = 0;
        if (players.length !== 0) {
            nextPlayerId = players[players.length-1].id + 1;
        }
        setPlayers([...players, { id: nextPlayerId, name: "fdhewaifd" }]);
    }

    return (
        <div>
            <PkoButton label="Add player" action={addPlayer} />
            { 
                players.map(player => <PlayerCard key={player.id} player={player} />)
            }
        </div>
    );
}