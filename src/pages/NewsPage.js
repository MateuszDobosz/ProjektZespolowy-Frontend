import React from 'react';
import News from '../components/News';
import Wrapper from '../components/Wrapper';

const NewsList = [{
    title: "Zbiórka dla schroniska",
    description: "Zbiórka odbędzie się 10.12.2020, zapraszamy"
}]

const NewsPage = () => <Wrapper><News title={NewsList[0].title} description={NewsList[0].description} /></Wrapper>

export default NewsPage;