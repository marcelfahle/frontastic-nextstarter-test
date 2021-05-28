import Image from "next/image";

export function Tile({ data }) {
  return (
    <div className="w-full relative">
      <p className="absolute text-4xl bottom-24 left-24 text-bolder text-white z-10">
        {Object.values(data.headline)[0]}
      </p>
      <div className="aspect-w-16 aspect-h-9 ">
        <Image src={`${data.bgImage.media.file}`} layout="fill" />
      </div>
    </div>
  );
}
