import React from "react";
import Image from "next/image";

const videos = [
  {
    id: 1,
    title: "Boost your conversion rate",
    videoUrl: "https://www.youtube.com/embed/v9iulX-S0VM",
  },
  {
    id: 2, // Corrected the duplicate ID here
    title: "Boost your conversion rate",
    videoUrl: "https://www.youtube.com/embed/aAtjVAhu0eF0q73Q",
  },
  // Add more video items here
];

export default function Page() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Image
            src="/images/lg-logo-trans.png"
            height={300}
            width={300}
            className="mx-auto"
          />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Grow Your Business, The Right Way
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn World-Class Growth Tools & Strategies To Help You Grow and
            Scale Long-Term In Any Industry and Any Economy
          </p>
          <a
            href="https://www.leadinggiants.com/ceo-giant-influence-masterclass"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >
            Access now
          </a>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex flex-col items-start justify-between"
            >
              <iframe
                className="w-full aspect-video rounded-2xl"
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
