import { GetStaticProps } from "next";
import Description from "../Components/Description/Description";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MainFrame from "../Components/MainFrame/MainFrame";
import Review from "../Components/Review/Review";

export default function HomePage({ repositories, date }: any) {
  return (
    <>
      <Header/>
      <MainFrame/>
      <Description/>
      {/*
      <Review/>
      <Footer/>
      */}
    </>
    );
};
/*
export const getStaticProps: GetStaticProps = async () => {
  const repos = await fetch('https://api.github.com/users/valmojr/repos');
  const data = await repos.json();

  const repositoryNames = data.map((item: {name: string}) => item.name);

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString()
    },
    revalidate: 60 * 60
  };
}
*/