import React, { SVGProps } from 'react'

export default function EditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.31192 15.151L3.54492 20.454L8.85492 18.679L18.0409 9.49398L14.5049 5.95898L5.31192 15.151Z"
        fill="url(#paint0_linear_1136_443)"
      />
      <path
        d="M20.1616 5.95888L18.0403 3.8376C17.8524 3.65077 17.5981 3.5459 17.3331 3.5459C17.0681 3.5459 16.8139 3.65077 16.626 3.8376L16.1545 4.30898L15.2119 5.25179L18.7473 8.78731L19.4541 8.08052L19.4546 8.08022L20.1616 7.37312C20.3484 7.1852 20.4533 6.93099 20.4533 6.66601C20.4533 6.40102 20.3484 6.14681 20.1616 5.95888V5.95888Z"
        fill="url(#paint1_linear_1136_443)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1136_443"
          x1="17.9098"
          y1="20.3509"
          x2="2.89052"
          y2="19.2674"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#197ACF" />
          <stop offset="1" stopColor="#1A8DE9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1136_443"
          x1="20.4059"
          y1="8.75002"
          x2="14.9753"
          y2="8.3583"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#197ACF" />
          <stop offset="1" stopColor="#1A8DE9" />
        </linearGradient>
      </defs>
    </svg>
  )
}
