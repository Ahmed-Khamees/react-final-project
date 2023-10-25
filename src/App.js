import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import MediaDetails from "./components/MediaDetails";
import { Search } from "./components/Search";
import { EmptyPage } from "./components/EmptyPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/celebs" Component={EmptyPage} />
          <Route path="/movies" Component={EmptyPage} />
          <Route path="/blog" Component={EmptyPage} />
          <Route path="/pages" Component={EmptyPage} />
          <Route path="/tvshows" Component={EmptyPage} />
          <Route path='/mediaDetails/:media_id' Component={MediaDetails} />
          <Route path='/search/:query' Component={Search} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
