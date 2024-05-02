import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Points, Props } from "./tabs";
import { Container, Form } from "./components";

function App() {
  return (
    <section>
      <Container>
        <Tabs>
          <TabList>
            <Tab>Points</Tab>
            <Tab>Props</Tab>
          </TabList>

          <TabPanel>
            <Points />
          </TabPanel>
          <TabPanel>
            <Props />
          </TabPanel>
          <Form />
        </Tabs>
      </Container>
    </section>
  );
}

export default App;
