import React from "react";

import "./title.scss";

import Icon from "../../assets/icon-exclamation-mark.png";

const Title = () => {
  return (
    <div className="title-container">
      This could be your starting line for the 2032 Olympic and Paralympic Games
      in Brisbane
      <div className="title-content is-flex-column">
        <div className="flex-one">
          <p>
            We're looking for talented young Queensland athletes with
            Olympic-sized dreams to register their interest in being part of the
            Queensland Academy of Sport’s Talent Identification Program—You for
            2032! This program is strictly for talent born between 1999 and 2009
            inclusive, with Para-Sports accepting those who are a little older
            (i.e. 1992 to 2009 inclusive).
          </p>
        </div>

        <div className="flex-one">
          <div className="is-flex">
            <img src={Icon} alt="" />

            <p className="title-content__special-case">
              <strong>Caution</strong>: our standards are high (because we want
              the best!) but if you think you have what it takes to win on the
              world stage pre-register now.
            </p>
          </div>

          <p>
            Further information will become available in January 2022 when we
            launch our application portal. By pre-registering you will
            automatically be prompted when applications are open.
          </p>
        </div>
      </div>
      <div className="title-footer is-flex-column">
        <p>
          This could be the first step in your Olympic or Paralympic journey
        </p>
        <p>Good Luck!</p>
      </div>
    </div>
  );
};

export default Title;
