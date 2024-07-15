import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/counter";

const Controls = () => {
  const inputElement = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleAddition = (data) => {
    dispatch(
      counterActions.addition({
        value: inputElement.current.value,
      })
    );
  };
  const handleSubtraction = () => {
    dispatch(
      counterActions.subtraction({
        value: inputElement.current.value,
      })
    );
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4 gap-3"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-1">
        <form action="">
          <input
            type="text"
            placeholder="Type a number"
            className=""
            ref={inputElement}
          />
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            onClick={handleAddition}
          >
            ADD
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg px-4 gap-3"
            onClick={handleSubtraction}
          >
            SUBTRACT
          </button>
        </form>
      </div>
    </>
  );
};
export default Controls;
