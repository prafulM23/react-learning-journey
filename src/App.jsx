const Header = () => {
  return (
    <h1>Welcome to React journey</h1>
  )
}

const Profile = () => {
  const name = "Praful"
  const age = 23;
  const live = "Indore";

  return (
    <>
      <h3>My Name is {name}</h3>
      <p>My age is {age}</p>
      <p>I live in {live}</p>
    </>
  )
}

const Footer = () => {
  return (
    <p>______keep Learning React !______</p>
  )
}


const App = () => {

  return (
    <>
      <Header />
      <Profile />
      <Footer />

    </>
  )
}

export default App