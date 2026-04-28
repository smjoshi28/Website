/* ============================================================
   SMIT JOSHI — PORTFOLIO  |  script.js
   ============================================================ */

/* ── PROJECT DATA ──────────────────────────────────────────*/
const projects = [
  {
    title:     'Production-Ready EKS Deployment',
    subtitle:  'Kubernetes Infrastructure on AWS',
    desc:      'Provisioned a production Amazon EKS cluster using Terraform with a custom VPC, private subnets, NAT Gateways, and IAM roles. Kubernetes manifests for Deployments, Services, Ingress, ConfigMaps, and HPA. GitHub Actions CI/CD pipeline with Trivy scanning and CloudWatch Container Insights for full observability.',
    github:    'https://github.com/smjoshi28/eks-deployment',
    points:    [
      'Terraform-provisioned EKS cluster with custom VPC — full setup in under 10 minutes from scratch',
      'HPA configured to auto-scale from 1 → 5 replicas under simulated load',
      'GitHub Actions: build → Trivy scan → deploy triggered on every git push',
      'CloudWatch Container Insights reduced failure diagnosis to under 2 minutes',
      'Private subnets and NAT Gateways following AWS Well-Architected principles',
    ],
    challenge: 'Connecting CI/CD to a private EKS cluster without exposing it publicly. Solved using IAM OIDC federation so the GitHub Actions runner assumes a role directly — no static credentials, cluster stays fully private.',
    meta: [
      { key:'Status',      val:'Completed', cls:'completed' },
      { key:'Type',        val:'Cloud / DevOps' },
      { key:'Deploy time', val:'< 10 min' },
    ],
    techs: ['Terraform','Amazon EKS','Kubernetes','GitHub Actions','CloudWatch','Docker','Trivy','IAM','VPC'],
  },
  {
    title:     'DevSecOps CI/CD Pipeline',
    subtitle:  'Security-First Automated Delivery',
    desc:      'Built a GitHub Actions pipeline with SonarCloud static analysis and Trivy container scanning on every pull request. Automated deployment blocking on high-severity findings prevents vulnerable images from ever reaching Amazon ECR. Branch protection rules enforce the policy at the repo level.',
    github:    'https://github.com/smjoshi28/devsecops-pipeline',
    points:    [
      'SonarCloud + Trivy scanning on every PR — caught 3 high-severity vulnerabilities before merge',
      'Automated deployment block on any high-severity finding — zero insecure images reach ECR',
      'Docker builds and ECR pushes fully automated — delivery reduced from 10 manual steps to zero-touch',
      'Branch protection rules enforced — no direct pushes to main without a passing pipeline',
    ],
    challenge: 'Trivy DB downloads were slowing the pipeline by 2+ minutes per run. Solved by caching the Trivy vulnerability DB between runs in GitHub Actions cache, cutting scan time from ~3 min to under 40 seconds.',
    meta: [
      { key:'Status',       val:'Completed', cls:'completed' },
      { key:'Type',         val:'DevSecOps / CI/CD' },
      { key:'Vulns blocked', val:'3 high-severity' },
    ],
    techs: ['GitHub Actions','Docker','Trivy','SonarCloud','Amazon ECR','Bash','IAM'],
  },
  {
    title:     'Three-Tier Web Application',
    subtitle:  'Modular Multi-Environment AWS Architecture',
    desc:      'Modular 3-tier AWS architecture (web / application / database) using Terraform with separate staging and production workspace configurations. ALB and Auto Scaling Groups handle the application tier. RDS kept fully private behind security groups with a bastion host for admin access.',
    github:    'https://github.com/smjoshi28/three-tier-aws',
    points:    [
      'Modular Terraform — reused across staging and production, cutting config duplication by ~60%',
      'Full environment provisioned in under 5 minutes using terraform apply across modules',
      'ALB + Auto Scaling Groups maintaining availability under variable traffic load',
      'RDS fully private — accessible only through a bastion host inside the VPC',
      'Separate Terraform workspaces with isolated remote state on S3 + DynamoDB locking',
    ],
    challenge: 'Managing state isolation between staging and production without duplicating module code. Solved using Terraform workspaces with environment-specific .tfvars files and a shared S3 backend with DynamoDB state locking to prevent concurrent apply conflicts.',
    meta: [
      { key:'Status',           val:'Completed', cls:'completed' },
      { key:'Type',             val:'Cloud Infrastructure' },
      { key:'Config reduction', val:'~60%' },
    ],
    techs: ['Terraform','AWS','ALB','Auto Scaling','RDS','VPC','EC2','S3','DynamoDB'],
  },
  {
    title:     'AWS Cost Spike Alert System',
    subtitle:  'Serverless Billing Monitor',
    desc:      'Serverless Lambda function written in Python (Boto3) that checks AWS billing metrics daily via CloudWatch and fires SNS alerts when costs exceed a configurable threshold. IAM execution role scoped to minimum required permissions. Runs entirely within AWS Free Tier limits at zero infrastructure cost.',
    github:    'https://github.com/smjoshi28/aws-cost-alert',
    points:    [
      'Lambda + Boto3 checking billing metrics daily — caught a simulated $12 overage within 24 hours',
      'SNS alerts fire automatically on threshold breach — no manual billing checks needed',
      'IAM execution role scoped to minimum permissions across Lambda, CloudWatch, and SNS',
      'Custom CloudWatch metric math for cost trend calculations beyond standard billing metrics',
      '$0 infrastructure cost — runs entirely within AWS Free Tier limits',
    ],
    challenge: 'AWS billing metrics have a 24-hour reporting delay and are only available in us-east-1. Solved by explicitly targeting that region in the Lambda client config and adding a time-offset buffer in the threshold logic to avoid false-positive alerts from reporting lag.',
    meta: [
      { key:'Status',      val:'Completed', cls:'completed' },
      { key:'Type',        val:'Serverless / FinOps' },
      { key:'Infra cost',  val:'$0 (Free Tier)' },
    ],
    techs: ['AWS Lambda','CloudWatch','SNS','Python','Boto3','IAM','Cost Explorer'],
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