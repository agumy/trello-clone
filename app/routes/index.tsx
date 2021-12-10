export default function Index() {
  return (
    <div className="w-full">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="w-80 h-20 text-link hover:text-white bg-white bg-opacity-10 hover:bg-opacity-20 rounded cursor-pointer"></div>
  );
}
