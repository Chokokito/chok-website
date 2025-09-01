import DarkVeil from "./components/DarkVeil";
import "./globals.css";

export default function Home() {
  return (
    <div className=" w-lvw h-lvh flex items-center flex-col justify-evenly">
      <DarkVeil></DarkVeil>
      <h1 className="">Welcome to the edge of dreams and reality. 🌙</h1>
      <div className=" flex flex-col ">
        <h2>
          You're a bit early, but I'm glad you're here. <br></br>This space is
          under construction, just like every great dream.<br></br> Come back
          soon to see it come alive.
        </h2>
      </div>
    </div>
  );
}
