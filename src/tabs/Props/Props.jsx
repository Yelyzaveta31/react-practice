
import { BlogCard, StatisticsList} from "components/index"
import article from 'data/article.json';
import stats from 'data/stats.json';

const Props = () => {
  return (<>

    <BlogCard {...article} />
   <StatisticsList stats={stats} title="Statistics" />
   </>
  )
  
}

export default Props
