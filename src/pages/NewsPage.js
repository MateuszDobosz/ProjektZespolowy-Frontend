import React from "react";
import News from "../components/News";
import Wrapper from "../components/Wrapper";

const NewsList = [
  {
    title: "Zbiórka dla schroniska",
    description:
      "Zbiórka odbędzie się 10.12.2020,Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020Zbiórka odbędzie się 10.12.2020 ",
    publication: "24.11.2020",
  },
];

const NewsPage = () => (
  <Wrapper>
    <News
      title={NewsList[0].title}
      description={NewsList[0].description}
      createdAt={NewsList[0].publication}
    />
    <News
      title={NewsList[0].title}
      description={NewsList[0].description}
      createdAt={NewsList[0].publication}
    />
    <News
      title={NewsList[0].title}
      description={NewsList[0].description}
      createdAt={NewsList[0].publication}
    />
    <News
      title={NewsList[0].title}
      description={NewsList[0].description}
      createdAt={NewsList[0].publication}
    />
  </Wrapper>
);

export default NewsPage;
