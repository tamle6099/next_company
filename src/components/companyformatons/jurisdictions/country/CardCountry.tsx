
/* eslint-disable @next/next/no-img-element */
const CardCountry = (datafile: any) => (
    <div className="w-full ">
      <div className="company">
        <img
          src={datafile.images}
          alt={datafile.title}
          className="rounded-t-2xl"
        />
        <div className="shadow-md rounded-b-2xl p-3">
          <div className="h-32">
            <h2 className="text-base bg-text-black font-semibold">
              {datafile.title}
            </h2>
            <ul className="list-disc pl-6 mt-1">
              <li className="text-sm bg-text-dark">{datafile.decs}</li>
              <li className="text-sm bg-text-dark">{datafile.decs2}</li>
            </ul>
          </div>
          <p className="pl-2">
            <span className="text-base bg-text-dark">Form </span>
            <span className="text-base font-semibold">US$ </span>
            <span className="text-base font-semibold bg-text-green">
              {datafile.price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
  export { CardCountry };