// import Image from 'next/image'
// import clearMapImage from '/Users/enriqco/Documents/Github2.0/PBLGroupG.github.io/public/clear-map.png'

export default function OtherProjectsPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto animate-fadeIn space-y-8">
        <h1 className="text-center text-6xl font-bold text-gray-900 dark:text-gray-100 mb-12">
          Other Projects
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
          One notable example of a crime mapping system is the <strong>CLEARMap</strong> developed by the Chicago Police Department.
          It allows users to filter and explore crime data across the city based on location, time range, and crime type.
          While it provides detailed information, the interface can be overwhelming and may be hard to interpret for general users.
        </p>

        <div className="rounded-lg overflow-hidden shadow-md border border-gray-300 dark:border-gray-700">
          {/* <Image
            src={clearMapImage}
            alt="Chicago CLEARMap Interface"
            className="w-full h-auto object-cover"
            placeholder="blur"
          /> */}
        </div>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
          Our project aims to take inspiration from tools like CLEARMap but focus on user-friendly design, 
          predictive insights, and clear safety recommendations. By simplifying the interface and 
          incorporating machine learning to predict future crime trends, we hope to make crime data more accessible and actionable.
        </p>
      </div>
    </section>
  )
}
