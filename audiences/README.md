# קהלי LiveCoach למטא (חשבון Aviv Malka Ecom · act_359760337062556)

- `pull.py` מושך פיירברי + טוצ'אט ל-/tmp (PII נשאר מקומי).
- `score.py` מנקד כל ליד ומחלק ל-6 קהלים (/tmp/audiences.json).
- `sync_meta.py` יוצר/מרענן את הקהלים במטא (טלפון + מייל מגובבים SHA-256). מזהי הקהלים נשמרים ב-`meta_audiences.json` בלבד.
- `weekly.sh` מריץ את שלושתם. להוסיף ל-cron: `0 8 * * 0 /bin/bash "/Users/avivmalka/אקדא/audiences/weekly.sh" >> "/Users/avivmalka/אקדא/audiences/weekly.log" 2>&1`

הרצה ראשונה ידנית:
```
bash "/Users/avivmalka/אקדא/audiences/weekly.sh"
```
