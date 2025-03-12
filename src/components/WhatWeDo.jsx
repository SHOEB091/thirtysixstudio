export default function WhatWeDo() {
  return (
    <div className="w-full min-h-screen bg-[#faf7f5] dark:bg-[#121212] flex items-center px-[200px]">
      <div className="w-full flex flex-col">
        {/* Top Section */}
        <div className="w-full flex justify-between">
          <div className="text-[18px] font-medium tracking-wide dark:text-white">
            <span className="mr-2 text-[20px]">01</span> — <span className="font-bold">WHAT WE DO</span>
          </div>
          <div className="max-w-[400px] text-[34px] font-semibold leading-tight dark:text-white">
            We aim to elevate digital production in the advertising space,
            bringing your ideas to life.
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex justify-end mt-20">
          <div className="max-w-[400px] text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
            As a contemporary studio, we use cutting-edge design practices and
            the latest technologies to deliver current digital work.
            <br />
            <br />
            Our commitment to innovation and simplicity, paired with our agile
            approach, ensures your journey with us is smooth and enjoyable from
            start to finish.
          </div>
        </div>
      </div>
    </div>
  );
}
