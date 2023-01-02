import { CreateStitches, createStitches } from "@stitches/react";
import axios from "axios";
import { GetStaticProps } from "next";
import Description from "../Components/Description/Description";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MainFrame from "../Components/MainFrame/MainFrame";
import Review from "../Components/Review/Review";
import ModType from "../Utils/ModType";

export default function HomePage({mod}: {mod: ModType}) {
  return (
    <>
      <Header/>
      <MainFrame/>
      <Description mod={mod}/>
      <Review mod={mod}/>
      <Footer/>
    </>
    );
};

export const { styled, css } = createStitches({
  media: {
    bp1: `@media (min-width: 640px)`,
    bp2: `@media (min-width: 768px)`,
    bp3: `@media (min-width: 1024px)`,
    bp4: `@media (min-width: 1280px)`,
  },
});

export const getStaticProps: GetStaticProps = async () => {
  const params = new URLSearchParams();

  params.append("key","C91BCD1F954367E37C67D4F2D235403F");
  params.append("itemcount","1");
  params.append("publishedfileids[0]","2223739438");

  const res = await axios.post('https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/', params);
  const data = res.data.response.publishedfiledetails[0];
  const mod: ModType = {
    title: data.title,
    image: data.preview_url,
    description: data.description,
    favorites: data.favorited,
    subscription: data.subscriptions
  }
  return {
    props: {
      mod: mod
    },
    revalidate: 60 * 60
  };
}