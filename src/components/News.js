import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let res = await data.json();
    props.setProgress(50);
    setArticles(res.articles);
    setTotalResults(res.totalResults);
    setLoading(false)
    props.setProgress(100);
  };
  
  useEffect(() => {
    updateNews();
    document.title = capitalizeFirstLetter(props.category) + ` News`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let res = await data.json();
    // console.log(res);
    setArticles(articles.concat(res.articles));
    setTotalResults(res.totalResults);
    setLoading(false)
  };

  return (
    <div className="min-h-[35vh] mt-24">
      <h1 className="text-indigo-800 mx-10 my-6 text-4xl font-serif text-center">
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length <= totalResults}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="flex mx-3 flex-wrap my-4 justify-center">
          {articles.map((element, id) => {
            return (
              <div key={id}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description
                      ? element.description.slice(0, 130)
                      : "With the Ukrainians running short of guns and ammunition, and pressures growing on Western governments, Moscow’s fortunes may be r"
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
