import Counter from "./components/Counter";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid red",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "50%",
          padding: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* {UI 1} */}
        <Counter
          render={({ count, increment, decrement }) => (
            <div
              style={{
                border: "2px solid red",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
                padding: 10,
              }}
            >
              <p
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: 10,
                }}
              >
                First UI
              </p>
              <h1 style={{ margin: 0, padding: 0 }}>{count}</h1>
              <button onClick={increment}>Increment</button>
              <button onClick={decrement}>Decrement</button>
            </div>
          )}
        />

        {/* {uI 2} */}

        <Counter
          render={({ count, increment, decrement }) => (
            <div
              style={{
                borderRadius: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
                border: "2px solid black",

                width: "50%",
              }}
            >
              <h1
                style={{
                  backgroundColor: "orange",
                  color: "black",
                  padding: 10,
                  borderRadius: 3,
                  textAlign: "center",
                }}
              >
                Second UI
              </h1>
              <h3 style={{ textAlign: "center" }}>{count}</h3>
              <button
                style={{
                  backgroundColor: "orange",
                  borderRadius: "50%",
                  fontSize: "30px",
                }}
                onClick={increment}
              >
                +
              </button>
              <button
                style={{
                  backgroundColor: "red",
                  fontSize: "30px",
                  borderRadius: "50%",
                }}
                onClick={decrement}
              >
                -
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default App;
