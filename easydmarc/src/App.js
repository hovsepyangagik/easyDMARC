import './App.scss';

import Header from "./components/header/Header";
import SubHeader from "./components/subHeader/SubHeader";
import LeftMenuContainer from "./components/leftMenu/LeftMenuContainer";
import MainContent from "./components/mainContent/MainContent";



function App() {
    return (
        <div className="App main-layout">
            <Header />
            <SubHeader />
            <section className="main-content">
                <LeftMenuContainer/>
                <MainContent />
            </section>

        </div>
  );
}

export default App;
