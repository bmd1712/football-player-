import { FaTrash } from "react-icons/fa";

export default function Player({ number, name, onDelete, onEdit }) {
  return (
    <div className="flex gap-4 m-2 items-center">
      <div className="w-8 text-center font-medium">#{number}</div>
      <div className="flex-1 w-full relative min-w-0 hover:scale-105  ">
        <p className="w-full truncate pr-8 font-bold bg-green-300 hover:bg-green-400 p-2 rounded-lg"
          onClick={onEdit}>
          {name}</p>
        <button
          className="absolute flex-none top-3 right-2 text-white  hover:text-red-500 "
          onClick={(e) => {
            e.stopPropagation(); //ngăn click nút xóa cũng trigger edit
            onDelete();
          }}
        >
          <FaTrash/>
        </button>
      </div>
    </div>
  );
}
