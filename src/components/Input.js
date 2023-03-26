import React from "react";
import { useDispatch } from "react-redux";
import { addMassage } from "../store/reducers/massage_reducer";

const Input = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const sentMassage = () => {
    dispatch(addMassage(value));
  };

  return (
    <div>
      <input
        className="inpt"
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={sentMassage}>sent</button>
    </div>
  );
};

export default Input;
