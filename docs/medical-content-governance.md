# KYP medical content governance

The content-lock system protects the byte-level integrity of the canonical KYP medical data files. It is intentionally not a claim that every clinical statement is current or correct.

For future clinical content changes, maintain review metadata alongside the change request:

- audience
- evidence level
- last clinical review date
- reviewer identity/role
- clinical disclaimer
- urgent/emergency guidance status

Do not modify locked medical content merely to add governance metadata. Keep governance metadata in non-locked documentation or a dedicated registry so the content-lock baseline continues to detect unexpected changes to medical source files.

Any clinical-content change should include:
1. the source/reference used;
2. the intended audience;
3. the date reviewed;
4. the reviewer;
5. focused content tests where applicable;
6. a content-lock update only when the medical source change is intentional and reviewed.
