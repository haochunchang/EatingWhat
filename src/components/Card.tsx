import React from "react";

interface CardStatelessProps {
  url: string;
  name: string;
}

const Card: React.FunctionComponent<CardStatelessProps> = ({ url, name }) => {
  return (
    <div className="tc dib br5 pa3 ma3 grow bw2 shadow">
      <a
        href={`https://www.google.com.tw/maps/search/${name}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt={name} src={url} />
      </a>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Card;
