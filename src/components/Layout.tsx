import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = (props: any) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "BAMBUY DIGITAL",
    description: `En BAMBUY se busca combinar habilidades administrativas con innovaciones tecnologías para potenciar tu negocio.`,
/*     image: "/images/seo/halley-banner.png", */
    type: "website",
    ...customMeta,
  };
  return (
    <div className="min-w-[350px] overflow-x-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
       <link href="/favicon.ico" rel="shortcut icon" /> 
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
        /*   content={`https://halley.vercel.app${router.asPath}`} */
        />
          <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
 {/*        <meta property="og:image" content={meta.image} /> */}
      </Head>

      <main id="skip" className="bg-white dark:bg-neutral-900">
        <Navbar />
        {children}
       
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
