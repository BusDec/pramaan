# Pramaan

SAP audit and implementation portfolio of [Nirmana ERP](https://nirmanaerp.com).

**Live target:** https://pramaan.nirmanaerp.com/

## Pages

- `/` — portfolio overview: audit, implementation and assurance
- `/audit` — SAP PM audit pack: 20 checks, 13 domains, evidence, findings and remediation
- `/method` — 28-week SAP Activate-aligned implementation method for FI, CO, PA, OM, time and payroll
- `/pilot` — customer-connect and pilot request page
- `/privacy` — privacy notice for the pilot form

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

The static export is written to `out/`.

## Contact

Dr. Santosh K Behera · [pilot@nirmanaerp.com](mailto:pilot@nirmanaerp.com)

## Downloads

- `public/docs/pramaan-s4hana-implementation-guide.pdf`
- `public/docs/sap-pm-implementation-handout.pdf`

## Scope

The audit pack runs on a deterministic synthetic dataset. The score, findings and evidence drill are computed; no SAP system is called. The site is a demonstration, not an SAP-certified audit.

## Deploy

The GitHub Pages workflow builds the static export. The custom domain is `pramaan.nirmanaerp.com`; DNS must point the subdomain at GitHub Pages before the site is live.
