<script setup lang="ts">
import { diagram } from "../i18n";
</script>

<template>
  <figure class="system-figure" :aria-label="diagram.title">
    <div class="figure-label">
      <span class="status-dot"></span> {{ diagram.label }}
      <span class="figure-index">{{ diagram.index }}</span>
    </div>
    <div class="system-map" role="img" :aria-label="diagram.description">
      <div class="system-node system-human">
        <div class="system-node-heading">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="10" r="5" />
            <path d="M6 27v-2a10 10 0 0 1 20 0v2M11 27h10" />
          </svg>
          <span>{{ diagram.human }}</span>
        </div>
        <p>{{ diagram.goals }}</p>
        <span class="system-node-note">{{ diagram.humanNote }}</span>
      </div>

      <svg class="system-trunk" viewBox="0 0 20 30" aria-hidden="true">
        <defs>
          <marker id="system-trunk-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="m1 1 5 3-5 3" fill="none" stroke="currentColor" stroke-width="1.2" />
          </marker>
        </defs>
        <path d="M10 3v24" marker-start="url(#system-trunk-arrow)" marker-end="url(#system-trunk-arrow)" />
      </svg>

      <div class="system-core">
        <span class="system-core-label">{{ diagram.coreLabel }}</span>
        <strong>HCPS</strong>
        <span class="system-core-process">{{ diagram.coreProcess }}</span>
      </div>

      <svg class="system-branches" viewBox="0 0 600 36" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id="system-branch-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="m1 1 5 3-5 3" fill="none" stroke="currentColor" stroke-width="1.2" />
          </marker>
        </defs>
        <path d="M300 3v12" marker-start="url(#system-branch-arrow)" />
        <path d="M150 33V15h300v18" marker-start="url(#system-branch-arrow)" marker-end="url(#system-branch-arrow)" />
      </svg>

      <div class="system-domains">
        <div class="system-node">
          <div class="system-node-heading">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <rect x="8" y="8" width="16" height="16" rx="3" />
              <rect x="12" y="12" width="8" height="8" rx="1" />
              <path d="M12 4v4m8-4v4M12 24v4m8-4v4M4 12h4m-4 8h4m16-8h4m-4 8h4" />
            </svg>
            <span>{{ diagram.cyber }}</span>
          </div>
          <p>{{ diagram.models }}</p>
          <span class="system-node-note">{{ diagram.cyberNote }}</span>
        </div>
        <div class="system-node">
          <div class="system-node-heading">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="m16 3 11 6v14l-11 6-11-6V9Zm-11 6 11 6 11-6M16 15v14M10 6l11 6" />
            </svg>
            <span>{{ diagram.physical }}</span>
          </div>
          <p>{{ diagram.sensing }}</p>
          <span class="system-node-note">{{ diagram.physicalNote }}</span>
        </div>
      </div>

      <div class="system-feedback">
        <svg viewBox="0 0 600 36" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <marker id="system-feedback-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="m1 1 5 3-5 3" fill="none" stroke="currentColor" stroke-width="1.2" />
            </marker>
          </defs>
          <path d="M150 3v21h300V3" marker-start="url(#system-feedback-arrow)" marker-end="url(#system-feedback-arrow)" />
        </svg>
        <span>{{ diagram.feedback }}</span>
      </div>
      <div class="system-assurance">{{ diagram.assurance }}</div>
    </div>
    <figcaption>{{ diagram.caption }}</figcaption>
  </figure>
</template>
