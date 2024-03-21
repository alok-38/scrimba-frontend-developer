import reactLogo from './assets/react.svg';
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <div>
        <a href="https://react.dev" target="_blank" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="flex items-center">
        <a href="#" className="text-white mr-4">Pricing</a>
        <a href="#" className="text-white mr-4">About</a>
        <a href="#" className="text-white mr-4">Contact</a>
      </div>
    </nav>
  );
}

const MainContent = () => {
  return (
    <div className="container ml-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
      <h3 className="text-xl font-semibold mb-2">Reasons why I love React:</h3>
      <ol className="list-decimal ml-8">
        <li>It's composable</li>
        <li>It's declarative</li>
        <li>It's a hireable skill to learn</li>
        <li>It's actively maintained by skilled people</li>
      </ol>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;