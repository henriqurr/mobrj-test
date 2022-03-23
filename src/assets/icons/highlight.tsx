import React, { SVGProps } from 'react'

export default function HighlightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 16L11.923 14.692L19.769 6.84596L17.153 4.23096L9.307 12.077L8 16Z"
        fill="url(#paint0_linear_586_44)"
      />
      <path
        d="M21.7315 3.57727L20.4238 2.26972C20.25 2.09696 20.0149 2 19.7699 2C19.5249 2 19.2898 2.09696 19.116 2.26972L18.6802 2.70557L17.8086 3.57733L20.4238 6.19257L21.0772 5.53906L21.0776 5.53876L21.7315 4.88495C21.9042 4.71119 22.0012 4.47612 22.0012 4.23111C22.0012 3.98609 21.9042 3.75103 21.7315 3.57727V3.57727Z"
        fill="url(#paint1_linear_586_44)"
      />
      <path
        d="M18.3999 19C18.3985 19.1056 18.356 19.2066 18.2813 19.2813C18.2066 19.356 18.1056 19.3986 18 19.4H5C4.89435 19.3986 4.79343 19.356 4.71873 19.2813C4.64403 19.2066 4.60146 19.1056 4.60009 19V6C4.60145 5.89435 4.64402 5.79342 4.71872 5.7187C4.79342 5.64398 4.89435 5.60139 4.99999 5.6H12.9436L14.5435 4H5C4.47004 4.00154 3.96223 4.21275 3.58749 4.58749C3.21275 4.96223 3.00154 5.47004 3 6V19C3.00153 19.53 3.21273 20.0378 3.58747 20.4125C3.96222 20.7873 4.47004 20.9985 5 21H18C18.53 20.9985 19.0378 20.7873 19.4125 20.4125C19.7873 20.0378 19.9985 19.53 20 19V9.41632L18.3999 11.0163V19Z"
        fill="url(#paint2_linear_586_44)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_586_44"
          x1="19.6625"
          y1="15.9162"
          x2="7.4687"
          y2="15.0366"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#197ACF" />
          <stop offset="1" stopColor="#1A8DE9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_586_44"
          x1="21.9632"
          y1="6.16274"
          x2="17.6193"
          y2="5.8494"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#197ACF" />
          <stop offset="1" stopColor="#1A8DE9" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_586_44"
          x1="19.8462"
          y1="20.8791"
          x2="2.23255"
          y2="19.6085"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#197ACF" />
          <stop offset="1" stopColor="#1A8DE9" />
        </linearGradient>
      </defs>
    </svg>
  )
}
