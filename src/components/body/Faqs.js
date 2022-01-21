import React, { Component } from "react";

import "./faqs.scss";
import cx from "classnames";

class Faqs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faq: [
        {
          title: "Who is eligible to apply for this program ?",
          content: "Answer",
        },
        {
          title:
            "What if I am younger than 13 in 2022 or older than 23 in 2022 ?",
          content:
            "You will not be eligible for this general Talent Identification Program. However, you may be eligible for some sport specific programs which will become available in late 2022 and into 2023. Skateboarding and diving would be examples of sports where younger age groups that can be accommodated in specific campaigns for those with 2032 Olympic and Paralympic Games aspirations.",
        },
        {
          title:
            "Can I still aim to go to the Olympics in 2032, even if I don’t try out in the QAS TID Program.",
          content: "Answer",
        },
        {
          title:
            "If I get offered a chance to try a new sport through this TID program, does this mean that I have to give up the sports that I am doing already ?",
          content: "Answer",
        },
        {
          title:
            "I noticed that my region isn’t on the testing list. Can I still participate ?",
          content: "Answer",
        },
        {
          title:
            "Do I have to relocate from my home and region to join this Talent Development program ?",
          content: "Answer",
        },
        {
          title:
            "Can athletes with a disability also participate in this program ?",
          content: "Answer",
        },
      ],
      active: null,
    };
  }

  _changeActive = (val) => {
    this.setState({ active: this.state.active === val ? null : val });
  };

  render() {
    const { faq, active } = this.state;

    return (
      <div className="faqs-container">
        FAQs
        <div className="faqs-content">
          {faq.map((o, index) => (
            <div
              className="faqs-expandable"
              onClick={() => this._changeActive(index)}
              key={index}
            >
              <div
                className={cx("faqs-expandable__title", {
                  active: active === index,
                })}
              >
                <p>Q.</p>

                {o.title}
              </div>

              <div className={active === index ? "show" : "hidden"}>
                <div className="faqs-expandable__content">
                  <p>A.</p>

                  {o.content}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faqs-content">
          <p>
            <strong>Questions?</strong>
          </p>

          <p>
            Contact the Queensland Academy of Sport via email
            Youfor2032@dtis.qld.gov.au
          </p>
        </div>
      </div>
    );
  }
}

export default Faqs;
