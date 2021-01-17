import React, { useState, useCallback } from "react";

function MainContent() {
  const [searchKey, setSearchKey] = useState("");
  const [articleList, setArticleList] = useState([]);

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
        console.log(result.articles);
        setArticleList(result.articles);
      });
  });

  return (
    <main className="bt-main bt-wrap">
      <h1 className="bt-head">BT React Code Test - by Jojo Jose- 17/01/21</h1>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Please type the keywords you want to search"
          onChange={(event) => setSearchKey(event.target.value)}
        />
        <button
          disabled={!searchKey}
          className="bt-button"
          onClick={fetchRequest}
        >
          Search
        </button>
      </div>
    </main>
  );
}

export default MainContent;
