import Profile from "./components/Profile"
import Avatar from "./assets/avatar.webp"

function App() {

  return (
    <>
      <Profile
        avatar={Avatar}
        name="Gabriel"
        bio="Sou um desenvolvedor full stack"
        email="gabriel@gmail.com"
        phone={99999999999}
        githubUrl="https://github.com/gabriel8programmer/"
        linkedinUrl="https://linkedin.com/in/gabrielwebprogrammer/"
        twitterUrl="#"
      />
    </>
  )
}

export default App
