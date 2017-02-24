#!/bin/bash

FONT_SIZE=80
FONT_FAMILY=Monaco
STYLE=molokai
# STYLE=monokai
SYNTAX=js
OUTPUT=rtf

while getopts ":s:S:K" OPT; do
  case $OPT in
    s)
      STYLE="$OPTARG"
      shift 2
      ;;
    S)
      SYNTAX="$OPTARG"
      shift 2
      ;;
    K)
      FONT_SIZE="$OPTARG"
      shift 2
      ;;
    \?)
      exit 1
      ;;
  esac
done

FILENAME="$1"

if [[ -z "$FILENAME" ]]; then
  >&2 echo 'Please supply filename'
  exit 1
fi

highlight -s "$STYLE" -O "$OUTPUT" -S "$SYNTAX" -K "$FONT_SIZE" -k "$FONT_FAMILY" "$FILENAME" | tr -d '\n' | pbcopy
# pygmentize -f "$OUTPUT" -O "style=$STYLE,fontface=$FONT_FAMILY,fontsize=$FONT_SIZE" "$FILENAME" | pbcopy
