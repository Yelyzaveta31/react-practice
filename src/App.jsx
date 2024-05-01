import { Container, Section, StatisticsList, BlogCard } from "components";
import Heading from "components/Heading/Heading";
import article from "./components/data/article.json";
import stats from "./components/data/stats.json";


function App() {
  return (
    <>
    <Section>
     <Container>
      <BlogCard {...article} />
    <Heading title="Statistic List"/>
   <StatisticsList stats={stats} title="Statistics" />
     </Container>
     </Section>
    </>
  );
}

export default App;
