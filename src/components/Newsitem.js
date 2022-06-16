import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div className="items my-4">
        <div className="flex mx-3">
          <div className="rounded-lg shadow-lg max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                className="rounded-t-lg"
                src={
                  !imageUrl
                    ? "https://media.wired.com/photos/627af5ce0973df5979fdbdf3/191:100/w_1280,c_limit/Pixel-Portfolio-I_O-2022-SOURCE-Google-Gear.jpg"
                    : imageUrl
                }
                alt="This is the images here"
                width={400}
                style={{ height: "216px" }}
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {title}...
              </h5>
              <p className="bg-purple-100 w-24 mb-2 text-center text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                {source}
              </p>
              <p className="text-gray-700 text-base mb-4">{description}...</p>
              <p className="mb-2 text-gray-900/40">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toUTCString()}{" "}
              </p>
              <a
                type="button"
                className="bg-indigo-900 px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                style={{ background: "purple" }}
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsitem;
