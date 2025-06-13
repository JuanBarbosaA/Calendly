import styles from "./Footer.module.css";
export default function Footer() {
  const descargas = [
    {
      name: "App Store",
      svgElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            fill="#000"
            d="M17.369 14.288a10 10 0 0 1-.986 1.772q-.777 1.108-1.27 1.534-.76.698-1.631.719-.627 0-1.508-.36t-1.623-.359q-.777 0-1.668.359-.893.36-1.442.379-.837.036-1.669-.738-.531-.463-1.328-1.589-.855-1.2-1.404-2.79-.59-1.714-.59-3.324 0-1.843.797-3.176a4.7 4.7 0 0 1 1.67-1.69 4.5 4.5 0 0 1 2.257-.636q.664.001 1.746.406 1.081.407 1.385.408.229 0 1.536-.48 1.234-.444 2.087-.37 2.316.185 3.472 1.827-2.07 1.255-2.048 3.509.02 1.756 1.27 2.916.567.537 1.27.833-.152.442-.323.85M13.83.367q0 1.376-1.002 2.565c-.806.942-1.78 1.487-2.837 1.4a3 3 0 0 1-.022-.347c0-.88.383-1.822 1.064-2.592q.51-.585 1.296-.973.784-.383 1.482-.42.02.184.02.367"
          ></path>
        </svg>
      ),
    },
    {
      name: "Google Play",
      svgElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <g filter="url(#google-play_svg__a)">
            <path
              fill="url(#google-play_svg__b)"
              d="M1.819.309c-.226.24-.36.61-.36 1.092v17.197c0 .482.134.853.36 1.093l.058.056 9.634-9.634v-.227L1.877.252z"
            ></path>
            <path
              fill="url(#google-play_svg__c)"
              d="m14.72 13.326-3.21-3.213v-.227l3.211-3.211.073.041 3.805 2.162c1.086.617 1.086 1.627 0 2.245l-3.805 2.162z"
            ></path>
            <g filter="url(#google-play_svg__d)">
              <path
                fill="url(#google-play_svg__e)"
                d="M14.794 13.284 11.509 10l-9.69 9.69c.357.38.949.427 1.615.049z"
              ></path>
            </g>
            <path
              fill="url(#google-play_svg__f)"
              d="M14.794 6.715 3.434.261c-.666-.378-1.258-.33-1.616.049L11.51 10z"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="google-play_svg__b"
              x1="10.656"
              x2="-2.393"
              y1="1.219"
              y2="14.269"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00A0FF"></stop>
              <stop offset="0.007" stop-color="#00A1FF"></stop>
              <stop offset="0.26" stop-color="#00BEFF"></stop>
              <stop offset="0.512" stop-color="#00D2FF"></stop>
              <stop offset="0.76" stop-color="#00DFFF"></stop>
              <stop offset="1" stop-color="#00E3FF"></stop>
            </linearGradient>
            <linearGradient
              id="google-play_svg__c"
              x1="20.013"
              x2="1.197"
              y1="10"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFE000"></stop>
              <stop offset="0.409" stop-color="#FFBD00"></stop>
              <stop offset="0.775" stop-color="#FFA500"></stop>
              <stop offset="1" stop-color="#FF9C00"></stop>
            </linearGradient>
            <linearGradient
              id="google-play_svg__e"
              x1="13.01"
              x2="-4.687"
              y1="11.784"
              y2="29.481"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF3A44"></stop>
              <stop offset="1" stop-color="#C31162"></stop>
            </linearGradient>
            <linearGradient
              id="google-play_svg__f"
              x1="-0.622"
              x2="7.28"
              y1="-5.415"
              y2="2.487"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#32A071"></stop>
              <stop offset="0.069" stop-color="#2DA771"></stop>
              <stop offset="0.476" stop-color="#15CF74"></stop>
              <stop offset="0.801" stop-color="#06E775"></stop>
              <stop offset="1" stop-color="#00F076"></stop>
            </linearGradient>
            <filter
              id="google-play_svg__a"
              width="17.954"
              height="20"
              x="1.459"
              y="0"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dy="-0.117"></feOffset>
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              ></feColorMatrix>
              <feBlend
                in2="shape"
                mode="normal"
                result="effect1_innerShadow_11250_1167"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dy="0.117"></feOffset>
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              ></feColorMatrix>
              <feBlend
                in2="effect1_innerShadow_11250_1167"
                mode="normal"
                result="effect2_innerShadow_11250_1167"
              ></feBlend>
            </filter>
            <filter
              id="google-play_svg__d"
              width="12.976"
              height="10"
              x="1.818"
              y="10"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dy="-0.117"></feOffset>
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
              ></feColorMatrix>
              <feBlend
                in2="shape"
                mode="normal"
                result="effect1_innerShadow_11250_1167"
              ></feBlend>
            </filter>
          </defs>
        </svg>
      ),
    },
    {
      name: "Chrome extension",
      svgElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="29"
          fill="none"
          viewBox="0 0 28 29"
        >
          <path
            fill="#EF3F36"
            d="M14 .004s8.253-.37 12.628 7.896h-13.33s-2.515-.08-4.664 2.96c-.617 1.276-1.28 2.591-.536 5.182-1.073-1.81-5.695-9.83-5.695-9.83S5.663.331 14 .004"
          ></path>
          <path
            fill="#FCD900"
            d="M26.2 20.986s-3.808 7.308-13.176 6.946c1.158-1.995 6.667-11.502 6.667-11.502s1.331-2.13-.24-5.505c-.798-1.172-1.612-2.399-4.235-3.052 2.11-.02 11.389 0 11.389 0s3.476 5.755-.406 13.113"
          ></path>
          <path
            fill="#61BC5B"
            d="M1.86 21.043s-4.449-6.938.551-14.842c1.154 1.995 6.663 11.502 6.663 11.502s1.188 2.214 4.903 2.544c1.416-.103 2.89-.192 4.773-2.125-1.038 1.83-5.695 9.826-5.695 9.826s-6.744.123-11.196-6.905"
          ></path>
          <path
            fill="#5AB055"
            d="m13.02 28.001 1.876-7.796s2.06-.161 3.788-2.049c-1.073 1.88-5.664 9.845-5.664 9.845"
          ></path>
          <path
            fill="#fff"
            d="M7.72 14.089c0-3.437 2.797-6.224 6.246-6.224s6.246 2.787 6.246 6.224-2.797 6.224-6.246 6.224c-3.45-.004-6.246-2.787-6.246-6.224"
          ></path>
          <path
            fill="url(#chrome_svg__a)"
            d="M8.766 14.09c0-2.861 2.326-5.183 5.2-5.183 2.87 0 5.2 2.318 5.2 5.182 0 2.86-2.325 5.182-5.2 5.182-2.87 0-5.2-2.322-5.2-5.182"
          ></path>
          <path
            fill="#EACA05"
            d="m26.6 7.877-7.72 2.256s-1.164-1.703-3.668-2.256c2.172-.012 11.389 0 11.389 0"
          ></path>
          <path
            fill="#DF3A32"
            d="M7.947 15.758c-1.084-1.872-5.544-9.546-5.544-9.546l5.718 5.636s-.587 1.203-.367 2.925z"
          ></path>
          <defs>
            <linearGradient
              id="chrome_svg__a"
              x1="13.966"
              x2="13.966"
              y1="8.98"
              y2="18.959"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#86BBE5"></stop>
              <stop offset="1" stop-color="#1072BA"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Edge extension",
      svgElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 32 32"
        >
          <g clip-path="url(#clip0_30013_20141)">
            <path
              fill="url(#edge_svg__a)"
              d="M28.882 23.814q-.64.335-1.317.589a12.7 12.7 0 0 1-4.488.807c-5.914 0-11.066-4.068-11.066-9.289a3.93 3.93 0 0 1 2.053-3.413c-5.35.225-6.724 5.799-6.724 9.065 0 9.234 8.51 10.17 10.344 10.17.99 0 2.48-.287 3.375-.57l.163-.054a16.04 16.04 0 0 0 8.325-6.6.5.5 0 0 0-.665-.705"
            ></path>
            <path
              fill="url(#edge_svg__b)"
              d="M28.882 23.814q-.64.335-1.317.589a12.7 12.7 0 0 1-4.488.807c-5.914 0-11.066-4.068-11.066-9.289a3.93 3.93 0 0 1 2.053-3.413c-5.35.225-6.724 5.799-6.724 9.065 0 9.234 8.51 10.17 10.344 10.17.99 0 2.48-.287 3.375-.57l.163-.054a16.04 16.04 0 0 0 8.325-6.6.5.5 0 0 0-.665-.705"
              opacity="0.35"
            ></path>
            <path
              fill="url(#edge_svg__c)"
              d="M13.215 30.174a9.9 9.9 0 0 1-2.842-2.668c-3.286-4.5-2.3-10.812 2.201-14.097q.706-.515 1.49-.902c.39-.184 1.056-.516 1.942-.5 1.265.01 2.454.61 3.211 1.625.505.675.783 1.49.795 2.333 0-.027 3.057-9.95-10-9.95-5.486 0-9.999 5.207-9.999 9.776a16.3 16.3 0 0 0 1.514 7c3.444 7.349 11.847 10.954 19.546 8.388a9.44 9.44 0 0 1-7.847-1z"
            ></path>
            <path
              fill="url(#edge_svg__d)"
              d="M13.215 30.174a9.9 9.9 0 0 1-2.842-2.668c-3.286-4.5-2.3-10.812 2.201-14.097q.706-.515 1.49-.902c.39-.184 1.056-.516 1.942-.5 1.265.01 2.454.61 3.211 1.625.505.675.783 1.49.795 2.333 0-.027 3.057-9.95-10-9.95-5.486 0-9.999 5.207-9.999 9.776a16.3 16.3 0 0 0 1.514 7c3.444 7.349 11.847 10.954 19.546 8.388a9.44 9.44 0 0 1-7.847-1z"
              opacity="0.41"
            ></path>
            <path
              fill="url(#edge_svg__e)"
              d="M19.04 18.604c-.102.132-.413.313-.413.708 0 .326.213.64.59.903 1.798 1.25 5.187 1.085 5.195 1.085a7.45 7.45 0 0 0 3.784-1.044 7.67 7.67 0 0 0 3.803-6.609c.033-2.801-1-4.664-1.417-5.488C27.933 2.977 22.216-.002 16-.002 7.249-.002.123 7.024 0 15.772c.06-4.567 4.6-8.256 10-8.256.437 0 2.932.043 5.25 1.259 2.042 1.073 3.112 2.367 3.856 3.65.772 1.334.91 3.02.91 3.69 0 .671-.342 1.666-.975 2.489z"
            ></path>
            <path
              fill="url(#edge_svg__f)"
              d="M19.04 18.604c-.102.132-.413.313-.413.708 0 .326.213.64.59.903 1.798 1.25 5.187 1.085 5.195 1.085a7.45 7.45 0 0 0 3.784-1.044 7.67 7.67 0 0 0 3.803-6.609c.033-2.801-1-4.664-1.417-5.488C27.933 2.977 22.216-.002 16-.002 7.249-.002.123 7.024 0 15.772c.06-4.567 4.6-8.256 10-8.256.437 0 2.932.043 5.25 1.259 2.042 1.073 3.112 2.367 3.856 3.65.772 1.334.91 3.02.91 3.69 0 .671-.342 1.666-.975 2.489z"
            ></path>
          </g>
          <defs>
            <radialGradient
              id="edge_svg__b"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(11.9215 0 0 11.3254 19.652 22.303)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.72" stop-opacity="0"></stop>
              <stop offset="0.95" stop-opacity="0.53"></stop>
              <stop offset="1"></stop>
            </radialGradient>
            <radialGradient
              id="edge_svg__d"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(2.68346 -17.70176 14.33848 2.17361 8.857 24.88)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.76" stop-opacity="0"></stop>
              <stop offset="0.95" stop-opacity="0.5"></stop>
              <stop offset="1"></stop>
            </radialGradient>
            <radialGradient
              id="edge_svg__e"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(-1.011 25.2818 -53.85026 -2.15344 3.226 5.933)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#35C1F1"></stop>
              <stop offset="0.11" stop-color="#34C1ED"></stop>
              <stop offset="0.23" stop-color="#2FC2DF"></stop>
              <stop offset="0.31" stop-color="#2BC3D2"></stop>
              <stop offset="0.67" stop-color="#36C752"></stop>
            </radialGradient>
            <radialGradient
              id="edge_svg__f"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(73.74 8.49 24.841)scale(12.1667 9.85504)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#66EB6E"></stop>
              <stop offset="1" stop-color="#66EB6E" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient
              id="edge_svg__a"
              x1="7.34"
              x2="29.625"
              y1="22.125"
              y2="22.125"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0C59A4"></stop>
              <stop offset="1" stop-color="#114A8B"></stop>
            </linearGradient>
            <linearGradient
              id="edge_svg__c"
              x1="19.099"
              x2="5.175"
              y1="12.465"
              y2="27.631"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1B9DE2"></stop>
              <stop offset="0.16" stop-color="#1595DF"></stop>
              <stop offset="0.67" stop-color="#0680D7"></stop>
              <stop offset="1" stop-color="#0078D4"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Firefox extension",
      svgElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 32 32"
        >
          <path
            fill="url(#firefox_svg__a)"
            d="M28.99 10.727c-.608-1.47-1.843-3.056-2.812-3.557.789 1.55 1.245 3.105 1.42 4.264q0 0 .003.024c-1.585-3.96-4.273-5.557-6.468-9.034-.112-.175-.223-.35-.331-.538a4 4 0 0 1-.154-.293 2.6 2.6 0 0 1-.218-.578.04.04 0 0 0-.023-.013.1.1 0 0 0-.026 0l-.007.004q-.005.002-.01.005l.006-.007c-3.522 2.067-4.716 5.89-4.826 7.804a7 7 0 0 0-3.861 1.49 4 4 0 0 0-.363-.275 6.5 6.5 0 0 1-.039-3.434c-1.44.658-2.56 1.696-3.374 2.614H7.9c-.556-.706-.517-3.033-.485-3.519-.007-.03-.414.213-.467.25q-.737.526-1.37 1.176A12 12 0 0 0 4.27 8.683a11.9 11.9 0 0 0-1.881 4.257l-.019.093c-.026.123-.121.742-.138.877v.03q-.186.961-.231 1.94v.071C2 23.71 8.276 30 16.018 30c6.934 0 12.69-5.045 13.818-11.672q.034-.27.064-.542c.279-2.41-.031-4.942-.91-7.06M12.834 21.724c.065.03.127.065.194.096l.01.006zm14.769-10.26v-.013.015z"
          ></path>
          <path
            fill="url(#firefox_svg__b)"
            d="M28.99 10.727c-.608-1.47-1.842-3.056-2.811-3.557.788 1.55 1.244 3.105 1.419 4.264v.03c1.323 3.593.602 7.248-.436 9.481-1.607 3.455-5.496 6.997-11.584 6.824-6.572-.187-12.366-5.08-13.448-11.485-.197-1.01 0-1.523.099-2.343-.12.631-.167.814-.227 1.938v.072C2.002 23.71 8.278 30 16.02 30c6.934 0 12.69-5.045 13.818-11.672q.034-.27.064-.542c.277-2.41-.033-4.942-.911-7.06"
          ></path>
          <path
            fill="url(#firefox_svg__c)"
            d="M28.99 10.727c-.608-1.47-1.842-3.056-2.811-3.557.788 1.55 1.244 3.105 1.419 4.264v.03c1.323 3.593.602 7.248-.436 9.481-1.607 3.455-5.496 6.997-11.584 6.824-6.572-.187-12.366-5.08-13.448-11.485-.197-1.01 0-1.523.099-2.343-.12.631-.167.814-.227 1.938v.072C2.002 23.71 8.278 30 16.02 30c6.934 0 12.69-5.045 13.818-11.672q.034-.27.064-.542c.277-2.41-.033-4.942-.911-7.06"
          ></path>
          <path
            fill="url(#firefox_svg__d)"
            d="m22.178 12.377.087.065a7.6 7.6 0 0 0-1.302-1.702c-4.357-4.367-1.142-9.47-.6-9.729l.006-.007c-3.522 2.067-4.716 5.89-4.826 7.804.163-.011.326-.025.492-.025 2.628 0 4.917 1.448 6.143 3.594"
          ></path>
          <path
            fill="url(#firefox_svg__e)"
            d="M16.045 13.25c-.023.35-1.255 1.555-1.686 1.555-3.986 0-4.633 2.416-4.633 2.416.175 2.036 1.59 3.712 3.302 4.599q.118.059.233.113.206.088.412.169a6.2 6.2 0 0 0 1.824.35c6.987.329 8.341-8.372 3.299-10.899 1.29-.225 2.63.296 3.38.823C20.95 10.23 18.66 8.78 16.032 8.78c-.166 0-.329.014-.492.025a7 7 0 0 0-3.858 1.492c.214.182.456.424.964.925.953.943 3.392 1.913 3.398 2.027"
          ></path>
          <path
            fill="url(#firefox_svg__f)"
            d="M16.045 13.25c-.023.35-1.255 1.555-1.686 1.555-3.986 0-4.633 2.416-4.633 2.416.175 2.036 1.59 3.712 3.302 4.599q.118.059.233.113.206.088.412.169a6.2 6.2 0 0 0 1.824.35c6.987.329 8.341-8.372 3.299-10.899 1.29-.225 2.63.296 3.38.823C20.95 10.23 18.66 8.78 16.032 8.78c-.166 0-.329.014-.492.025a7 7 0 0 0-3.858 1.492c.214.182.456.424.964.925.953.943 3.392 1.913 3.398 2.027"
          ></path>
          <path
            fill="url(#firefox_svg__g)"
            d="m11.031 9.83.292.193a6.5 6.5 0 0 1-.04-3.434c-1.44.658-2.56 1.696-3.374 2.614.066-.002 2.1-.039 3.122.628"
          ></path>
          <path
            fill="url(#firefox_svg__h)"
            d="M2.13 16.284C3.212 22.69 9.006 27.582 15.583 27.77c6.088.173 9.974-3.369 11.583-6.824 1.038-2.233 1.76-5.888.436-9.482v-.027l.003.024c.497 3.254-1.154 6.407-3.736 8.539l-.007.018c-5.031 4.105-9.845 2.477-10.82 1.812l-.204-.102c-2.933-1.403-4.145-4.083-3.885-6.38-2.476 0-3.321-2.094-3.321-2.094s2.224-1.589 5.154-.207c2.714 1.28 5.263.208 5.263.207-.005-.114-2.444-1.087-3.396-2.026-.508-.502-.75-.744-.963-.925a4 4 0 0 0-.363-.275c-.084-.059-.175-.117-.292-.193-1.022-.666-3.056-.63-3.123-.627h-.006c-.556-.706-.517-3.033-.486-3.52-.006-.03-.414.213-.466.25-.49.35-.95.744-1.37 1.176q-.721.732-1.31 1.573a11.9 11.9 0 0 0-1.88 4.257c-.012.027-.51 2.21-.264 3.341"
          ></path>
          <path
            fill="url(#firefox_svg__i)"
            d="M20.963 10.74c.512.503.95 1.076 1.302 1.702q.11.083.21.176c3.178 2.932 1.516 7.083 1.39 7.381 2.581-2.132 4.232-5.284 3.735-8.539-1.585-3.962-4.272-5.56-6.468-9.036-.11-.175-.222-.35-.33-.538a4 4 0 0 1-.154-.293 2.6 2.6 0 0 1-.218-.578.04.04 0 0 0-.023-.013.1.1 0 0 0-.026 0l-.007.004q-.005.002-.01.005c-.543.26-3.758 5.362.6 9.729"
          ></path>
          <path
            fill="url(#firefox_svg__j)"
            d="M22.474 12.615a3 3 0 0 0-.21-.176l-.087-.065c-.749-.526-2.089-1.047-3.38-.822 5.042 2.527 3.688 11.228-3.299 10.9a6.2 6.2 0 0 1-1.824-.352 8 8 0 0 1-.411-.169 4 4 0 0 1-.234-.112l.01.005c.974.667 5.788 2.296 10.82-1.812l.007-.018c.125-.293 1.787-4.444-1.392-7.38"
          ></path>
          <path
            fill="url(#firefox_svg__k)"
            d="M9.725 17.221s.647-2.416 4.634-2.416c.43 0 1.663-1.206 1.685-1.555.023-.35-2.549 1.073-5.263-.207-2.93-1.382-5.154.207-5.154.207s.845 2.094 3.32 2.094c-.259 2.297.953 4.975 3.886 6.38.066.03.127.065.194.096-1.712-.885-3.125-2.563-3.302-4.599"
          ></path>
          <path
            fill="url(#firefox_svg__l)"
            d="M28.99 10.727c-.608-1.47-1.843-3.056-2.812-3.557.789 1.55 1.245 3.105 1.42 4.264q0 0 .003.024c-1.585-3.96-4.273-5.557-6.468-9.034-.112-.175-.223-.35-.331-.538a4 4 0 0 1-.154-.293 2.6 2.6 0 0 1-.218-.578.04.04 0 0 0-.023-.013.1.1 0 0 0-.026 0l-.007.004q-.005.002-.01.005l.006-.007c-3.522 2.067-4.716 5.89-4.826 7.804.163-.011.326-.025.492-.025 2.628 0 4.917 1.448 6.143 3.594-.749-.526-2.09-1.047-3.38-.822 5.042 2.527 3.688 11.228-3.299 10.899a6.2 6.2 0 0 1-1.824-.35 8 8 0 0 1-.412-.17 4 4 0 0 1-.233-.113l.01.006-.204-.101c.065.03.127.065.194.096-1.716-.887-3.129-2.565-3.306-4.6 0 0 .647-2.417 4.634-2.417.43 0 1.663-1.206 1.685-1.555-.005-.114-2.444-1.087-3.396-2.027-.508-.501-.75-.743-.963-.925a4 4 0 0 0-.363-.275 6.5 6.5 0 0 1-.04-3.434c-1.44.658-2.56 1.696-3.374 2.614h-.006c-.556-.706-.517-3.033-.485-3.519-.007-.03-.414.213-.467.25-.49.35-.95.744-1.37 1.176a12.3 12.3 0 0 0-1.31 1.573 11.9 11.9 0 0 0-1.88 4.257l-.019.093c-.026.123-.145.75-.162.885 0 .01 0-.01 0 0q-.164.975-.209 1.961v.072C2 23.71 8.276 30 16.018 30c6.934 0 12.69-5.045 13.818-11.672q.034-.27.064-.542c.279-2.41-.031-4.942-.91-7.06m-1.39.72v.016z"
          ></path>
          <defs>
            <radialGradient
              id="firefox_svg__b"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(29.2246 0 0 29.2888 26.06 4.219)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.13" stop-color="#FFBD4F"></stop>
              <stop offset="0.19" stop-color="#FFAC31"></stop>
              <stop offset="0.25" stop-color="#FF9D17"></stop>
              <stop offset="0.28" stop-color="#FF980E"></stop>
              <stop offset="0.4" stop-color="#FF563B"></stop>
              <stop offset="0.47" stop-color="#FF3750"></stop>
              <stop offset="0.71" stop-color="#F5156C"></stop>
              <stop offset="0.78" stop-color="#EB0878"></stop>
              <stop offset="0.86" stop-color="#E50080"></stop>
            </radialGradient>
            <radialGradient
              id="firefox_svg__c"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(29.2246 0 0 29.2888 15.38 16.192)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.3" stop-color="#960E18"></stop>
              <stop
                offset="0.35"
                stop-color="#B11927"
                stop-opacity="0.74"
              ></stop>
              <stop
                offset="0.43"
                stop-color="#DB293D"
                stop-opacity="0.34"
              ></stop>
              <stop
                offset="0.5"
                stop-color="#F5334B"
                stop-opacity="0.09"
              ></stop>
              <stop offset="0.53" stop-color="#FF3750" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="firefox_svg__d"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(21.172 0 0 21.2184 18.904 -2.428)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.13" stop-color="#FFF44F"></stop>
              <stop offset="0.25" stop-color="#FFDC3E"></stop>
              <stop offset="0.51" stop-color="#FF9D12"></stop>
              <stop offset="0.53" stop-color="#FF980E"></stop>
            </radialGradient>
            <radialGradient
              id="firefox_svg__e"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(13.915 0 0 13.9455 12.149 23.843)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.35" stop-color="#3A8EE6"></stop>
              <stop offset="0.47" stop-color="#5C79F0"></stop>
              <stop offset="0.67" stop-color="#9059FF"></stop>
              <stop offset="1" stop-color="#C139E6"></stop>
            </radialGradient>
            <radialGradient
              id="firefox_svg__f"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(7.15643 -1.77455 2.08872 8.42342 15.8 12.712)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.21" stop-color="#9059FF" stop-opacity="0"></stop>
              <stop
                offset="0.28"
                stop-color="#8C4FF3"
                stop-opacity="0.06"
              ></stop>
              <stop
                offset="0.75"
                stop-color="#7716A8"
                stop-opacity="0.45"
              ></stop>
              <stop
                offset="0.97"
                stop-color="#6E008B"
                stop-opacity="0.6"
              ></stop>
            </radialGradient>
            <radialGradient
              id="firefox_svg__g"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(10.0108 0 0 10.0328 15.011 3.02)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFE226"></stop>
              <stop offset="0.12" stop-color="#FFDB27"></stop>
              <stop offset="0.3" stop-color="#FFC82A"></stop>
              <stop offset="0.5" stop-color="#FFA930"></stop>
              <stop offset="0.73" stop-color="#FF7E37"></stop>
              <stop offset="0.79" stop-color="#FF7139"></stop>
            </radialGradient>
            <radialGradient
              id="firefox_svg__h"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(42.7109 0 0 42.8046 22.88 -3.343)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.11" stop-color="#FFF44F"></stop>
              <stop offset="0.46" stop-color="#FF980E"></stop>
              <stop offset="0.62" stop-color="#FF5634"></stop>
              <stop offset="0.72" stop-color="#FF3647"></stop>
              <stop offset="0.9" stop-color="#E31587"></stop>
            </radialGradient>
            <radialGradient
              id="firefox_svg__i"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(84.245 8.638 11.035)scale(31.1996 20.4543)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFF44F"></stop>
              <stop offset="0.06" stop-color="#FFE847"></stop>
              <stop offset="0.17" stop-color="#FFC830"></stop>
              <stop offset="0.3" stop-color="#FF980E"></stop>
              <stop offset="0.36" stop-color="#FF8B16"></stop>
              <stop offset="0.45" stop-color="#FF672A"></stop>
              <stop offset="0.57" stop-color="#FF3647"></stop>
              <stop offset="0.74" stop-color="#E31587"></stop>
            </radialGradient>
            <radialGradient
              id="firefox_svg__j"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(26.6644 0 0 26.723 14.776 6.736)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.14" stop-color="#FFF44F"></stop>
              <stop offset="0.48" stop-color="#FF980E"></stop>
              <stop offset="0.59" stop-color="#FF5634"></stop>
              <stop offset="0.66" stop-color="#FF3647"></stop>
              <stop offset="0.9" stop-color="#E31587"></stop>
            </radialGradient>
            <radialGradient
              id="firefox_svg__k"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(29.1844 0 0 29.2484 21.814 8.3)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.09" stop-color="#FFF44F"></stop>
              <stop offset="0.23" stop-color="#FFE141"></stop>
              <stop offset="0.51" stop-color="#FFAF1E"></stop>
              <stop offset="0.63" stop-color="#FF980E"></stop>
            </radialGradient>
            <linearGradient
              id="firefox_svg__a"
              x1="27.135"
              x2="3.814"
              y1="5.493"
              y2="27.944"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.05" stop-color="#FFF44F"></stop>
              <stop offset="0.11" stop-color="#FFE847"></stop>
              <stop offset="0.22" stop-color="#FFC830"></stop>
              <stop offset="0.37" stop-color="#FF980E"></stop>
              <stop offset="0.4" stop-color="#FF8B16"></stop>
              <stop offset="0.46" stop-color="#FF672A"></stop>
              <stop offset="0.53" stop-color="#FF3647"></stop>
              <stop offset="0.7" stop-color="#E31587"></stop>
            </linearGradient>
            <linearGradient
              id="firefox_svg__l"
              x1="26.855"
              x2="7.01"
              y1="5.372"
              y2="25.174"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.17"
                stop-color="#FFF44F"
                stop-opacity="0.8"
              ></stop>
              <stop
                offset="0.27"
                stop-color="#FFF44F"
                stop-opacity="0.63"
              ></stop>
              <stop
                offset="0.49"
                stop-color="#FFF44F"
                stop-opacity="0.22"
              ></stop>
              <stop offset="0.6" stop-color="#FFF44F" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Outlook add-in",
      svgElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <rect
            width="12.5"
            height="17.5"
            x="6.25"
            y="1.25"
            fill="#1066B5"
            rx="2"
          ></rect>
          <rect
            width="12.5"
            height="17.5"
            x="6.25"
            y="1.25"
            fill="url(#outlook_svg__a)"
            rx="2"
          ></rect>
          <path fill="#32A9E7" d="M6.25 3.125h6.25v6.25H6.25z"></path>
          <path fill="#167EB4" d="M6.25 9.375h6.25v6.25H6.25z"></path>
          <path fill="#32A9E7" d="M12.5 9.375h6.25v6.25H12.5z"></path>
          <path fill="#58D9FD" d="M12.5 3.125h6.25v6.25H12.5z"></path>
          <mask
            id="outlook_svg__c"
            width="15"
            height="11"
            x="5"
            y="8"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="url(#outlook_svg__b)"
              d="M5 8.75h13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"
            ></path>
          </mask>
          <g mask="url(#outlook_svg__c)">
            <path fill="#135298" d="M20 8.75v2.5h-1.25v-2.5z"></path>
            <path
              fill="url(#outlook_svg__d)"
              d="M20 18.75V10L4.375 18.75z"
            ></path>
            <path
              fill="url(#outlook_svg__e)"
              d="M5 18.75V10l15.625 8.75z"
            ></path>
          </g>
          <path
            fill="#000"
            fill-opacity="0.3"
            d="M5 8.625a3 3 0 0 1 3-3h1.5a3 3 0 0 1 3 3v5.25a3 3 0 0 1-3 3H5z"
          ></path>
          <rect
            width="11.25"
            height="11.25"
            y="4.375"
            fill="url(#outlook_svg__f)"
            rx="2"
          ></rect>
          <path
            fill="#fff"
            d="M8.75 10.043V9.94c0-1.8-1.295-3.064-3.115-3.064-1.83 0-3.135 1.273-3.135 3.082v.104c0 1.8 1.295 3.064 3.125 3.064 1.82 0 3.125-1.273 3.125-3.082m-1.473.018c0 1.194-.673 1.913-1.642 1.913-.97 0-1.652-.736-1.652-1.93v-.105c0-1.194.673-1.913 1.642-1.913.96 0 1.652.736 1.652 1.93z"
          ></path>
          <defs>
            <linearGradient
              id="outlook_svg__a"
              x1="6.25"
              x2="18.75"
              y1="10"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#064484"></stop>
              <stop offset="1" stop-color="#0F65B5"></stop>
            </linearGradient>
            <linearGradient
              id="outlook_svg__b"
              x1="5"
              x2="20"
              y1="16.731"
              y2="16.731"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1B366F"></stop>
              <stop offset="1" stop-color="#2657B0"></stop>
            </linearGradient>
            <linearGradient
              id="outlook_svg__d"
              x1="20"
              x2="5"
              y1="14.375"
              y2="14.375"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#44DCFD"></stop>
              <stop offset="0.453" stop-color="#259ED0"></stop>
            </linearGradient>
            <linearGradient
              id="outlook_svg__e"
              x1="5"
              x2="20"
              y1="14.375"
              y2="14.375"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#259ED0"></stop>
              <stop offset="1" stop-color="#44DCFD"></stop>
            </linearGradient>
            <linearGradient
              id="outlook_svg__f"
              x1="0"
              x2="11.25"
              y1="10"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#064484"></stop>
              <stop offset="1" stop-color="#0F65B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  const logos = [
    {
      svgElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.317 2h3.358l-7.334 8.438L23 21.88h-6.803l-5.301-6.936-6.097 6.935H1.442l7.863-9.012L1 2h6.98l4.815 6.361zm-1.192 17.847h1.855L6.964 3.9H4.932z"></path>
        </svg>
      ),
    },
    {
      svgElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <g clip-path="url(#facebook_svg__a)">
            <path d="M10.267 9.355H8.053v3.247h2.214v9.742h3.69v-9.742h2.657l.295-3.247h-2.952v-1.38c0-.73.148-1.055.812-1.055h2.14V2.86h-2.804c-2.657 0-3.838 1.3-3.838 3.735z"></path>
          </g>
          <defs>
            <clipPath id="facebook_svg__a">
              <path fill="#fff" d="M2 2h20.368v20.368H2z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      svgElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <g clip-path="url(#instagram_svg__a)">
            <path d="M12 3.833c2.667 0 3 0 4.083.084 2.75.083 4 1.416 4.084 4.083.083 1.083.083 1.333.083 4s0 3-.083 4c-.084 2.667-1.417 4-4.084 4.083-1.083.084-1.333.084-4.083.084-2.667 0-3 0-4-.084C5.25 20 4 18.667 3.917 16c-.084-1.083-.084-1.333-.084-4s0-3 .084-4C4 5.333 5.333 4 8 3.917c1-.084 1.333-.084 4-.084M12 2c-2.75 0-3.083 0-4.083.083C4.25 2.25 2.25 4.25 2.083 7.917 2 8.917 2 9.25 2 12s0 3.083.083 4.083c.167 3.667 2.167 5.667 5.834 5.834C8.917 22 9.25 22 12 22s3.083 0 4.083-.083c3.667-.167 5.667-2.167 5.834-5.834C22 15.083 22 14.75 22 12s0-3.083-.083-4.083C21.75 4.25 19.75 2.25 16.083 2.083 15.083 2 14.75 2 12 2m0 4.833c-2.833 0-5.167 2.334-5.167 5.167S9.167 17.167 12 17.167s5.167-2.334 5.167-5.167S14.833 6.833 12 6.833m0 8.5A3.343 3.343 0 0 1 8.667 12c0-1.833 1.5-3.333 3.333-3.333s3.333 1.5 3.333 3.333-1.5 3.333-3.333 3.333M17.333 5.5c-.666 0-1.166.5-1.166 1.167 0 .666.5 1.166 1.166 1.166.667 0 1.167-.5 1.167-1.166C18.5 6 18 5.5 17.333 5.5"></path>
          </g>
          <defs>
            <clipPath id="instagram_svg__a">
              <path fill="#fff" d="M2 2h20v20H2z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      svgElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <g clip-path="url(#linkedin_svg__a)">
            <path d="M5.583 3.174c0 1.217-1.008 2.174-2.291 2.174C2.008 5.348 1 4.39 1 3.174S2.008 1 3.292 1s2.291.957 2.291 2.174m0 3.913H1V21h4.583zm7.334 0H8.333V21h4.584v-7.304c0-4.087 5.5-4.435 5.5 0V21H23v-8.783C23 5.347 14.842 5.61 12.917 9z"></path>
          </g>
          <defs>
            <clipPath id="linkedin_svg__a">
              <path fill="#fff" d="M1 1h22v20H1z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      svgElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.825"
            d="M22.54 7.514a2.64 2.64 0 0 0-.702-1.21 2.8 2.8 0 0 0-1.238-.71c-1.72-.403-8.6-.403-8.6-.403s-6.88 0-8.6.442c-.47.128-.898.373-1.238.71s-.583.754-.701 1.21A26.8 26.8 0 0 0 1 12.63a26.8 26.8 0 0 0 .46 5.117c.13.441.378.842.718 1.165s.76.556 1.221.678c1.72.441 8.6.441 8.6.441s6.88 0 8.6-.441c.47-.128.897-.373 1.238-.71s.583-.755.701-1.21c.313-1.663.467-3.35.46-5.04a26.8 26.8 0 0 0-.46-5.117"
          ></path>
          <path
            stroke="#0B3558"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.825"
            d="m9.75 15.77 5.75-3.139-5.75-3.14z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.containerTop}>
            <div className={styles.containerTopTitle}>
              <h2 className={styles.title}>
                Easy
                <span className={styles.titleDecoration}> ahead</span>
                <span className={styles.decoration}>™</span>
              </h2>
              <p className={styles.description}>
                We take the work out of connecting with others so you can
                accomplish more.
              </p>
            </div>
            <div className={styles.containerTopCard}>
              <a className={styles.iconCard} href="">
                <div className={styles.iconCardContent}>
                  <div className={styles.headerCard}>
                    <div className={styles.badgeWrapper}>
                      <div className={styles.badge}>FEATURED</div>
                    </div>
                    <button className={styles.wrapperIcon}>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 32 32"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9.333 22.667 22.667 9.333M9.333 9.333h13.334v13.334"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                  <h4 className={styles.cardTitle}>
                    2024 Report: The State of Meetings
                  </h4>
                  <div className={styles.cardBody}>
                    See the latest data on meeting culture and productivity
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.containerMiddle}>
            <div className={styles.column}>
              <h5>Features</h5>
              <ul>
                <li>
                  <a href="">Scheduling automation</a>
                </li>
                <li>
                  <a href="">Customizable availability</a>
                </li>
                <li>
                  <a href="">Mobile apps</a>
                </li>
                <li>
                  <a href="">Browser extensions</a>
                </li>
                <li>
                  <a href="">Meeting routing</a>
                </li>
                <li>
                  <a href="">Event Types</a>
                </li>
                <li>
                  <a href="">Email & website embeds</a>
                </li>
                <li>
                  <a href="">Reminders & follow-ups</a>
                </li>
                <li>
                  <a href="">Meeting polls</a>
                </li>
                <li>
                  <a href="">Analytics</a>
                </li>
                <li>
                  <a href="">Admin management</a>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <h5>Integrations</h5>
              <ul>
                <li>
                  <a href="">Google ecosystem</a>
                </li>
                <li>
                  <a href="">Microsoft ecosystem</a>
                </li>
                <li>
                  <a href="">Calendars</a>
                </li>
                <li>
                  <a href="">Video conferencing</a>
                </li>
                <li>
                  <a href="">Payments</a>
                </li>
                <li>
                  <a href="">Sales & CRM</a>
                </li>
                <li>
                  <a href="">Recruiting & ATS</a>
                </li>
                <li>
                  <a href="">Email messaging</a>
                </li>
                <li>
                  <a href="">Embed Calendly</a>
                </li>
                <li>
                  <a href="">Analytics</a>
                </li>
                <li>
                  <a href="">API & connectors</a>
                </li>
                <li>
                  <a href="">Security & compliance</a>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <h5>Calendly</h5>
              <ul>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Product overview</a>
                </li>
                <li>
                  <a href="">Solutions</a>
                </li>
                <li>
                  <a href="">For individuals</a>
                </li>
                <li>
                  <a href="">For small businesses</a>
                </li>
                <li>
                  <a href="">For enterprise</a>
                </li>
                <li>
                  <a href="">Compare</a>
                </li>
                <li>
                  <a href="">Security</a>
                </li>
                <li>
                  <a href="">Sign up for free</a>
                </li>
                <li>
                  <a href="">Talk to sales</a>
                </li>
                <li>
                  <a href="">Get a demo</a>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <h5>Resources</h5>
              <ul>
                <li>
                  <a href="">Help center</a>
                </li>
                <li>
                  <a href="">Resource center</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Customer stories</a>
                </li>
                <li>
                  <a href="">Calendly community</a>
                </li>
                <li>
                  <a href="">Developer tools</a>
                </li>
                <li>
                  <a href="">Release notes</a>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Leadership</a>
                </li>
                <li>
                  <a href="">Carrers</a> <div>We’re hiring!</div>
                </li>
                <li>
                  <a href="">Newsroom</a>
                </li>
                <li>
                  <a href="">Become a partner</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.containerExtensionsSocial}>
            <div className={styles.containerExtensions}>
              <h5>Downloads</h5>
              <div className={styles.containerExtension}>
                {descargas.map((descarga, index) => (
                  <a key={index} className={styles.extension} href="">
                    <span className={styles.extensionName}>
                      {descarga.name}
                    </span>
                    <span className={styles.wrapperLogo}>
                      <span>{descarga.svgElement}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.containerSocial}>
              {logos.map((logo, index) => (
                <a key={index} className={styles.containerLogo} href="">
                  <div>{logo.svgElement}</div>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.containerBottom}>
            <div className={styles.container}>
              <div className={styles.containerLanguage}>
                <div className={styles.containerText}>
                  <svg
                  className={styles.iconGlobal}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 16 16"
                    alt="Globe"
                    aria-hidden="true"
                  >
                    <circle
                      cx="8.017"
                      cy="7.973"
                      r="7.314"
                      stroke-width="0.833"
                    ></circle>
                    <path
                      stroke-width="0.833"
                      d="M8.147.92c5.347 3.08 5.335 10.808 0 13.91M8.017 1.018c-5.347 3.08-5.335 10.808 0 13.91M15.135 7.908H.964"
                    ></path>
                    <path
                      stroke-width="0.833"
                      d="m2.792 3.14.071.065a7.55 7.55 0 0 0 10.247-.064M2.89 12.74l.071-.065a7.55 7.55 0 0 1 10.247.065M8.017.92v14.106"
                    ></path>
                  </svg>
                  <span>English</span>
                  <svg
                  className={styles.iconArrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    class="sc-6468d002-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m5 7.5 5 5 5-5"
                    ></path>
                  </svg>
                </div>
                <div className={styles.containerAllLanguages}>
                  <div className={styles.wrapperAllLanguages}>
                    <div className={styles.stylesLanguages}></div>
                    <div className={styles.containerNames}>
                      <a
                        lang="en"
                        tabindex="0"
                        class="sc-6468d002-6 evwoNS"
                        href="/"
                      >
                        English
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          fill="none"
                          viewBox="0 0 20 21"
                        >
                          <path
                            stroke="#007EFF"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.667"
                            d="M16.667 5.5 7.5 14.667 3.333 10.5"
                          ></path>
                        </svg>
                      </a>
                      <a lang="fr" tabindex="0" href="/fr">
                        Français
                      </a>
                      <a lang="es" tabindex="0" href="/es">
                        Español
                      </a>
                      <a lang="de" tabindex="0" href="/de">
                        Deutsch
                      </a>
                      <a lang="pt" tabindex="0" href="/pt">
                        Português
                      </a>
                    </div>
                    <div className={styles.decorationLanguages}></div>
                  </div>
                </div>
              </div>

              <div className={styles.containerOptions}>
                <a href="/legal/privacy-notice">
                  <span>Privacy Policy</span>
                </a>
                <a href="/legal">
                  <span>Legal</span>
                </a>
                <a
                  target="__blank"
                  href="https://www.calendlystatus.com/"
                >
                  <span>Status</span>
                </a>
                <button className={styles.buttonCookies} type="button">
                  Configuración de cookies
                </button>
                <button className={styles.buttonCookiesEnglish}>
                  <span>Cookie Settings</span>
                </button>
                <button className={styles.buttonPrivacy}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="14"
                      fill="none"
                      viewBox="0 0 30 14"
                    >
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        fill="#06F"
                        fill-rule="evenodd"
                        d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7m-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        fill="#fff"
                        d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8s-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0s-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8s.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0"
                      ></path>
                      <path
                        fill="#06F"
                        d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8s.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0"
                      ></path>
                    </svg>
                    Your Privacy Choices
                  </span>
                </button>
              </div>

              <div className={styles.rights}>
                <span>Copyright Calendly 2025</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
