# Usage Guide

This document explains how to use the AI coding guidelines in `AGENTS.md` alongside the `/blog` skill to compose portfolio blog posts and series.

---

## Quick Start

When creating a blog post, invoke the `/blog` skill:

```
/blog <topic or title>
```

The skill will handle file creation and frontmatter. The guidelines in `AGENTS.md` ensure quality execution.

---

## How AGENTS.md Enhances Blog Writing

### Think Before Writing

Before drafting content, clarify:
- **Target category** - Which category applies? (DevEx, DevOps, Kubernetes, etc.)
- **Post type** - Is this a Medium republication, YouTube content, presentation, or general post?
- **Series scope** - Is this a single post or part of a series?
- **Audience** - Who is this written for?

### Simplicity in Content

- Write concisely. Prefer short paragraphs over long blocks.
- One idea per section. Don't bury key points.
- No speculative content - only write what you know or can verify.
- If explaining a complex topic, break it into numbered steps.

### Surgical Edits

When revising existing posts:
- Don't rephrase working content just for style.
- Match the existing tone and structure of the post.
- Only fix what needs fixing.

### Goal-Driven Execution

For blog posts, define success criteria:

| Task | Success Criteria |
|------|------------------|
| New post | Frontmatter complete, content follows pattern, draft ready |
| Series post | Consistent frontmatter, clear arc across posts |
| Medium republication | Notice block added, TLDR present, original link included |

---

## Blog Post Workflow

```
1. /blog <topic>              → invoke skill
2. Clarify category/series    → think before writing
3. Create file                → surgical changes
4. Draft content              → simplicity first
5. Add frontmatter            → goal-driven
6. Set draft: true            → review gate
```

### Before Writing - Ask These Questions

1. **What type of post is this?**
   - Medium republication → add notice block
   - YouTube → embed video
   - Presentation → embed slides

2. **Is this part of a series?**
   - Yes → use `-1`, `-2` suffix, plan arc across posts
   - No → standalone post

3. **What's the target length?**
   - Lightning talk summary → concise, 500-800 words
   - Deep dive → comprehensive, 1500+ words

4. **What's the call to action?**
   - End with engagement prompt (comments, social share, etc.)

### While Writing - Apply Core Principles

- **Think before coding** (writing): Outline first, then expand
- **Simplicity first**: Cut filler words, redundant phrases
- **Surgical changes**: Edit only what needs editing
- **Goal-driven**: Verify frontmatter completeness before finishing

---

## Series Posts

For multi-part series:

1. **Plan the arc** - Define what each post will cover
2. **Use consistent naming** - `topic-1.md`, `topic-2.md`, etc.
3. **Cross-link** - Add references to previous/next posts
4. **Share tags** - Same tags across the series for discoverability

Example series frontmatter consistency:

```yaml
# Post 1
title: "Building Production-Ready Kubernetes: Part 1 - Cluster Design"
categories: ["Kubernetes", "DevOps"]
tags: ["Kubernetes", "Production Readiness", "DevOps"]
series: "Production Kubernetes"  # if using series frontmatter

# Post 2
title: "Building Production-Ready Kubernetes: Part 2 - Networking"
categories: ["Kubernetes", "DevOps"]
tags: ["Kubernetes", "Production Readiness", "DevOps"]
series: "Production Kubernetes"
```

---

## Content Quality Checklist

Before marking a draft complete:

- [ ] Frontmatter complete (title, meta_title, description, date, categories, tags)
- [ ] SEO fields populated (meta_title, description)
- [ ] Appropriate content pattern applied (Medium notice, YouTube embed, etc.)
- [ ] TLDR present for posts over 1000 words
- [ ] Code examples have language specified
- [ ] Call-to-action at end
- [ ] No placeholder text or [TODO] items
- [ ] Featured image set (or reminder added)

---

## Related Files

- `AGENTS.md` - Full AI coding guidelines
- `.agent/skills/blog/SKILL.md` - Blog post creation skill reference
- `.github/workflows/main.yml` - CI/CD configuration