import Contact from "../src/component/Contact"
import whiskerson from "../src/assets/images/mr-whiskerson.png"
import fluffykins from "../src/assets/images/fluffykins.png"
import felix from "../src/assets/images/felix.png"
import pumpkin from "../src/assets/images/pumpkin.png"

function App() {
  return (
    <div className="contacts">
      <Contact
        img={whiskerson}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={fluffykins}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  )
}

export default App