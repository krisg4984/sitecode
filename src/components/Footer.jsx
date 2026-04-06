export default function Footer() {
  return (
    <footer className="w-full py-20 px-8 bg-[#f6f3f2]">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto border-t border-[#bec9bf]/15 pt-12">
        <span className="font-headline font-black text-[#1c1b1b] text-xl mb-8 md:mb-0">Kris Eden Gonzales</span>
        <div className="flex flex-wrap justify-center gap-12 mb-8 md:mb-0">
          <a className="font-body italic text-lg text-[#1c1b1b]/40 hover:underline decoration-[#00502e] underline-offset-4 transition-all ease-in-out" href="#">
            LinkedIn
          </a>
          <a className="font-body italic text-lg text-[#1c1b1b]/40 hover:underline decoration-[#00502e] underline-offset-4 transition-all ease-in-out" href="#">
            Privacy Policy
          </a>
          <a className="font-body italic text-lg text-[#1c1b1b]/40 hover:underline decoration-[#00502e] underline-offset-4 transition-all ease-in-out" href="#contact">
            Contact
          </a>
        </div>
        <p className="font-body italic text-lg text-[#1c1b1b]/40">
          © 2024 Kris Eden Gonzales. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
