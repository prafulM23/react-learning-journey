function App() {
  const name = "Praful";
  const age = 22;
  const live = "Indore";
  const first = 10;
  const sec = 20;

  return (
    <>
      <div>
        <h1>Hello, I am {name}</h1>
        <p>My age is {age}</p>
        <p>I live in {live}</p>
        <p>I am learning React.</p>
      </div>

      <div>
        <p>First Number: {first}</p>
        <p>Second Number: {sec}</p>
        <p>Total: {first + sec}</p>
      </div>
    </>
  );
}

export default App;