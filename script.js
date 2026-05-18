/* ============================================================
   SMIT JOSHI — PORTFOLIO  |  script.js
   ============================================================ */

/* ── PROJECT DATA ──────────────────────────────────────────*/
const projects = [
  {
    title:     'MERN on EKS: Full-Cycle DevOps & GitOps',
    subtitle:  'EKS · Terraform · Jenkins · ArgoCD · Prometheus · Grafana · Loki',
    desc:      'Provisioned a three-tier MERN stack (React, Node.js, MongoDB) on AWS EKS using Terraform and Helm, eliminating manual configuration and enabling fully reproducible infrastructure. Automated CI/CD with Jenkins and ArgoCD GitOps sync, with SonarQube quality gates blocking PRs failing coverage thresholds. Full-stack observability via Prometheus, Grafana, and Loki with traffic routed through Route 53.',
    github:    'https://github.com/smjoshi28/mern-eks-gitops',
    points:    [
      'Terraform + Helm provisioned EKS cluster — fully reproducible infrastructure from a single config file',
      'Jenkins CI/CD with ArgoCD GitOps sync — SonarQube quality gate automatically blocks failing PRs before merge',
      'Prometheus + Grafana + Loki observability stack resolving pod-level resource visibility and log aggregation gaps',
      'Traffic routed through Route 53 for DNS-managed delivery across the stack',
      'HPA configured to auto-scale application tier under simulated load',
    ],
    challenge: 'Bridging the gap between Jenkins CI and ArgoCD GitOps without creating a split-brain deployment model. Solved by having Jenkins update a Helm values file in Git and letting ArgoCD detect and reconcile the change — keeping GitOps as the single source of truth while still triggering from Jenkins pipelines.',
    meta: [
      { key:'Status',      val:'Completed', cls:'completed' },
      { key:'Type',        val:'DevOps / GitOps' },
      { key:'Stack',       val:'MERN on EKS' },
    ],
    techs: ['Terraform','Amazon EKS','Kubernetes','Helm','Jenkins','ArgoCD','Prometheus','Grafana','Loki','SonarQube','Docker','MongoDB','Route 53'],
  },
  {
    title:     'DevSecOps CI/CD Pipeline on Multi-AZ EKS',
    subtitle:  'Security-First Automated Delivery on Multi-AZ EKS',
    desc:      'Architected a shift-left security pipeline on multi-AZ EKS integrating Trivy image scanning and SonarQube static analysis to intercept and block critical CVEs before any image reaches ECR. Jenkins webhooks trigger on PR/merge events with automated gates failing on any critical finding. Node interruption resilience validated by simulating AZ failures during testing.',
    github:    'https://github.com/smjoshi28/devsecops-eks-pipeline',
    points:    [
      'Trivy + SonarQube scanning on every build — critical CVEs blocked before reaching ECR',
      'Automated security gates on every Docker build — no vulnerable image reaches deployment without developer intervention',
      'GitHub webhooks wired to Jenkins for PR/merge-triggered pipelines',
      'Multi-AZ resilience validated — pods rescheduled correctly with no service interruption during node failure simulation',
      'Pipeline fails fast on any critical Trivy or SonarQube finding — enforced at the stage level',
    ],
    challenge: 'Ensuring the multi-AZ cluster actually rescheduled pods correctly under node failure — not just on paper. Solved by scripting controlled node interruptions during testing and watching Kubernetes reschedule pods across remaining AZs, confirming zero service interruption before declaring HA validated.',
    meta: [
      { key:'Status',       val:'Completed', cls:'completed' },
      { key:'Type',         val:'DevSecOps / CI/CD' },
      { key:'Deployment',   val:'Multi-AZ EKS' },
    ],
    techs: ['Jenkins','Amazon EKS','Trivy','SonarQube','Docker','Amazon ECR','GitHub','Kubernetes','IAM'],
  },
  {
    title:     'AWS Cloud Operations Automation Toolkit',
    subtitle:  'Python/Boto3 · Lambda · EC2 · S3 · IAM · CloudWatch · GitHub Actions',
    desc:      'Modular Boto3 toolkit covering EC2 schedule automation, S3 security audits, and IAM stale-key rotation — deployed as Lambda functions triggered by CloudWatch Events to eliminate recurring manual AWS ops tasks. Integrated into a GitHub Actions CI workflow that runs unit tests on every push, maintaining script reliability across all modules.',
    github:    'https://github.com/smjoshi28/Cloud-Operations-Automation-Toolkit-',
    points:    [
      'Modular Boto3 toolkit covering EC2 automation, S3 audits, and IAM key rotation — deployed as Lambda functions',
      'CloudWatch Events scheduling eliminates all recurring manual AWS ops tasks',
      'Automated stale-key detection and rotation enforcing least-privilege access on a scheduled basis',
      'GitHub Actions CI workflow runs unit tests on every push — catches regressions before Lambda deployment',
      'Each module independently deployable — toolkit scales without modifying existing functions',
    ],
    challenge: 'IAM stale-key rotation is high-risk — rotating the wrong key can lock out active services. Solved by building a dry-run mode that logs which keys would be rotated without acting, then cross-referencing against CloudTrail last-used timestamps before any rotation runs in production.',
    meta: [
      { key:'Status',      val:'Completed', cls:'completed' },
      { key:'Type',        val:'Cloud Automation / Ops' },
      { key:'Infra cost',  val:'$0 (Free Tier)' },
    ],
    techs: ['Python','Boto3','AWS Lambda','EC2','S3','IAM','CloudWatch','GitHub Actions'],
  },
  {
    title:     'Cloud FinOps: Automated Cost Anomaly Detection',
    subtitle:  'Serverless Cost Monitoring on AWS',
    desc:      'Engineered a serverless cost anomaly detector using AWS Budgets and Lambda (Boto3) that fires Slack and email alerts within minutes when daily spend deviates more than 20% from forecast — replacing end-of-day manual billing reviews. Automated daily budget monitoring by parsing Cost Explorer data by service and routing threshold breach alerts through SNS.',
    github:    'https://github.com/smjoshi28/aws-s3-lambda-cost',
    points:    [
      'AWS Budgets + Lambda fires Slack and email alerts within minutes of a 20%+ spend deviation',
      'Boto3 scripts parse Cost Explorer data by service — cost visibility surfaced in near real-time',
      'SNS routes threshold breach alerts to Slack and email — manual billing reviews eliminated',
      'Anomalies surface before end-of-day billing consolidation, enabling remediation before costs compound',
      '$0 infrastructure cost — runs entirely within AWS Free Tier limits',
    ],
    challenge: 'AWS Cost Explorer data has a reporting delay that caused false-positive anomaly alerts in early testing. Solved by adding a lookback buffer in the threshold logic and comparing against a rolling 7-day average rather than a single prior day, making the detector resilient to normal daily spend variance.',
    meta: [
      { key:'Status',      val:'Completed', cls:'completed' },
      { key:'Type',        val:'Serverless / FinOps' },
      { key:'Infra cost',  val:'$0 (Free Tier)' },
    ],
    techs: ['AWS Budgets','AWS Lambda','SNS','Python','Boto3','Cost Explorer','CloudWatch','IAM'],
  },
  {
    title:     'Cloud Resume Challenge',
    subtitle:  'Serverless Resume Website on AWS',
    desc:      'Production-style serverless resume website built on AWS using Infrastructure as Code (Terraform) and automated with CI/CD (GitHub Actions). Infrastructure has been intentionally torn down to optimize AWS costs — the entire environment is fully reproducible using Terraform.',
    github:    'https://github.com/smjoshi28/cloud-resume-challenge',
    points:    [
      'S3 static hosting + CloudFront CDN with OAC — no direct public S3 access, HTTPS enforced via ACM',
      'Lambda (Python) visitor counter with atomic DynamoDB UpdateItem — handles concurrent updates safely',
      'Dual GitHub Actions pipelines: frontend syncs to S3, backend runs Pytest + Moto then Terraform',
      'Fully Terraform-provisioned — Route 53, CloudFront, S3, Lambda, DynamoDB, IAM all version-controlled',
      'Solved CloudFront 403 OAC issue using AWS:SourceArn condition to restrict distribution access',
    ],
    challenge: 'Three distinct issues: CloudFront 403 errors from incorrect OAC bucket policy (fixed with SourceArn condition), Terraform state drift from manual AWS console changes (resolved with terraform import), and CORS errors blocking Lambda calls from the frontend (configured allowed origins in Terraform).',
    meta: [
      { key:'Status',    val:'Infra Torn Down', cls:'' },
      { key:'Type',      val:'Serverless / IaC' },
      { key:'Reproduce', val:'terraform apply' },
    ],
    techs: ['S3','CloudFront','Route 53','Lambda','DynamoDB','ACM','Terraform','GitHub Actions','Python','Pytest','Moto'],
  },
];

/* ── THEME TOGGLE ──────────────────────────────────────────*/
// FIX: wrap in DOMContentLoaded so elements exist before we query them
document.addEventListener('DOMContentLoaded', () => {
const html      = document.documentElement;
const themeBtn  = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const saved     = localStorage.getItem('sj-theme') || 'dark';
html.setAttribute('data-theme', saved);
themeIcon.textContent = saved === 'dark' ? '☀️' : '🌙';

themeBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('sj-theme', next);
  themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
});
});

/* ── NAVBAR SCROLL ─────────────────────────────────────────*/
document.addEventListener('DOMContentLoaded', () => {
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ── ACTIVE NAV ────────────────────────────────────────────*/
const navLinks = document.querySelectorAll('.nav-links a');
const secObs   = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { threshold: 0.35 });
document.querySelectorAll('section[id]').forEach(s => secObs.observe(s));

/* ── HAMBURGER ─────────────────────────────────────────────*/
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

function setMenu(open) {
  menuOpen = open;
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', !open);
  hamburger.setAttribute('aria-expanded', open);
}

hamburger.addEventListener('click', () => setMenu(!menuOpen));
document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', () => setMenu(false)));

/* ── SCROLL REVEAL ─────────────────────────────────────────*/
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    // Calculate stagger index among sibling .reveal elements only
    const siblings = Array.from(el.parentElement.querySelectorAll(':scope > .reveal'));
    const idx = siblings.indexOf(el);
    const delay = Math.max(0, idx) * 90;
    setTimeout(() => el.classList.add('in-view'), delay);
    revealObs.unobserve(el);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── TERMINAL TYPEWRITER ───────────────────────────────────*/
(function terminal() {
  const body = document.getElementById('termBody');
  if (!body) return;

  const seq = [
    { cmd: true,  text: 'terraform apply' },
    { cmd: false, text: 'Apply complete! Resources: 12 added.' },
    { cmd: true,  text: 'kubectl get pods' },
    { cmd: false, text: 'app-deploy   Running  5/5', green: true },
    { cmd: true,  text: 'gh run watch' },
    { cmd: false, text: '✓ Build  ✓ Scan  ✓ Deploy' },
  ];

  let si = 0, ci = 0;

  function render() {
    body.innerHTML = '';
    seq.slice(0, si).forEach(s => {
      const d = document.createElement('div');
      d.className = 'term-line' + (s.cmd ? '' : ' t-out');
      if (s.cmd) {
        d.innerHTML = '<span class="t-dim">$ </span><span class="t-cmd">' + s.text + '</span>';
      } else if (s.green) {
        const p = s.text.split('Running');
        d.innerHTML = p[0] + '<span class="t-green">Running</span>' + (p[1] || '');
      } else {
        d.textContent = s.text;
      }
      body.appendChild(d);
    });

    if (si < seq.length) {
      const cur = seq[si];
      const d = document.createElement('div');
      d.className = 'term-line' + (cur.cmd ? '' : ' t-out');
      const partial = cur.text.slice(0, ci);
      if (cur.cmd) {
        d.innerHTML = '<span class="t-dim">$ </span><span class="t-cmd">' + partial + '</span><span class="t-cursor">█</span>';
      } else {
        d.textContent = partial;
        const cur2 = document.createElement('span');
        cur2.className = 't-cursor';
        cur2.textContent = '█';
        d.appendChild(cur2);
      }
      body.appendChild(d);
    } else {
      const d = document.createElement('div');
      d.className = 'term-line';
      d.innerHTML = '<span class="t-dim">$ </span><span class="t-cursor">█</span>';
      body.appendChild(d);
    }
  }

  function tick() {
    if (si >= seq.length) {
      render();
      setTimeout(() => { si = 0; ci = 0; setTimeout(tick, 300); }, 3200);
      return;
    }
    const cur = seq[si];
    if (ci < cur.text.length) {
      ci++;
      render();
      setTimeout(tick, cur.cmd ? 65 : 18);
    } else {
      si++; ci = 0;
      render();
      setTimeout(tick, cur.cmd ? 440 : 140);
    }
  }

  setTimeout(tick, 700);
})();

/* ── MODAL ─────────────────────────────────────────────────*/
const overlay   = document.getElementById('modalOverlay');
const closeBtn  = document.getElementById('modalClose');

function openModal(idx) {
  const p = projects[idx];
  document.getElementById('modalTitle').textContent    = p.title;
  document.getElementById('modalSubtitle').textContent = p.subtitle;
  document.getElementById('modalDesc').textContent     = p.desc;
  document.getElementById('modalGithub').href          = p.github;
  document.getElementById('modalChallenge').textContent = p.challenge;
  document.getElementById('modalPoints').innerHTML = p.points.map(pt => `<li>${pt}</li>`).join('');
  document.getElementById('modalMeta').innerHTML = p.meta.map(m =>
    `<div class="modal-meta-row"><span class="modal-meta-key">${m.key}:</span><span class="modal-meta-val ${m.cls||''}">${m.cls==='completed'?'● ':''} ${m.val}</span></div>`
  ).join('');
  document.getElementById('modalTechs').innerHTML = p.techs.map(t => `<span>${t}</span>`).join('');
  // reset scroll
  document.querySelector('.modal-scroll').scrollTop = 0;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
  document.addEventListener('keydown', trapFocus);
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', trapFocus);
}

document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('click', () => openModal(parseInt(card.dataset.project)));
  // keyboard accessibility
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(parseInt(card.dataset.project)); } });
});

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal(); });

/* ── BACK TO TOP ───────────────────────────────────────────*/
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── FOCUS TRAP IN MODAL ───────────────────────────────────*/
function trapFocus(e) {
  const modal = document.getElementById('modal');
  const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  if (e.key !== 'Tab') return;
  if (e.shiftKey) {
    if (document.activeElement === first) { e.preventDefault(); last.focus(); }
  } else {
    if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
  }
}

/* ── SMOOTH SCROLL ─────────────────────────────────────────*/
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 68, behavior: 'smooth' });
    if (menuOpen) setMenu(false);
  });
});

}); // end DOMContentLoaded