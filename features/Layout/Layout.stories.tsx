/* eslint-disable */
import Layout from './Layout';

export default {
  title: 'Layout',
};

const Template = () => <h1> Hello World </h1>;

export const Default = () => (
  <Layout>
    <Template />
  </Layout>
);

Default.story = {
  name: 'default',
};
