import "./App.css";
import "./pagination.css";
import Home from "./pages/Home.jsx";

function App() {
	return (
		<>
			<Home />
      <footer className="bg-gray-900 text-gray-200 text-sm py-1 text-center">Developed by 
      <a href="https://deevoid.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400"> Dev</a>
      </footer>
		</>
	);
}

export default App;
