import Image from 'next/image'

export default function SystemDesign() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen px-6 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          System Design Diagrams
        </h1>

        {/* Diagram Section 1 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Use Case Diagram
          </h2>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md bg-gray-50 dark:bg-gray-800">
            <Image
              src="/useCase.png"
              alt="Use Case Diagram"
              width={800}
              height={600}
              className="rounded-md"
            />
          </div>
        </section>

        {/* Diagram Section 2 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Class Diagram
          </h2>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md bg-gray-50 dark:bg-gray-800">
            <Image
              src="/classdiagram.drawio.svg"
              alt="Sequence Diagram"
              width={800}
              height={600}
              className="rounded-md"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. State Diagram
          </h2>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md bg-gray-50 dark:bg-gray-800">
            <Image
              src="/classDiagram.png"
              alt="Sequence Diagram"
              width={800}
              height={600}
              className="rounded-md"
            />
          </div>
        </section>


        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Map Activity Diagram
          </h2>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md bg-gray-50 dark:bg-gray-800">
            <Image
              src="/classDiagram.png"
              alt="Sequence Diagram"
              width={800}
              height={600}
              className="rounded-md"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. C
          </h2>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md bg-gray-50 dark:bg-gray-800">
            <Image
              src="/StateDiagram.svg"
              alt="Sequence Diagram"
              width={800}
              height={600}
              className="rounded-md"
            />
          </div>
        </section>

        {/* Add more diagrams below as needed */}
      </div>
    </div>
  )
}
