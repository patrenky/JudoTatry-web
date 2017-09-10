import React from "react";
import { map } from "lodash";

import { dictionary } from "../../enums/dictionary";

const Dictionary = () => (
  <div className="about-dictionary">
    <div className="dict-row">
      <div className="dict-col">
        {map(dictionary[0].words, (word, i) => (
          <p key={`1-${i}`}>
            {word.jpn} &ndash; {word.svk}
          </p>
        ))}
      </div>
      <div className="dict-col">
        <b>{dictionary[1].section}</b>
        {map(dictionary[1].words, (word, i) => (
          <p key={`2-${i}`}>
            {word.jpn} &ndash; {word.svk}
          </p>
        ))}
      </div>
    </div>

    <div className="dict-row">
      <div className="dict-col">
        <b>{dictionary[2].section}</b>
        {map(dictionary[2].words, (word, i) => {
          if (i < dictionary[2].words.length / 2) {
            return (
              <p key={`3-${i}`}>
                {word.jpn} &ndash; {word.svk}
              </p>
            );
          }
        })}
      </div>
      <div className="dict-col">
        {map(dictionary[2].words, (word, i) => {
          if (i >= dictionary[2].words.length / 2) {
            return (
              <p key={`4-${i}`}>
                {word.jpn} &ndash; {word.svk}
              </p>
            );
          }
        })}
      </div>
    </div>
  </div>
);

export default Dictionary;
