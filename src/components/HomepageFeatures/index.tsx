import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '探索源代码',
    Svg: require('@site/static/img/undraw_source_code_re_wd9m.svg').default,
    description: <>从源代码中探索，以更优雅的方式解决问题，减少 HACK 代码</>,
  },
  {
    title: '思考架构设计',
    Svg: require('@site/static/img/undraw_code_thinking_re_gka2.svg').default,
    description: (
      <>
        学习思考如何用优秀的软件架构设计模式解决领域问题，理解行业术语与设计标准
      </>
    ),
  },
  {
    title: '覆盖更多数据可视化场景',
    Svg: require('@site/static/img/undraw_data_re_80ws.svg').default,
    description: <>扩展 APIs 能力，以覆盖更多数据可视化场景，提供解决方案</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
