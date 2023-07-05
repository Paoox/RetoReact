export default function FooterDev() {
  return (
    <div className="w-screen h-64 bg-gray-200">
      <div className="flex justify-center pt-4">
        <p className="font-normal text-sm">
          <a href="" className="font-semibold text-blue-500">
            DEV Community
          </a>
          — A constructive and inclusive social network for software developers.
          With you every step of your journey.
        </p>
      </div>
      <div className="flex justify-center pt-2">
        <ul className="flex">
          <li>
            <a href="" className=" text-blue-500">
              Home
            </a>
            <span className="text-[4px] align-middle m-1">🔴</span>
          </li>
          <li>
            <a href="" className=" text-blue-500">
              Listings
            </a>
            <span className="text-[4px] align-middle m-1">🔴</span>
          </li>
          <li>
            <a href="" className=" text-blue-500">
              Podcasts
            </a>
            <span className="text-[4px] align-middle m-1">🔴</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
