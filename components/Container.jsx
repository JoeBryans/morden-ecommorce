export default function Container({ children }) {
  return (
    <div className="flex w-screen min-h-[110vh]">
      <div className="max-w-8xl  w-[90%] flex flex-col mx-auto mt-5">
        {children}
      </div>
    </div>
  );
}
