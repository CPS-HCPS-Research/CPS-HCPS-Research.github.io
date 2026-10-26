<script setup lang="ts">
import SiteHeader from "./components/SiteHeader.vue";
import SectionHeading from "./components/SectionHeading.vue";
import SystemDiagram from "./components/SystemDiagram.vue";
import ResearchCard from "./components/ResearchCard.vue";
import PublicationList from "./components/PublicationList.vue";
import { researchAreas, resources, seminars, site } from "./data/site";
</script>

<template>
  <SiteHeader />
  <main id="main" tabindex="-1">
    <section
      id="home"
      class="hero"
      tabindex="-1"
      aria-labelledby="hero-heading"
    >
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">
            <span class="short-rule"></span>{{ site.hero.eyebrow }}
          </p>
          <p class="hero-name">{{ site.name }}</p>
          <h1 id="hero-heading">
            From Formal<br />Foundations to<br /><em>Grounded Intelligence.</em>
          </h1>
          <p class="hero-description">{{ site.hero.description }}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#research"
              >{{ site.hero.primary }} <span aria-hidden="true">↗</span></a
            ><a class="text-link" href="#seminars"
              >{{ site.hero.secondary }} <span aria-hidden="true">→</span></a
            >
          </div>
        </div>
        <SystemDiagram />
      </div>
      <div class="container hero-bottom">
        <span>{{ site.fullName }}</span
        ><a href="#about" aria-label="Learn about CPS-HCPS Research"
          >Explore the connections <span aria-hidden="true">↓</span></a
        >
      </div>
    </section>

    <section
      id="about"
      class="section about-section container"
      tabindex="-1"
      aria-labelledby="about-heading"
    >
      <SectionHeading v-bind="site.about" heading-id="about-heading" />
      <div class="about-body">
        <p class="lead">{{ site.about.introduction }}</p>
        <p v-for="paragraph in site.about.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
        <blockquote>{{ site.about.question }}</blockquote>
      </div>
    </section>

    <section
      id="research"
      class="section research-section"
      tabindex="-1"
      aria-labelledby="research-heading"
    >
      <div class="container">
        <SectionHeading v-bind="site.research" heading-id="research-heading" />
        <div class="research-grid">
          <ResearchCard
            v-for="(area, index) in researchAreas"
            :key="area.id"
            :area="area"
            :index="index"
          />
        </div>
      </div>
    </section>

    <section
      id="seminars"
      class="section seminars-section container"
      tabindex="-1"
      aria-labelledby="seminars-heading"
    >
      <div class="seminar-intro">
        <SectionHeading v-bind="site.seminars" heading-id="seminars-heading" />
        <div class="reading-motif" aria-hidden="true">
          <span>Read.</span><span>Question.</span><span>Connect.</span>
          <div>MODEL → REASON → UNDERSTAND</div>
        </div>
      </div>
      <div class="seminar-list">
        <article
          v-for="(seminar, index) in seminars"
          :key="seminar.id"
          class="seminar-card"
        >
          <div class="seminar-meta">
            <span>SEMINAR / 0{{ index + 1 }}</span
            ><span class="badge">{{ seminar.status }}</span>
          </div>
          <h3>{{ seminar.title }}</h3>
          <p>{{ seminar.description }}</p>
          <p class="seminar-focus">{{ seminar.focus }}</p>
          <a v-if="seminar.href" class="text-link" :href="seminar.href"
            >Visit seminar repository <span aria-hidden="true">↗</span></a
          >
          <span v-else class="quiet-note">Details will be published here.</span>
        </article>
      </div>
    </section>

    <section
      id="resources"
      class="section resources-section"
      tabindex="-1"
      aria-labelledby="resources-heading"
    >
      <div class="container">
        <div class="resources-intro">
          <SectionHeading
            v-bind="site.resources"
            heading-id="resources-heading"
          />
          <p class="resource-note">{{ site.resources.note }}</p>
        </div>
        <div class="resource-list">
          <a
            v-for="resource in resources"
            :key="resource.href"
            :href="resource.href"
            class="resource-row"
            ><div>
              <p class="eyebrow">{{ resource.category }}</p>
              <h3>{{ resource.title }}</h3>
              <p>{{ resource.description }}</p>
            </div>
            <span class="resource-arrow" aria-hidden="true">↗</span></a
          >
        </div>
      </div>
    </section>

    <section
      id="publications"
      class="section publications-section container"
      tabindex="-1"
      aria-labelledby="publications-heading"
    >
      <SectionHeading
        v-bind="site.publications"
        heading-id="publications-heading"
      /><PublicationList />
    </section>

    <section
      id="contact"
      class="contact-section"
      tabindex="-1"
      aria-labelledby="contact-heading"
    >
      <div class="container contact-inner">
        <div>
          <p class="eyebrow">{{ site.contact.eyebrow }}</p>
          <h2 id="contact-heading">{{ site.contact.title }}</h2>
          <p>{{ site.contact.description }}</p>
        </div>
        <a class="button button-light" :href="site.github"
          >{{ site.contact.action }} <span aria-hidden="true">↗</span></a
        >
      </div>
    </section>
  </main>
  <footer class="site-footer container">
    <div>
      <a class="footer-brand" href="#home">{{ site.name }}</a>
      <p>{{ site.footer }}</p>
    </div>
    <a class="text-link" href="#home"
      >Back to top <span aria-hidden="true">↑</span></a
    >
  </footer>
</template>
