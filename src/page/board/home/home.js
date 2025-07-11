import { CardHome } from "../components/cardHome";
import { MessageSquare } from "lucide-react";

const dataList = [
  {
    title: "Подписчики",
    icon: <MessageSquare />,
    number: 123123,
    text: "+2.5% с прошлого месяца",
  },
  {
    title: "Подписчики",
    icon: <MessageSquare />,
    number: 3123213,
    text: "+2.5% с прошлого месяца",
  },
  {
    title: "Подписчики",
    icon: <MessageSquare />,
    number: 3123213,
    text: "+2.5% с прошлого месяца",
  },
  {
    title: "Подписчики",
    icon: <MessageSquare />,
    number: 3123213,
    text: "+2.5% с прошлого месяца",
  },
];

export const Home = () => {
  return (
    <div className="container news">
      <div>
        <h1>Главная</h1>
      </div>
      <div className="board-news-list">
        {dataList.map((res) => (
          <CardHome
            title={res.title}
            icon={res.icon}
            number={res.number}
            text={res.text}
          />
        ))}
      </div>
    </div>
  );
};
