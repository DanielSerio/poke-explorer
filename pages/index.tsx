import type {NextPage} from 'next';
import PageBlock from '../components/Page/Block';
import Page from '../components/Page/Page';

const Home: NextPage = () => {
  return (
    <Page title="PokeExplorer | Home" description='Explore Pokemon data'>
      <PageBlock>
        <>Home</>
      </PageBlock>
    </Page>
  );
};

export default Home;
