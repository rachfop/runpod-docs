import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Pods",
    Svg: require("@site/static/img/home_1.svg").default,
    description: (
      <>
        <b>Pods</b>{" "}
        offer fast deployment of container-based GPU instances, with Secure Cloud for high reliability and security, and
        Community Cloud for a secure peer-to-peer network.
      </>
    ),
  },
  {
    title: "Serverless",
    Svg: require("@site/static/img/home_2.svg").default,
    description: (
      <>
        <b>Serverless</b>{" "}
        service provides pay-per-second serverless computing with autoscaling, quick start times, and robust security in
        its Secure Cloud.
      </>
    ),
  },
  {
    title: "AI APIs",
    Svg: require("@site/static/img/home_3.svg").default,
    description: (
      <>
        <b>AI APIs</b>{" "}
        are scalable and managed services tailored for various applications like Dreambooth and Stable Diffusion,
        ensuring efficient handling of diverse workloads.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => <Feature key={idx} {...props} />)}
        </div>
      </div>
    </section>
  );
}
