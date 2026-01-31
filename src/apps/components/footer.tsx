import { getDayName } from "../../utils";
export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-center bg-black text-white py-4 px-4 mt-auto w-full text-sm">
      <p>© {new Date().getFullYear()} Ganesh Gnawali. All rights reserved.</p>
      <p className="text-gray-400">Have a good {getDayName(new Date().getDay())}!</p>
    </footer>
  );
}
