import { Hr } from "@/components/atoms/hr";

export function Experiences() {
  return (
    <div className="flex flex-col md:flex-row border-y border-gray-300">
      <div className="flex-1 flex flex-col gap-4 p-4 lg:p-8">
        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight">
          <strong className="text-black font-medium">Since</strong> 2007 <strong className="text-black font-medium">in the internet.</strong><br /> See a small piece of my life.
        </h2>
        <strong className="text-lg text-black font-medium">Childhood</strong>
        <p>I was born in Oliveira Barros, a small neighborhood in Miracatu where everyone knows each other by name. Son of a housekeeper and a structural blocks entrepreneur, I had a typical countryside childhood: sunny days, playing outside until dark. At 10, I discovered the computer — and it was love at first sight. I spent hours on Orkut and creating drawings in Paint, exploring a whole new creative world. I also painted for a while, guided by my aunt. People used to say I was creative, but it took me a while to believe it. I{"'"}ve always been driven by curiosity, and to this day, I dive headfirst into whatever inspires me.</p>
        <strong className="text-lg text-black font-medium">Teen age</strong>
        <p>In my teenage years, my world was still small. Living in a small, remote neighborhood limited the possibilities for new discoveries in the physical world. It was on the internet that I found freedom—exploring games, editing photos and videos, and even creating music. I realized that what truly drove me was the act of creating—a passion that has been with me since childhood. This instinct stayed with me through college, where I discovered programming—a powerful tool that finally allowed me to bring my ideas to life.</p>
        <strong className="text-lg text-black font-medium">Now</strong>
        <p>I{"'"}m a 28-year-old self-taught Software Engineer and curious enough to bring ideas to life, whether they start from the first square at Figma or random projects ideas. Normally, I tend to invest my time building utilities, components, interfaces, staying updated on new tools, improving my programming logic to write more performant code, reading books, or simply playing games.</p>
      </div>
      <Hr className="md:hidden" />
      <div className="flex-1 flex flex-col gap-4 md:gap-4 bg-white md:-ml-1 p-4 lg:p-8 md:border-l border-gray-300">
        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-black">Work Experiences</h2>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-[#bb9d6d]">Casp Brasil</span>
          <strong className="text-lg text-black font-medium">Software Engineer</strong>
          <p>Front-end development focused on an Off-Road event platform, building responsive interfaces with Next.js and Tailwind CSS, integrated with PHP and SQL. Responsible for crafting dynamic user experiences through Motion animations and developing key features like event registration, profile management, and personalized notifications — all to ensure a seamless journey for athletes and organizers alike.</p>
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