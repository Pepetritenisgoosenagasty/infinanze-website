import Head from 'next/head';

interface TitleProps {
  title: string;
  keywords: string;
  description: string;
}

const PageTitle = ({ title, keywords, description }: TitleProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

PageTitle.defaultProps = {
  title: 'Infinanze',
  keywords: 'Infinanze, Software, Applications',
  description: '',
};

export default PageTitle;
