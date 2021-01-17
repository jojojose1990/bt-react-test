import React, { useState, useCallback } from "react";

function MainContent() {
  const [searchKey, setSearchKey] = useState("");
  const [articleList, setArticleList] = useState([]);
  const [isDataFetched, setDataFetched] = useState(false);

  const fetchRequest = useCallback(() => {
    var url =
      "http://newsapi.org/v2/everything?q=" +
      searchKey +
      "&sortBy=popularity&" +
      "pageSize=10&" +
      "apiKey=4b6a02b329aa4aefa435fa1a90594073";

    var req = new Request(url);

    fetch(req)
      .then((res) => res.json())
      .then((result) => {
        setDataFetched(true);
        setArticleList(result.articles);
      });
  }, [searchKey]);

  return (
    <main className="bt-main bt-wrap">
      <h1 className="bt-head">BT React Code Test - by Jojo Jose- 17/01/21</h1>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Please type the keywords you want to search"
          onChange={(event) => {
            event.preventDefault();
            setSearchKey(event.target.value);
          }}
        />
        <button
          type="button"
          disabled={!searchKey}
          className="bt-button"
          onClick={fetchRequest}
        >
          Search
        </button>
      </div>
      <div className="news-container">
        <ul className="bt-news-list">
          {articleList?.map((article) => (
            <li key={article.publishedAt}>
              <div className="bt-article">
                <div className="news-thumbnail">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="thumbnail-image"
                  />
                </div>
                <div className="news-details">
                  <strong>
                    <a href={article.url}>{article.title}</a>
                  </strong>
                  <h4>{article.author}</h4>
                  <p className="news-content">
                    {article.content && article.content.substring(0, 150)}
                  </p>
                </div>
              </div>
            </li>
          ))}
          {isDataFetched &&
            articleList.length === 0 &&
            "Sorry, No Results found for your search..."}
        </ul>
      </div>
    </main>
  );
}

export default MainContent;
