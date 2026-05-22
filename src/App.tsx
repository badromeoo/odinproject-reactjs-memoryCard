import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

const apiUrl = import.meta.env.VITE_API_URL;
type Card = {
  name: string;
  id: number;
  image: string;
};
function App() {
  const [card, setCard] = useState<Card[]>([]);
  const [currentCard, setCurrentCard] = useState<number[]>([]);
  const [counterHighScore, setCounterHightScore] = useState(0);
  const [currentHighScore, setCurrentHighScore] = useState(0);
  const shuffleCards = () => {
    const shuffled = [...card].sort(() => Math.random() - 0.5);
    setCard(shuffled);
  };
  const handlerCurrentCard = (card: Card) => {
    if (currentCard.includes(card.id)) {
      setCurrentCard([]);
      console.log(currentCard);
      setCounterHightScore(0);
      shuffleCards();
    } else {
      setCurrentCard([...currentCard, card.id]);
      setCounterHightScore(counterHighScore + 1);
      setCurrentHighScore(counterHighScore);
      shuffleCards();
    }
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
      <p>score:{currentHighScore}</p>
      <div className="py-8 px-8 grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 content-center gap-4  text-black">
        {card.map((card) => {
          return (
            <Card
              onClick={() => {
                handlerCurrentCard(card);
              }}
              id={card?.id}
              name={card?.name}
              image={card?.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
