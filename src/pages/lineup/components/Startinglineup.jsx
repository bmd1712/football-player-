import Player from "./Player";

export default function Startinglineup({ players, onDeletePlayer, onEditPlayer }) {
  // players là mảng slots (null hoặc tên)
  return (
    <div>
      {players.map((name, idx) => (
        <div key={idx}>
          {/* Tên player*/}
          {name ? (
            <Player
              number={idx + 1}
              name={name}
              onDelete={() => onDeletePlayer(idx)}
              onEdit={() => onEditPlayer(idx)}
            />
          ) : (
            // danh sách
            <div className="flex gap-4 m-2 items-center">
              <div className="w-8 text-center text-sm font-medium">#{idx + 1}</div>
              <div className="flex-1 p-2 rounded bg-gray-100 text-gray-400 dark:bg-gray-600/10" onClick={() => onEditPlayer(idx)}>Trống</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
