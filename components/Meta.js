import Head from 'next/head';

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='keywords'
        content='JS blogs, blog, micro frontend, mono repo, react blogs, lerna'
      />
    </Head>
  );
};

export default Meta;

// let's set a default title
Meta.defaultProps = {
  title: 'JS Blogs - Frontend enginnering blogs. Rakesh',
};
