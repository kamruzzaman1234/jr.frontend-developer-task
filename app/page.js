import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner/Banner";
import Our_Story from "@/components/Our_Story/Our_Story";

export default function Home() {
  return (
    <div className="">
      <main>
          <Banner></Banner>
          <Our_Story></Our_Story>
      </main>
      
    </div>
  );
}
