---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

[PDF Download](../files/cv.pdf)

{% include base_path %}

## Education
* PhD in Computer Science - _University of Cambridge_ 
* MS in Aerospace Engineering - _University of Arizona_ 
* BS in Honors Computer Science -  _University of California, Santa Cruz_

## Work Experience
* University of Macau - _Assistant Professor_
* University of Cambridge - _Adjunct Lecturer_
* Anyscale - _Contract Software Engineer (Reinforcement Learning)_
* Toshiba Research Europe - _Graduate Research Intern_
* NASA Jet Propulsion Lab - _Graduate Robotics Research Intern_
* Meta - _Production Engineer II_
  
## Skills

### Core Competencies
  * Deep Learning, Reinforcement Learning, Sequence Modeling, Multi-Agent Reinforcement Learning, Robotics

### Models
  * World Models, RNNs, Transformers, Generative Models, Variational Models

### ML Frameworks
  * JAX, PyTorch, Numpy, Equinox

### Programming Languages
  * Python

### Software
  * SolidWorks, Linux, ROS2, MATLAB, Git



## Publications
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
## Talks
{% if site.talk_category %}
  {% for category in site.talk_category %}
### {{ category[1].title }}
  <ul>{% for post in site.talks reversed %}
    {% if post.category != category[0] %}{% continue %}{% endif %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  {% endfor %}
{% else %}
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
{% endif %}
  
## Teaching
{% if site.teaching_category %}
  {% for category in site.teaching_category %}
### {{ category[1].title }}
  <ul>{% for post in site.teaching reversed %}
    {% if post.category != category[0] %}{% continue %}{% endif %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  {% endfor %}
{% else %}
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
{% endif %}

## Thesis Supervision
* Yutao Chen, PhD, *Deep Mixture Modeling with Natural Gradients*, Macau (2025–)
* Xiaoming Liu, PhD, *Offline Reinforcement Learning for Mobile Manipulation*, Macau (2025–)
* Wang Zekang, MS, *Evaluating and Rethinking Memory in RL*, Macau (2024–2026)
* He Zhe, MS, *Efficient Memory Diagnostic Benchmark and Parallelized RL*, Macau (2024–2026)
* Dulhan Jayalath, MPhil, *Reconstructing Markov States in Decentralised Multi-Agent RL*, Cambridge (2022–2023)
* Mark Li, Part II, *Intrinsically Go-Explore in Reinforcement Learning*, Cambridge (2023–2024)
* James Read, Part II, *Offworld SLAM*, Cambridge (2021–2022)

## Awards, Fellowships & Grants
* Funding Scheme for Research and Innovation (Co-Investigator) - _Macau FDCT_ (2025)
* Enhancement Programme - _University of Macau_ (2025)
* Startup Research Grant - _University of Macau_ (2025)
* 2nd Best Research Talk - _Jesus College Graduate Conference, University of Cambridge_ (2023)
* Graduate Research Studentship - _Toshiba Research_ (2021)
* Cum Laude - _University of California, Santa Cruz_ (2015)
  
## Service and Outreach
* Director, AI and Robotics Summer School, University of Macau (2026)
* Session Chair, IEEE Big Data Conference, Macau (2025)
* Faculty Affiliate, Moon Chun Memorial College, University of Macau (2025–2026)
* PhD Defense Committee, Sun Binbin, University of Macau (2025–2026)
* MS Thesis Examination Chair, Huanrong Liu, University of Macau (2026)
* MS Thesis Examination Chair, Ting Huang, University of Macau (2026)
* MS Thesis Examination Chair, Zhijia Tao, University of Macau (2026)
* MS Thesis Examination Chair, Leandro Schlosser Acosta, University of Macau (2025)
* MS Project Examiner, Artificial Intelligence, University of Macau (2025, 2026)
* BS Thesis Examiner, Artificial Intelligence, University of Macau (2026)
* Mentor, UC Santa Cruz (2023)
* Volunteer, Boys and Girls Club, Tucson (2018)

## Peer Review
* ICLR (2024–2026)
* ICML (2024–2026)
* NeurIPS (2024–2026)
* AAAI (2025)
* ICRA/RA-L (2020–2021)
* RSS (2024)
* CoRL (2026)
