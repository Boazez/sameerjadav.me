/* eslint-disable react/no-unescaped-entities */
import { Star2 } from "~/components/Icons";

export default function Home() {
  return (
    <main className="p-4 md:p-6">
      <div className="mx-auto my-10 max-w-max">
        <h1 className="w-full text-center text-5xl uppercase md:text-8xl lg:text-9xl">
          sameer jadav
        </h1>
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

      <p className="mx-auto mb-10 max-w-prose text-center text-xl md:text-2xl">
        I'm a frontend developer with a passion for learning and building
        awesome projects. Currently, I'm focusing on full stack development to
        expand my skillset and create even more performant and feature-rich
        applications.
      </p>
    </main>
  );
}
