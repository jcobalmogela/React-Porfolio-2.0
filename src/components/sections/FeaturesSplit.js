import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ProjectData from '../../Data/Myprojectlist'

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Check our works',
    subtitle:'Projects',
    paragraph: 'Let me showcase your website:'
  };

  const reverseProject = ProjectData.slice().reverse();
  return (
    <section 
      {...props}
      className={outerClasses}
    >
      <div className="container" id="Projects">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
              {reverseProject.map((project,id) => {
                return(
                  <div className="split-item py-4" key={id}>
                    <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                      <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                        {project.description}
                        </div>
                      <h3 className="mt-0 mb-12">
                        {project.title}
                        </h3>
                      <p className="m-0">
                        {project.info}
                        </p>
                      <div className='skill-used p-2'>
                          <img src={""}/>
                      </div>
                      <div className='px-1'>
                      <a href={project.link} target="_blank"><button className='button button-primary mt-2'>Visit Website</button></a>
                      </div>
                    </div>
                    <div className={
                      classNames(
                        'split-item-image center-content-mobile reveal-from-bottom',
                        imageFill && 'split-item-image-fill'
                      )}
                      data-reveal-container=".split-item">
                      <div className='imageOverly'>
                      <Image
                        src={project.Images}
                        alt="Features split 01"
                        width={528}
                        height={396} />
                      </div>
                    </div>
                </div>
                )
              })}
           


          </div>
          <a href="https://jacobportfolio-react-jcobalmogela.vercel.app/"><h5 className='text-center mt-5 text-color-primary'>Show More</h5></a>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;