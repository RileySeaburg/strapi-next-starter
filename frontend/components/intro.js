

export default function Intro() {
  return (
    <section className="flex-col  flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
      Strapi Next.js Starter
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
       A starter template for all your content management needs. <br/>
       NextJS has been gutted so add what you need.
      </h4>
      <a
          href="http://localhost:1337"
          className=" text-white duration-200 transition-colors p-1 mt-5 rounded-sm	bg-blue-400	hover:bg-blue-500">
          Start Hacking
        </a>
    </section>
  )
}
