import { Container, Section, StatisticsList, BlogCard } from "components";
import Heading from "components/Heading/Heading";
import article from "data/article.json";
import stats from "data/stats.json";

function App() {
  return (
    <Section>
      <Container>
        <Heading title="Blog Card"/>
        <BlogCard {...article} />
        <Heading title="Statistic List"/>
        <StatisticsList stats={stats} title="Statistics" />
      </Container>
    </Section>
  );
}

export default App;