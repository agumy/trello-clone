export default function Index() {
  return (
    <div className="flex flex-wrap gap-3">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="flex items-center justify-center w-80 h-20 text-link hover:text-white bg-white bg-opacity-10 hover:bg-opacity-20 rounded cursor-pointer">
      ボードを新規作成
    </div>
  );
}
