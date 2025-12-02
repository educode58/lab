import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { JSX } from 'react/jsx-runtime';
import React from 'react';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Interfețe Om-Mașină',
    Svg: require('@site/static/img/cpu.svg').default,
    description: (
      <>
        Explorăm moduri simple prin care oamenii comunică cu calculatoarele și dispozitivele. Vei învăța cum aceste interfețe ne ajută să dăm comenzi și să primim informații.
      </>
    ),
    },
    {
    title: 'Alogritmică și Programare',
    Svg: require('@site/static/img/graf.svg').default,
    description: (
      <>
        Învață să gândești logic și să rezolvi probleme pas cu pas. Vei descoperi cum să creezi instrucțiuni clare pentru calculatoare folosind limbaje de programare simple.
      </>
    ),
  },
  {
    title: 'Suita Office și Design Grafic',
    Svg: require('@site/static/img/ui.svg').default,
    description: (
      <>
        Stăpânește instrumentele esențiale pentru muncă și creativitate. Vei învăța să folosești suita Office și suita Google, dar și bazele designului grafic pentru a crea conținut vizual atractiv.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
