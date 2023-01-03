import axios from "axios";
import { GetStaticProps } from "next";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MainFrame from "../Components/MainFrame/MainFrame";
import TextContainer from '../Components/TextContainer/TextContainer'
import ModType from "../Utils/ModType";
import MainContainer from "../Components/MainContainer";

export default function HomePage({mod}: {mod: ModType}) {
  return (
    <MainContainer>
      <Header/>
      <MainFrame/>
      <TextContainer mod={mod}/>
      <Footer/>
    </MainContainer>
    );
};

export const getStaticProps: GetStaticProps = async () => {
  let mod: ModType = {
    title: 'BRAF - Brazilian Armed Forces',
    image: '',
    description: '',
    favorites: 800,
    subscription: 8000
  } 
  try {
    const params = new URLSearchParams();

    params.append("key","C91BCD1F954367E37C67D4F2D235403F");
    params.append("itemcount","1");
    params.append("publishedfileids[0]","2223739438");
  
    const res = await axios.post('https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/', params);
    const data = res.data.response.publishedfiledetails[0];
    
    mod = {
      title: data.title,
      image: data.preview_url,
      description: data.description,
      favorites: data.favorited,
      subscription: data.subscriptions
    } 
  } catch (error) {
    console.log('Steam API is down');
  }
  return {
    props: {
      mod: mod
    },
    revalidate: 60 * 60
  };
}