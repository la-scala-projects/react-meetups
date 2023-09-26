import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AllMetups from "./pages/AllMetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMetups />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
      </Routes>
    </Layout>
  );
};

export default App;
