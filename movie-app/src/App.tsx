import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import ListMoviePage from './pages/ListMoviePage';
import { NotFoundPage } from './pages/NotFoundPage';
import SingleMoviePage from './pages/SingleMoviePage';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ListMoviePage />}>
          <Route path=":movieType" element={<ListMoviePage />}></Route>
        </Route>
        <Route path="movie/:id" element={<SingleMoviePage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
