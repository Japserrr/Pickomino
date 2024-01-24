import Player from "../../../Common/Types/Player";
import './PlayerCard.css';

type props = {
    player: Player,
}
export default function PlayerCard({ player }: props) {
    return (
        <div className="player-card">
            <span className="player-card__name">{player.name}</span>

        </div>
    );
}