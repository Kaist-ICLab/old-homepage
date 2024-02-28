import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import MDX from "@/components/mdx/MDX";
import { getMarkDownFileByPath } from "src/lib/file";

import SensorData from '@/data/graphics/main/sensordata.svg'
import Analyze from '@/data/graphics/main/analyze.svg'
import ServiceAct from '@/data/graphics/main/service_act.svg'
import HCI from '@/data/graphics/main/hci.svg'

import meta from "@/data/meta";
import styles from "@/styles/pages/Main.module.css";
import { genPageMetadata } from "@/components/SEO";

export const metadata = genPageMetadata({ title: "Main"});

const Page: React.FC = async () => {
  const mdxSource = getMarkDownFileByPath('data/main/main.md');
  return (
    <div className={styles.container}>
      <div className={styles.image_carousel_wrapper}>
        <ImageCarousel imgList={meta["carouselList"] as string[]} />
      </div>
      <div className={styles.mdx_wrapper}>
        <MDX mdxSource={mdxSource.content} />
      </div>
      <div className={styles.overview}>
        <div className={styles.hci}>
          <HCI className={styles.hci_icon} />
          <h3>Human Computer Interaction</h3>
        </div>
        <div className={styles.concepts}>
          <div className={styles.concept}>
            <SensorData className={styles.concept_icon} />
            <h3>Sensor Data</h3>
            <div className={styles.list_wrapper}>
              <ul className={styles.list}>
                <li>
                  <strong>Mobile/ Wearable/ IoT Big data</strong> Collection
                </li>
                <li>Sensor data as ESM, biological, behavioral, and environmental data</li>
              </ul>
            </div>
            <div className={styles.detail_image}>
              <Image
                alt="Description of Sensor Data"
                src="/assets/main/sensorData.png"
                style={{ objectFit: "contain" }}
                fill

              />
            </div>
          </div>
          <div className={styles.concept}>
            <Analyze className={styles.concept_icon} />
            <h3>Analyze</h3>
            <div className={styles.list_wrapper}>
              <ul className={styles.list}>
                <li>Data Preprocessing and Machine learning</li>
                <li>
                  <strong>Sensor data analysis for wellbeing research</strong> (e.g., stress,
                  depression){' '}
                </li>
              </ul>
            </div>
            <div className={styles.detail_image}>
              <Image
                alt="Description of Analyze"
                src="/assets/main/analyze.png"
                style={{ objectFit: "contain" }}
                fill

              />
            </div>
          </div>
          <div className={styles.concept}>
            <ServiceAct className={styles.concept_icon} />
            <h3>Act / Service</h3>
            <div className={styles.list_wrapper}>
              <ul className={styles.list}>
                <li>Digital health and wellbeing service development and experiments</li>
                <li>
                  Context-aware Intervention and Personalization for{' '}
                  <strong> behavior change</strong>{' '}
                </li>
              </ul>
            </div>
            <div className={styles.detail_image}>
              <Image
                alt="Details of Service Act"
                src="/assets/main/serviceAct.png"
                style={{ objectFit: "contain" }}
                fill

              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;