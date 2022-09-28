import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Collaborators from '../../Data/Collaborators';
import { FaFacebook,FaSkype,FaWhatsapp } from 'react-icons/fa'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Collaborators',
    subtitle:'Meet the Team',
    paragraph: "We have 6 developers on our team, each with a unique set of talents and tools, so feel free to choose any of us to work on your project and start building your website right now.",
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {
              Collaborators.map((colab) => {
                return<>
                    <div className={`tiles-item collab-card ${colab.id  < 4 ? "reveal-from-top" : "reveal-from-bottom"} `}  data-reveal-delay={`${colab.id > 6 ? '400' : ""}`}>
                      <div className="tiles-item-inner">
                        <div className="collab-con testimonial-item-content">
                          <img className='collab-image' src={colab.ProfilePicture}></img>
                          <p className="text-sm mb-0">{colab.FullName}</p>
                          <div className='social-con p-2 d-md-flex'>
                              <FaFacebook className='m-1'></FaFacebook>
                              <FaWhatsapp className='m-1'></FaWhatsapp>
                              <FaSkype className='m-1'></FaSkype>
                          </div>
                          <button className='button button-primary mt-2'>Message Now</button>
                        </div>
                        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                          <span className="testimonial-item-name text-color-high">{colab.YearofExp}</span>
                          <span className="text-color-low"> / </span>
                          <span className="testimonial-item-link">
                            <a href="#0">{colab.Role}</a>
                          </span>
                        </div>
                      </div>
                    </div>
                </>
              })
            }


    

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;