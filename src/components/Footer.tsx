export default function Footer() {
  return (
    <footer className="mx-auto mb-8 flex w-full flex-col items-center justify-center p-4 text-lg md:flex-row md:justify-between md:p-6 md:text-xl">
      <p>Designed & Developed by Sameer Jadav</p>
      {/* <div className="hidden border px-24 md:block" /> */}
      <div className="flex items-center gap-4">
        <a
          href="https://twitter.com/SameerJadav_"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-black transition-all hover:border-white"
        >
          Twitter
        </a>
        <a
          href="https://github.com/SameerJadav"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-black transition-all hover:border-white"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sameer-jadav"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-black transition-all hover:border-white"
        >
          Linkedin
        </a>
      </div>
    </footer>
  );
}
