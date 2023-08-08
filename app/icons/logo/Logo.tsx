import { FC } from "react";

interface LogoProps {
    theme?: string;
}

const Logo: FC<LogoProps> = ({ theme }) => {

    let cloudFillColor = "#cccccc";
    let worldFillColor = "#e8efff";
    let strokeColor = "#262b41";
    let strokeWidth = "10";

    if (theme === "dark") {
        cloudFillColor = "#f7f9ff";
        worldFillColor = '#f7f9ff';
        strokeColor = "#434656";
    }

    return (
        <svg className="logo logo-dark" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M161.948 33.1104C141.651 49.3566 127.468 72.0512 121.766 97.416C111.762 91.5336 100.535 88.0369 88.9597 87.1977C77.3841 86.3584 65.7708 88.1991 55.0221 92.5768C44.2734 96.9544 34.6786 103.751 26.9831 112.439C19.2877 121.127 13.6987 131.472 10.6505 142.671C7.60232 153.869 7.1769 165.62 9.40731 177.009C11.6377 188.399 16.4639 199.121 23.511 208.343C30.558 217.564 39.6362 225.037 50.0402 230.181C60.4442 235.324 71.894 238 83.5 238H383.5C395.105 238 406.554 235.325 416.957 230.182C427.36 225.04 436.438 217.568 443.485 208.348C450.532 199.128 455.359 188.407 457.591 177.019C459.823 165.631 459.399 153.881 456.353 142.683C453.307 131.485 447.72 121.14 440.028 112.451C432.335 103.762 422.742 96.964 411.996 92.584C401.249 88.204 389.637 86.3603 378.063 87.196C366.488 88.0318 355.262 91.5246 345.256 97.403C339.538 72.042 325.3 49.2959 304.993 33.0631C284.686 16.8303 259.46 7.99141 233.462 8.00001C207.465 8.0086 182.244 16.8642 161.948 33.1104Z"
                fill={cloudFillColor}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
            <path
                d="M493 310.333C493 411.585 403.457 493.666 293 493.666C182.543 493.666 93 411.585 93 310.333C93 209.081 182.543 127 293 127C403.457 127 493 209.081 493 310.333Z"
                fill={worldFillColor} />
            <path
                d="M293 493.666C403.457 493.666 493 411.585 493 310.333C493 209.081 403.457 127 293 127M293 493.666C182.543 493.666 93 411.585 93 310.333C93 209.081 182.543 127 293 127M293 493.666C319.185 493.666 345.111 488.271 369.3 479.087C393.489 469.903 415.463 456.442 433.971 439.477C452.478 422.512 467.156 402.375 477.168 380.217C487.181 358.059 492.333 334.312 492.333 310.333C492.333 286.353 487.181 262.607 477.168 240.449C467.156 218.291 452.478 198.153 433.971 181.188C415.463 164.223 393.489 150.763 369.3 141.579C345.111 132.394 319.185 127 293 127M293 493.666C266.816 493.666 240.889 488.271 216.7 479.087C192.511 469.903 170.537 456.442 152.029 439.477C133.522 422.512 118.844 402.375 108.832 380.217C98.8191 358.059 93.6667 334.312 93.6667 310.333C93.6667 286.353 98.8191 262.607 108.832 240.449C118.844 218.291 133.522 198.153 152.029 181.188C170.537 164.223 192.511 150.763 216.7 141.579C240.889 132.394 266.816 127 293 127M293 493.666C309.062 493.666 325.647 488.297 340.515 479.143C355.385 469.987 368.915 456.555 380.323 439.597C391.731 422.639 400.788 402.495 406.97 380.312C413.151 358.13 416.333 334.351 416.333 310.333C416.333 286.315 413.151 262.536 406.97 240.353C400.788 218.171 391.731 198.027 380.323 181.069C368.915 164.111 355.385 150.679 340.515 141.523C325.647 132.369 309.062 127 293 127M293 493.666C276.938 493.666 261.686 488.297 246.819 479.143C231.949 469.987 218.418 456.555 207.01 439.597C195.602 422.639 186.545 402.495 180.364 380.312C174.183 358.13 171 334.351 171 310.333C171 286.315 174.183 262.536 180.364 240.353C186.545 218.171 195.602 198.027 207.01 181.069C218.418 164.111 231.949 150.679 246.819 141.523C261.686 132.369 276.938 127 293 127M293 127L293.002 493.666M115.667 227H470.333M93 310.999H493M115.667 393.666H470.333"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};

export default Logo;


{/*
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="logo logo-light-background"
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
        >
            <rect
                x="2.5"
                y="-2.5"
                width="495"
                height="495"
                rx="47.5"
                transform="matrix(1 0 0 -1 1 495)"
                fill="none"
                stroke="none"
                strokeWidth="10"
            />
            <circle cx="106" cy="210" r="75" fill={cloudFillColor} />
            <ellipse cx="396" cy="205.503" rx="75" ry="79.5033" fill={cloudFillColor} />
            <circle cx="251" cy="170" r="115" fill={cloudFillColor} />
            <rect x="106" y="188" width="290" height="97" fill={cloudFillColor} />
            <ellipse cx="326.375" cy="307.5" rx="144.375" ry="137.5" fill={cloudFillColor} />
            <path
                d="M182 307.195C182 325.212 185.745 343.052 193.02 359.698C200.296 376.343 210.959 391.467 224.403 404.207C237.846 416.947 253.806 427.052 271.37 433.947C288.935 440.842 307.76 444.39 326.772 444.39C345.784 444.39 364.61 440.842 382.174 433.947C399.739 427.052 415.698 416.947 429.142 404.207C442.585 391.467 453.249 376.343 460.524 359.698C467.8 343.052 471.544 325.212 471.544 307.195C471.544 270.809 456.292 235.913 429.142 210.184C401.991 184.454 365.168 170 326.772 170C288.376 170 251.553 184.454 224.403 210.184C197.253 235.913 182 270.809 182 307.195Z"
                stroke={strokeColor} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill={worldFillColor} />
            <path d="M191.625 261.463H461.125" stroke={strokeColor} strokeWidth="10" strokeLinecap="round"
                strokeLinejoin="round" />
            <path d="M191.625 352.927H461.125" stroke={strokeColor} strokeWidth="10" strokeLinecap="round"
                strokeLinejoin="round" />
            <path d="M327 170C294.324 211.094 277 258.561 277 307C277 355.439 294.324 402.906 327 444"
                stroke={strokeColor} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M327 170C261.647 211.094 227 258.561 227 307C227 355.439 261.647 402.906 327 444"
                stroke={strokeColor} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M327 444C392.353 402.906 427 355.439 427 307C427 258.561 392.353 211.094 327 170"
                stroke={strokeColor} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M327 170C359.676 211.094 377 258.561 377 307C377 355.439 359.676 402.906 327 444"
                stroke={strokeColor} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        */}