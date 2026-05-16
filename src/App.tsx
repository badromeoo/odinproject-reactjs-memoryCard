import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

const apiUrl = import.meta.env.VITE_API_URL;
type Card = {
  name: string;
  id: number;
  image: string;
  onClick: React.MouseEvent<HTMLButtonElement>;
};
function App() {
  const [card, setCard] = useState<Card[]>([]);
  const [currentCard, setCurrentCard] = useState<Card[]>([]);
  const [counterHighScore, setCounterHightScore] = useState(0);
  const [currentHighScore, setCurrentHighScore] = useState(0);

  const handlerCurrentCard = (card: Card) => {
    if (currentCard.includes(card)) {
      setCurrentCard(card);
      setCounterHightScore(counterHighScore + 1);
      setCurrentHighScore(currentHighScore);
    } else {
      setCurrentHighScore(counterHighScore)
      setCounterHightScore(0)

    };
  };

  useEffect(() => {
    console.log(apiUrl);
    async function getData() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data.results.length);
      const clear = [];
      for (let i = 0; i < 6; i++) {
        clear.push(data.results[i]);
      }
      setCard(clear);
      console.log(clear);
    }
    getData();
  }, []);

  return (
    <>
      <Header />

      <div className="py-8 px-8 grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 content-center gap-4  text-black">
        {card.map((card) => {
          return <Card onClick={handlerCurrentCard} id={card?.id} name={card?.name} image={card?.image} />;
        })}
      </div>
    </>
  );
}

export default App;
