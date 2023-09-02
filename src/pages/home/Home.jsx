import Banner from "../../components/Banner/banner"
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/Header"
import Main from "../../components/Main/main"
import CardInformation from "../../components/cardInformation/CardInformation"
import MainInformation from "../../components/mainInformation/MainInformation"
import "./home.css";

const Home = () => {
  const cards = [
    {subtitle: "Subtitle 1", description: "description 1"},
    {subtitle: "Subtitle 2", description: "description 2"},
    {subtitle: "Subtitle 3", description: "description 3"},
    {subtitle: "Subtitle 4", description: "description 4"},
  ];

  const mainInformation = [
    {informationM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
  ]

  return (
    <div>
    <>
      <Header />
      <Banner />
      <nav className="card-container">
        {cards.map((item) => {
          return <CardInformation subtitle={item.subtitle} description={item.description} />
        })}
      </nav>
      <Main />
      <main className="main-container">
        {mainInformation.map((item) => {
          return <MainInformation informationM={item.informationM} />
        })}
      </main>
      <Footer />
    </>
    </div>
  );
};

export default Home

