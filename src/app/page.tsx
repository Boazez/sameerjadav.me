import { Star2 } from "~/components/Icons";

export default function Home() {
  return (
    <main className="mt-4 p-4 md:p-6">
      <div className="mx-auto max-w-4xl">
        <p className="w-full text-center text-5xl uppercase md:text-8xl lg:text-9xl">
          sameer jadav
        </p>
        <div className="flex w-full flex-col items-center text-center text-5xl uppercase md:text-8xl lg:text-9xl">
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="-mt-3 md:-mt-6 lg:-mt-10">
              <Star2 />
            </div>
            <p>front-end</p>
          </div>
          <div className="flex items-center gap-4 lg:gap-8">
            <p>developer</p>
            <div className="-mt-3 md:-mt-6 lg:-mt-10">
              <Star2 />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
