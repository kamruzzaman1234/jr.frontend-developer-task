import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner/Banner";
import Our_Story from "@/components/Our_Story/Our_Story";
import Test_Traditional from "@/components/Test_Traditional/Test_Traditional";
import Drive_Intro from "@/components/Drive_Intro/Drive_Intro";
import Our_Testimonial from "@/components/Our_Testimonial/Our_Testimonial";
import Book_Form from "@/components/Book_Form/Book_Form";
import Contact_form from "@/components/Contact_Form/Contact_Form";

export default function Home() {
  return (
    <div className="">
      <main>
          <Banner></Banner>
          <Our_Story></Our_Story>
          <Test_Traditional></Test_Traditional>
          <Drive_Intro></Drive_Intro>
          <Our_Testimonial></Our_Testimonial>
          <Book_Form></Book_Form>
          <Contact_form></Contact_form>
      </main>
      
    </div>
  );
}
