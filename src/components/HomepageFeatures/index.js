import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Instalación en Servidores Linux desde Cero',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Este manual detalla la instalación de software en servidores locales Linux. Incluye el proceso desde el acceso root hasta la configuración de herramientas esenciales como PHP 7.2 y Laravel, así como la instalación opcional de MySQL y PhpMyAdmin en sistemas Ubuntu.
      </>
    ),
  },
  {
    title: 'Configuración de Desarrollo en Windows',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Ofrece una guía concisa para la configuración de ambientes de desarrollo en sistemas operativos Windows. Se centra en la instalación y configuración de herramientas esenciales, proporcionando instrucciones paso a paso para optimizar la productividad.
      </>
    ),
  },
  {
    title: 'Implementación en Ambientes de Nube',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Explora la implementación de herramientas en entornos de nube con instrucciones detalladas. Cubre aspectos clave de escalabilidad y administración eficiente de recursos en plataformas en la nube populares, incluyendo la integración de aplicaciones con servicios en la nube.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
