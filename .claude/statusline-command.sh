#!/usr/bin/env bash
input=$(cat)

model=$(echo "$input" | jq -r '.model.display_name // "unknown"')
input_tokens=$(echo "$input" | jq -r '.context_window.total_input_tokens // 0')
output_tokens=$(echo "$input" | jq -r '.context_window.total_output_tokens // 0')
window_size=$(echo "$input" | jq -r '.context_window.context_window_size // 0')

total_consumed=$((input_tokens + output_tokens))

if [ "$window_size" -gt 0 ]; then
  pct=$(echo "$input" | jq -r '.context_window.used_percentage // empty')
  if [ -n "$pct" ]; then
    printf "%s | %d/%d (%.0f%%)" "$model" "$total_consumed" "$window_size" "$pct"
  else
    printf "%s | %d/%d" "$model" "$total_consumed" "$window_size"
  fi
else
  printf "%s | %d tokens" "$model" "$total_consumed"
fi