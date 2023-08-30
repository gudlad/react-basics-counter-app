import "./Counter.css";
export default function CounterButton({
  by,
  incrementMethod,
  decrementMethod,
}) {
  // function incrementCounterFunction() {
  //   incrementMethod(by);
  // }
  // function decrementCounterFunction() {
  //   decrementMethod(by);
  // }

  return (
    <div className="Counter">
      <div>
        <button
          //   style={{ fontSize: "30px" }}
          className="button counterButton"
          onClick={() => incrementMethod(by)}
        >
          +{by}
        </button>
        <button
          //   style={{ fontSize: "30px" }}
          className="button counterButton"
          onClick={() => decrementMethod(by)}
        >
          -{by}
        </button>
      </div>
    </div>
  );
}
