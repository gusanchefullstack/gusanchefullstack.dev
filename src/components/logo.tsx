import { Layers } from "lucide-react";
export const Logo = () => {
  return (
    <div className="flex flex-nowrap justify-center items-center gap-4">
      <div className="text-yellow-100">
        <Layers className="h-12 w-12" />
      </div>
      <div>
        <h1 className="font-outfit text-3xl font-extrabold text-stone-200 tracking-widest">Gustavo Sanchez</h1>
      </div>
    </div>
  );
};
