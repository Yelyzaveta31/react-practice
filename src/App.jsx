import { Container, Section } from "components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Points from "tabs/Points/Points";
import Props from "tabs/Props/Props";


function App() {
  return (
    <>
    <Section>
     <Container>
     <Tabs>
    <TabList>
      <Tab>Points</Tab>
      <Tab>Props</Tab>
    </TabList>
    <TabPanel>
      <Points/>
    </TabPanel>
    <TabPanel>
     <Props/>
    </TabPanel>
  </Tabs>
     </Container>
     </Section>
    </>
  );
}

export default App;
