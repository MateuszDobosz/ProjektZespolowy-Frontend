import React, { useEffect, useState } from "react";
import News from "../components/News";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import Loader from "react-loader-spinner";

const NewsPage = () => {
  const [news, setNews] = useState("");

  useEffect(() => {
    axios.get("panel/news/overview").then((response) => {
      console.log(response.data.news);
      setNews(response.data.news);
    });
  }, []);

  const extractDate = (d) => {
    const newDate = new Date(d);
    return (
      newDate.getFullYear() + "-" + parseInt(newDate.getMonth()+1) + "-" + newDate.getDate()
    );
  };
  return (
    <Wrapper>
      {news ? (
        news.map((newss) => {
          return (
            <News
              key={newss._id}
              createdAt={extractDate(newss.date)}
              description={newss.description}
              title={newss.title}
            />
          );
        })
      ) : (
          <Loader type="Puff" color="#0d9e47" height={100} width={100} />
        )}
    </Wrapper>
  );
};

export default NewsPage;
