

type CardProps = {
  id: number;
  name: string;
  image: string;
  onClick: () => void; // Komponen Card butuh tahu kalau dia bisa diklik
};
function Card({ id, name, image, onClick}: CardProps) {
  return (
    <button onClick={onClick} className="flex active:scale-95 justify-center active:bg-emerald-700 bg-orange-200 rounded-2xl">
      <div key={id} className="px-8 py-8">
        <img src={image} className="rounded-2xl"/>
        <p className=" text-center px-8 py-8">{name}</p>
      </div>
    </button>
  );
}
export default Card;
