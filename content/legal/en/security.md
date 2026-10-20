---
title: Security
updated: "2026-10-15"
---

# Security

Last updated 15 October 2026

Reliable is used by lawyers working on client matters. This page describes how we protect the data in the service.

## What the service contains

The search indexes contain only public legal sources. Customer data is never added to the search indexes and never shared between customers. The data we hold about customers is user accounts, sign-in logs, usage data, search text and whatever users save in their projects.

## Search text

Each user decides whether their searches are stored, and can switch it off in the service. A customer can also switch storage off for all its users. Stored search text has no name, e-mail address or user ID attached, is deleted or anonymised automatically after at most 90 days, and is not used to train generative AI models.

Search is run by models in our own Azure environment. Search text is not sent to external AI providers.

## Hosting and data location

The service runs on Microsoft Azure, and sign-in is handled by Microsoft Entra ID. All customer data is stored and processed within the EU/EEA. We run no servers of our own, and customer data is never stored on laptops or removable media.

## Encryption

All traffic is encrypted, both between the user and the service and within the hosting environment. Data is encrypted at rest.

## Access control

Only a small number of named people at Reliable have access to customer data, all with multi-factor authentication and only the access they need. Users see only their own projects and projects that colleagues in the same organisation have shared with them.

## Development

Code changes are reviewed and tested before release, and a new version can be rolled back quickly. Customer data stays in the production environment and is never copied to development environments.

## Backups and recovery

Data is backed up automatically and can be restored. We have written business continuity, crisis management and disaster recovery plans, which are reviewed regularly.

## Incidents

We have a written procedure for handling security incidents. Affected customers are notified without undue delay and kept informed until the incident is closed.

## Reviews and certifications

We carry out regular internal security reviews of code, hosting environment, access and third-party components. Reliable AI holds no certifications of its own. Our hosting platform, Microsoft Azure, is certified to standards including ISO/IEC 27001 and SOC 2.

## Documentation

For customers and procurement processes, we can provide further security documentation and answer vendor questionnaires. See also the [data processing agreement](/en/legal/data-processing-agreement) and [sub-processors](/en/legal/subprocessors).

## Reporting vulnerabilities

If you have found a possible vulnerability, please contact us at hei@reliableai.no. We will respond as quickly as we can.
