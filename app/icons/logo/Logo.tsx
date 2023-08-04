import { FC } from "react";

interface LogoProps {
    theme?: string;
}

const Logo: FC<LogoProps> = ({ theme }) => {

    let cloudFillColor = "#262b41";
    let worldFillColor = '#334b4a';
    let strokeColor = "#f7f9ff";

    if (theme === "dark") {
        cloudFillColor = "#f7f9ff";
        worldFillColor = '#f7f9ff';
        strokeColor = "#434656";
    }

    return (
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
    );
};

export default Logo;