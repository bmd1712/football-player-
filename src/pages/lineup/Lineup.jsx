import { useState, useEffect } from "react";
import Startinglineup from "./components/Startinglineup";
import { allFormations } from "./components/formations";

export default function App() {
  const [textInput, setTextInput] = useState("");
  const [selectedFormation, setSelectedFormation] = useState("4-3-3");
  const formation = allFormations[selectedFormation];

  const [slots, setSlots] = useState(() => Array(formation.length).fill(null));
  const [editingIndex, setEditingIndex] = useState(null);
  useEffect(() => {
    setSlots((prev) => {
      const newLen = formation.length;
      const newSlots = Array(newLen).fill(null);
      for (let i = 0; i < Math.min(prev.length, newLen); i++) {
        newSlots[i] = prev[i];
      }
      return newSlots;
    });
  }, [selectedFormation]);

  const onTextInputChange = (e) => setTextInput(e.target.value.toUpperCase()); //in hoa chuỗi   

  const onAddBtnClick = () => {
    const name = textInput.trim();
    if (!name) return;

    const newSlots = [...slots]; // 🔥 phải khai báo sớm để có thể dùng

    if (editingIndex !== null) {
      // Đang sửa slot cụ thể
      newSlots[editingIndex] = name;
    } else {
      // Thêm mới vào slot trống đầu tiên
      const emptyIndex = slots.findIndex((s) => s === null);
      if (emptyIndex === -1) {
        alert("Đội hình đã đủ!");
        return;
      }
      newSlots[emptyIndex] = name;
    }

    setSlots(newSlots);
    setTextInput("");
    setEditingIndex(null);
  };

  
    const onEditPlayer = (index) => {
      setEditingIndex(index);
      setTextInput(slots[index] || ""); // nếu slot trống thì hiển thị rỗng
    };

    const onDeletePlayer = (index) => {
      const newSlots = [...slots];
      newSlots[index] = null;
      setSlots(newSlots);
    };

  
  const onKeyDownInput = (e) => {
    if (e.key === "Enter") onAddBtnClick();
  };

  return (
    <div className="mx-auto px-20 p-4 bg-gray-200 dark:bg-gray-800 dark:text-white">
      <h1 className="text-3xl font-semibold text-center mb-4">Starting Lineup</h1>

      {/* Chọn sơ đồ */}
      <div className="max-w-md mx-auto mb-4 flex items-center gap-3">
        <label className="whitespace-nowrap">Chọn sơ đồ:</label>
        <select
          value={selectedFormation}
          onChange={(e) => setSelectedFormation(e.target.value)}
          className="p-2 border rounded-lg flex-1 font-bold"
        >
          {Object.keys(allFormations).map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Input */}
      <div className="max-w-md mx-auto flex gap-3 mb-4">
        <input
          className="flex-1 p-2 border rounded"
          placeholder={` ${editingIndex !== null ? "#" + (editingIndex+1) : "VD: Ronaldo"}`}
          value={textInput}
          onChange={onTextInputChange}
          onKeyDown={onKeyDownInput}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 dark:bg-gray-500 dark:hover:bg-gray-700"
          onClick={onAddBtnClick}
        >
          {editingIndex !== null ? "Cập nhật" : "Thêm"}
        </button>
      </div>

      {/* 2 cột: Danh sách bên trái, sân bên phải */}
      <div className="grid grid-cols-1 sm:grid-cols-3 min-w-[400px]  gap-6 mt-6 px-10 ">
        {/* Cột trái: danh sách */}
        <div className="">
          <Startinglineup players={slots} onDeletePlayer={onDeletePlayer}  onEditPlayer={onEditPlayer}/>
        </div>

        {/* Cột phải: sân */}
        <div className=" col-span-2 relative aspect-video">
          <img
            src="https://cdn2.futbin.com/https%3A%2F%2Fcdn.futbin.com%2Fdesign%2Fimg%2Fbuilder_imgs%2F22%2Fgrass_night.png?fm=png&ixlib=java-2.1.0&w=892&s=3fa6ebb39dc8a49b31c5eae5638fa9fb"
            alt="pitch"
            className="w-full max-h-[700px] object-cover rounded-2xl"
          />
          {formation.map((pos, idx) => {
            const name = slots[idx];
            return (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  top: `${pos.top}%`,
                  left: `${pos.left}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className="text-center"
                onClick={() => onEditPlayer(idx)}
              >
                <div
                  className={`px-6 py-1 rounded text-sm font-medium  ${
                    name ? "truncate bg-sky-300/60 text-white max-w-[150px]" : "bg-gray-200 text-gray-700"
                  }`}
                  title={name || `Vị trí ${idx + 1}`}
                >
                  {name || `#${idx + 1}`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
