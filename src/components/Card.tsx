type CardType = {
  name: string;
  id: number;
  image: string;
  onClick: React.MouseEvent<HTMLButtonElement>;
};
function Card({ id, name, image, onClick}: CardType) {
  return (
    <div onClick={onClick} className="flex justify-center bg-orange-200 rounded-2xl">
      <div key={id} className="px-8 py-8">
        <img src={image} className="rounded-2xl"/>
        <p className=" text-center px-8 py-8">{name}</p>
      </div>
    </div>
  );
}
export default Card;
