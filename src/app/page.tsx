/* eslint-disable react/no-unescaped-entities */
import { Star2 } from "~/components/Icons";

export default function Home() {
  return (
    <main className="p-4 md:p-6">
      <section className="mobile-min-height lg:desktop-min-height flex flex-col justify-center">
        <div className="mx-auto my-16 max-w-max lg:my-10">
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

        <p className="mx-auto mb-16 text-center text-xl lg:hidden">
          From India, passionated about creating memorable projects
        </p>

        <p className="mx-auto mb-16 max-w-prose text-center text-xl md:text-2xl">
          I'm a frontend developer with a passion for learning and building
          awesome projects. Currently, I'm focusing on full stack development to
          expand my skillset and create even more performant and feature-rich
          applications.
        </p>
      </section>

      <section className="mx-auto max-w-prose text-xl md:text-2xl">
        <div className="space-y-3 md:space-y-4">
          <h2 className="uppercase text-myGray">info about me</h2>
          <p>
            Hi there, I'm Sameer Jadav, a front-end developer with a passion for
            programming that has grown stronger each day since I started
            learning a year ago. My journey began with exploring front-end web
            development and I am now dedicatedly pursuing full-stack
            development.
          </p>
          <p>
            My ultimate goal is to become a solid full-stack developer with the
            level of expertise you'd expect from a top-tier frontend developer,
            as showcased on Awwward. As of now, I work as a freelance developer
            and I take pride in my strong command of HTML, CSS/Tailwindcss, and
            JavaScript/TypeScript.
          </p>
          <p>
            For my front-end projects, I love working with Next.js and
            Tailwindcss, while for full-stack development, I prefer the T3
            stack. I stay up to date with the latest technologies and trends in
            the constantly evolving world of programming to enhance my skills
            and stay ahead of the game. Let's work together to create innovative
            and dynamic websites that will leave a lasting impression.
          </p>
        </div>
      </section>
    </main>
  );
}
