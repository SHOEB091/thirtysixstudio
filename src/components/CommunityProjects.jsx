import React from 'react';

export default function CommunityProjects() {
  return (
    <div className="min-h-[50vh] bg-white dark:bg-black px-6 sm:px-12 py-16 flex items-center justify-center text-black dark:text-white transition-colors duration-300">
      <div className="max-w-2xl w-full space-y-6 text-center sm:text-left">
        <p className="text-lg sm:text-xl leading-relaxed font-light">
          Our SS36 work includes community-centric projects for local marginalized groups, as well as career initiatives for marginalized industry talent.
        </p>

        <p className="text-lg sm:text-xl leading-relaxed font-light">
          As a client, the most impactful way you can assist us in reaching our social sustainability goals is by collaborating with our team on a project.
          We warmly welcome partnerships and sponsorships from like-minded individuals and organizations.
        </p>

        <div className="flex justify-center sm:justify-start">
          <button className="mt-6 px-6 py-2 border border-black dark:border-white rounded-full text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  );
}
