import re
import sys

title = sys.argv[1]

pattern = r"AFW-\d+"
if re.search(pattern, title):
    print("Valid – Jira ticket found")
    sys.exit(0)
else:
    print("Invalid – Missing AFW-<number>")
    sys.exit(1)