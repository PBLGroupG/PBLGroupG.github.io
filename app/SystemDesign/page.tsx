import Image from 'next/image'
import { useState } from 'react'

export default function SystemDesign() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  const images = [
    { title: '1. Use Case Diagram', src: '/useCase.png' },
    { title: '2. Class Diagram', src: '/classdiagram.drawio-2.svg' },
    { title: '3. State Diagram', src: '/StateDiagram-3.svg' },
    { title: '4. System Overview Diagram', src: '/SystemOverviewSVG.svg' },
    { title: '5. CrimeForecasting Activity Diagram', src: '/CrimeForecastingSVG.svg' },
    { title: '6. Sequence 1', src: '/Sequence1.drawio-2.svg' },
    { title: '7. Sequence 2', src: '/sequence2.drawio-2.svg' },
    { title: '8. Sequence 3', src: '/sequence3.drawio-2.svg' },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen px-6 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          System Design Diagrams
        </h1>

        {images.map(({ title, src }, index) => (
          <section className="mb-12" key={index}>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{title}</h2>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md bg-gray-50 dark:bg-gray-800 relative">
              <Image
                src={src}
                alt={title}
                width={1200}
                height={800}
                className="rounded-md w-full h-auto cursor-zoom-in"
                onClick={() => setZoomedImage(src)}
              />
            </div>
          </section>
        ))}

        {zoomedImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={() => setZoomedImage(null)}
          >
            <div className="max-w-5xl max-h-[90vh] overflow-auto p-4">
              <Image
                src={zoomedImage}
                alt="Zoomed Diagram"
                width={2000}
                height={1500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
