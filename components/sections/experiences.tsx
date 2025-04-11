import { Hr } from "@/components/atoms/hr";

export function Experiences() {
  return (
    <div className="flex flex-col md:flex-row border-y border-gray-300">
      <div className="flex flex-col gap-4 p-4 lg:p-8">
        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight">
          <strong className="text-black font-medium">Since</strong> 2007 <strong className="text-black font-medium">in the internet.</strong><br /> See a small piece of my life.
        </h2>
        <strong className="text-lg text-black font-medium">Childhood</strong>
        <p>I{"'"}m self-taugh Software Engineer and curious enough to bring ideas to life, whether they start from the first square at Figma or random projects ideas. Normally, I tend to invest my time building utilities, components, interfaces, staying updated on new tools, improving my programming logic to write more performant code, reading books, or simply playing games.</p>
        <strong className="text-lg text-black font-medium">Teen age</strong>
        <p>I{"'"}m self-taugh Software Engineer and curious enough to bring ideas to life, whether they start from the first square at Figma or random projects ideas. Normally, I tend to invest my time building utilities, components, interfaces, staying updated on new tools, improving my programming logic to write more performant code, reading books, or simply playing games.</p>
        <strong className="text-lg text-black font-medium">Now</strong>
        <p>I{"'"}m a 28-year-old self-taught Software Engineer and curious enough to bring ideas to life, whether they start from the first square at Figma or random projects ideas. Normally, I tend to invest my time building utilities, components, interfaces, staying updated on new tools, improving my programming logic to write more performant code, reading books, or simply playing games.</p>
      </div>
      <Hr className="md:hidden" />
      <div className="flex flex-col gap-4 md:gap-4 bg-white md:-ml-1 p-4 lg:p-8 border-l border-gray-300">
        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-black">Work Experiences</h2>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-[#bb9d6d]">Casp Brasil</span>
          <strong className="text-lg text-black font-medium">Software Engineer</strong>
          <p>During my time at Intermed, I was responsible for developing high-conversion Landing Pages to promote health and gym products. I was also in charge of ensuring search engine optimization, which led to better rankings and increased traffic to the pages.</p>
          <strong className="text-sm text-black font-medium">12/2024 — Present</strong>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-[#bb9d6d]">IESDE</span>
          <strong className="text-lg text-black font-medium">Software Engineer</strong>
          <p>IESDE is an educational institution that aims to provide education through the production of books and video lessons. I was responsible for migrating a project with over 700,000 monthly users from Angular to Nuxt 3. My responsibilities range from creating application designs to maintaining and updating the existing codebase to improve performance and usability.</p>
          <strong className="text-sm text-black font-medium">03/2022 — 12/2024</strong>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-[#bb9d6d]">Intermed</span>
          <strong className="text-lg text-black font-medium">Software Engineer</strong>
          <p>During my time at Intermed, I was responsible for developing high-conversion Landing Pages to promote health and gym products. I was also in charge of ensuring search engine optimization, which led to better rankings and increased traffic to the pages.</p>
          <strong className="text-sm text-black font-medium">10/2020 — 02/2021</strong>
        </div>
      </div>
    </div>
  );
}