#!/bin/bash
# from vercel blog
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
# don't build when changes concern 'staging' branch
if [[ "$VERCEL_GIT_COMMIT_REF" != "staging" ]]; then
# Proceed with the build
echo "✅ - Build can proceed"
exit 1
else
# Don't build
echo "🛑 - Build cancelled"
exit 0
fi