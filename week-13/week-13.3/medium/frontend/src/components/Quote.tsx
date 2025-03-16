export const Quote = () => {
  return (
    <>
      <div className="bg-slate-200 h-screen flex justify-center items-center flex-col">
        <blockquote className="bg-red-300 text-2xl font-bold w-3/5 p-3">
          "The customer service I receive was exceptional. The support went
          above and beyond to raise my concerns."
        </blockquote>
        <div className="author w-3/5 my-2">
          <span className="text-lg font-semibold">Julius Winfied</span>
          <div className="text-sm font-medium text-gray-500">CEO, Acme Inc</div>
        </div>
      </div>
    </>
  );
};
