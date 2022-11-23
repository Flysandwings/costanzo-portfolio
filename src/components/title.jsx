import React, { Component } from "react";

class Title extends Component {
  state = {};
  render() {
    return (
      <div id="title">
        <svg viewBox="0 0 600 400">
          <defs>
            <linearGradient
              id="a"
              gradientUnits="objectBoundingBox"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0" stopColor="red">
                <animate
                  attributeName="stop-color"
                  values="red;purple;blue;green;yellow;orange;red;"
                  dur="20s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
              <stop offset=".5" stopColor="purple">
                <animate
                  attributeName="stop-color"
                  values="purple;blue;green;yellow;orange;red;purple;"
                  dur="20s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
              <stop offset="1" stopColor="blue">
                <animate
                  attributeName="stop-color"
                  values="blue;green;yellow;orange;red;purple;blue;"
                  dur="20s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                from="0 .5 .5"
                to="360 .5 .5"
                dur="20s"
                repeatCount="indefinite"
              />
            </linearGradient>
            <linearGradient
              id="b"
              gradientUnits="objectBoundingBox"
              x1="0"
              y1="1"
              x2="1"
              y2="1"
            >
              <stop offset="0" stopColor="red">
                <animate
                  attributeName="stop-color"
                  values="red;purple;blue;green;yellow;orange;red;"
                  dur="20s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
              <stop offset="1" stopColor="purple" stopOpacity="0">
                <animate
                  attributeName="stop-color"
                  values="purple;blue;green;yellow;orange;red;purple;"
                  dur="20s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                values="360 .5 .5;0 .5 .5"
                className="ignore"
                dur="10s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="600" height="600" fill="#DBE2E9" />
          <ellipse
            cx="300"
            cy="200"
            rx="40"
            ry="55"
            style={{ fill: "black" }}
            stroke="grey"
          >
            <animate
              begin="6s"
              dur="2s"
              repeatCount="0"
              attributeName="cx"
              to="306"
              fill="freeze"
            />
            <animate
              begin="8.5s"
              dur="2s"
              repeatCount="0"
              attributeName="cx"
              to="290"
              fill="freeze"
            />
            <animate
              begin="11s"
              dur="1s"
              repeatCount="0"
              attributeName="cx"
              to="300"
              fill="freeze"
            />
          </ellipse>
          <ellipse cx="300" cy="200" rx="20" ry="25" fill="white">
            <animate
              begin="6s"
              dur="2s"
              repeatCount="0"
              attributeName="cx"
              to="310"
              fill="freeze"
            />
            <animate
              begin="8.5s"
              dur="2s"
              repeatCount="0"
              attributeName="cx"
              to="285"
              fill="freeze"
            />
            <animate
              begin="11s"
              dur="1s"
              repeatCount="0"
              attributeName="cx"
              to="300"
              fill="freeze"
            />
            <animate
              begin="13s"
              dur="1.5s"
              repeatCount="0"
              attributeName="rx"
              to="30"
              fill="freeze"
            />
            <animate
              begin="13s"
              dur="1.5s"
              repeatCount="0"
              attributeName="ry"
              to="35"
              fill="freeze"
            />
          </ellipse>
          <polygon points="0,0 600,0 600,201 550,201 300,201 50,201 0,201">
            <animate
              begin="0"
              dur="2s"
              repeatCount="0"
              attributeName="points"
              to="0,0 600,0 600,201 550,201 300,160 50,201 0,201"
              fill="freeze"
            />
            <animate
              begin="3s"
              dur="1s"
              repeatCount="0"
              attributeName="points"
              to="0,0 600,0 600,201 550,201 300,200 50,201 0,201"
              fill="freeze"
            />
            <animate
              begin="4.5s"
              dur="1s"
              repeatCount="0"
              attributeName="points"
              to="0,0 600,0 600,201 550,201 300,160 50,201 0,201"
              fill="freeze"
            />
            <animate
              begin="14.5s"
              dur="1s"
              repeatCount="0"
              attributeName="points"
              to="0,0 600,0 600,201 550,201 300,200 50,201 0,201"
              fill="freeze"
            />
          </polygon>
          <polygon points="0,200 50,200 300,200 550,200 600,200 600,400 0,400">
            <animate
              begin="0"
              dur="2s"
              repeatCount="0"
              attributeName="points"
              to="0,200 50,200 300,250 550,200 600,200 600,400 0,400"
              fill="freeze"
            />
            <animate
              begin="3s"
              dur="1s"
              repeatCount="0"
              attributeName="points"
              to="0,200 50,200 300,200 550,200 600,200 600,400 0,400"
              fill="freeze"
            />
            <animate
              begin="4.5s"
              dur="1s"
              repeatCount="0"
              attributeName="points"
              to="0,200 50,200 300,250 550,200 600,200 600,400 0,400"
              fill="freeze"
            />
            <animate
              begin="14.5s"
              dur="1s"
              repeatCount="0"
              attributeName="points"
              to="0,200 50,200 300,200 550,200 600,200 600,400 0,400"
              fill="freeze"
            />
          </polygon>
          <ellipse
            cx="300"
            cy="200"
            rx="0"
            ry="0"
            visibility="hidden"
            fill="url(#a)"
          >
            <animate
              begin="15.5s"
              dur="4s"
              repeatCount="0"
              attributeName="visibility"
              to="visible"
              fill="freeze"
            />
            <animate
              begin="15.5s"
              dur="4s"
              repeatCount="0"
              attributeName="rx"
              to="100"
              fill="freeze"
            />
            <animate
              begin="15.5s"
              dur="4s"
              repeatCount="0"
              attributeName="ry"
              to="100"
              fill="freeze"
            />
          </ellipse>
          <ellipse
            cx="300"
            cy="200"
            rx="0"
            ry="0"
            visibility="hidden"
            fill="url(#b)"
          >
            <animate
              begin="15.5s"
              dur="4s"
              repeatCount="0"
              attributeName="visibility"
              to="visible"
              fill="freeze"
            />
            <animate
              begin="15.5s"
              dur="4s"
              repeatCount="0"
              attributeName="rx"
              to="400"
              fill="freeze"
            />
            <animate
              begin="15.5s"
              dur="4s"
              repeatCount="0"
              attributeName="ry"
              to="400"
              fill="freeze"
            />
          </ellipse>
          <rect
            x="150"
            y="160"
            width="0"
            height="5"
            visibility="hidden"
            fill="white"
            rx="0"
          >
            <animate
              begin="19s"
              repeatCount="0"
              attributeName="visibility"
              to="visible"
              fill="freeze"
            />
            <animate
              begin="19s"
              dur="1s"
              repeatCount="0"
              attributeName="width"
              to="300"
              fill="freeze"
            />
            <animate
              begin="20s"
              dur="1s"
              repeatCount="0"
              attributeName="height"
              to="75"
              fill="freeze"
            />
            <animate
              begin="21s"
              dur="1s"
              repeatCount="0"
              attributeName="rx"
              to="15"
              fill="freeze"
            />
          </rect>
          <text
            x="170"
            y="205"
            visibility="hidden"
            fill="white"
            style={{ fontWeight: "bold", fontSize: "1.3rem" }}
          >
            <animate
              begin="21.5s"
              dur="1s"
              repeatCount="0"
              attributeName="visibility"
              to="visible"
              fill="freeze"
            />
            <animate
              begin="21.5s"
              dur="1s"
              repeatCount="0"
              attributeName="fill"
              to="black"
              fill="freeze"
            />
            Andrew Costanzo Portfolio
          </text>
        </svg>
      </div>
    );
  }

  //   performFunction() {
  //         <button onClick={() => this.performFunction()}>Animate</button>
  //     let top = document.getElementById("top-box");
  //     let point = top.points[3].y;
  //     top.points[3].y = 100;

  //     let bot = document.getElementById("bot-box");
  //     bot.points[1].y = 300;
  //   }
}

export default Title;
