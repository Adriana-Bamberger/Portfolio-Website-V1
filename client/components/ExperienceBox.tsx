import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { ExperienceData } from './ExperienceData.ts'
import { Experience } from './Types.ts'

function ExperienceBox() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleActiveIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="bg-white bg-opacity-10 border border-white border-opacity-0 rounded-custom backdrop-blur-sm mx-10 my-5 p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-2xl font-bold mb-6">Experiences</h1>
      {ExperienceData.map((experience: Experience, index: number) => (
        <div key={index} className="mb-4">
          <div
            onClick={() => toggleActiveIndex(index)}
            role="button"
            tabIndex={0}
            className="flex items-center gap-2 cursor-pointer"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') toggleActiveIndex(index)
            }}
          >
            {activeIndex === index ? (
              <ChevronUpIcon className="w-5 h-5" />
            ) : (
              <ChevronDownIcon className="w-5 h-5" />
            )}
            <h3 className="text-xl font-medium">{experience.title}</h3>
          </div>
          {activeIndex === index && (
            <div
              className="text-sm mt-2 pl-6"
              dangerouslySetInnerHTML={{ __html: experience.content }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default ExperienceBox
