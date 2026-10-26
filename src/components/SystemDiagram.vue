<template>
  <figure class="system-figure">
    <div class="figure-label">
      <span class="status-dot"></span> A connected research perspective
      <span class="figure-index">FIG. 01</span>
    </div>
    <svg
      class="system-diagram"
      viewBox="0 0 560 460"
      role="img"
      aria-labelledby="system-title system-description"
    >
      <title id="system-title">
        Human, cyber, and physical systems in a shared feedback loop
      </title>
      <desc id="system-description">
        People contribute goals and decisions; computational systems model and
        reason; physical systems sense and act. Bidirectional connections link
        all three around an integrated HCPS perspective.
      </desc>
      <defs>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#b1c8c5" opacity=".5" />
        </pattern>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path
            d="M1 1 9 5 1 9"
            fill="none"
            stroke="#2b8077"
            stroke-width="1.4"
          />
        </marker>
      </defs>
      <rect width="560" height="460" fill="url(#grid)" />
      <circle
        cx="280"
        cy="246"
        r="159"
        fill="none"
        stroke="#b7ceca"
        stroke-width="1"
      />
      <circle
        class="orbit"
        cx="280"
        cy="246"
        r="194"
        fill="none"
        stroke="#9dbab5"
        stroke-dasharray="2 12"
      />
      <path
        d="M250 131 151 304 M310 131 409 304 M195 347H365"
        fill="none"
        stroke="#2b8077"
        stroke-width="1.5"
        marker-start="url(#arrow)"
        marker-end="url(#arrow)"
      />
      <path
        d="M280 148V220 M178 321 250 264 M382 321 310 264"
        fill="none"
        stroke="#9abdb5"
        stroke-dasharray="4 5"
      />
      <g fill="#f6f9f5" stroke="#2b8077" stroke-width="1.5">
        <circle cx="280" cy="105" r="59" />
        <circle cx="138" cy="347" r="59" />
        <circle cx="422" cy="347" r="59" />
      </g>
      <g
        stroke="#1e625e"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="280" cy="78" r="7" />
        <path d="M266 97c0-15 28-15 28 0" />
        <rect x="128" y="315" width="20" height="18" rx="2" />
        <path
          d="M133 311v4m10-4v4m-10 18v4m10-4v4m-19-17h4m20 0h4m-28 8h4m20 0h4"
        />
        <path d="m422 311 12 7v14l-12 7-12-7v-14Zm-12 7 12 7 12-7m-12 7v14" />
      </g>
      <g
        fill="#102e42"
        text-anchor="middle"
        font-family="system-ui, sans-serif"
      >
        <text x="280" y="122" font-size="19" font-weight="600">Human</text>
        <text x="138" y="364" font-size="19" font-weight="600">Cyber</text>
        <text x="422" y="364" font-size="19" font-weight="600">Physical</text>
      </g>
      <g
        fill="#496461"
        text-anchor="middle"
        font-family="system-ui, sans-serif"
        font-size="11"
      >
        <text x="280" y="140">Goals &amp; decisions</text>
        <text x="138" y="382">Models &amp; reasoning</text>
        <text x="422" y="382">Sensing &amp; action</text>
      </g>
      <circle cx="280" cy="246" r="39" fill="#102e42" />
      <text
        x="280"
        y="251"
        fill="#fff"
        text-anchor="middle"
        font-size="15"
        font-family="system-ui, sans-serif"
        letter-spacing="2"
      >
        HCPS
      </text>
      <g
        fill="#426962"
        font-size="10"
        font-family="system-ui, sans-serif"
        letter-spacing="1.5"
      >
        <text transform="translate(171 222) rotate(-60)">COLLABORATION</text>
        <text transform="translate(360 174) rotate(60)">INTERACTION</text>
        <text x="242" y="369">FEEDBACK</text>
      </g>
    </svg>
    <figcaption>
      Human agency. Computational reasoning. Physical grounding.
    </figcaption>
  </figure>
</template>
