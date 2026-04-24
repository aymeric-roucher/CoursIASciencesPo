"""Estimate spoken duration of a markdown script at a standard lecture debit.

Usage:
    python timer.py path/to/script.md
    python timer.py path/to/script.md --wpm 140

A standard English lecture delivery is roughly 130-150 words per minute.
We default to 140 wpm, which matches a calm, lively lecture pace in English.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

DEFAULT_WPM = 140


_CODE_FENCE_RE = re.compile(r"```.*?```", re.DOTALL)
_INLINE_CODE_RE = re.compile(r"`[^`]*`")
_IMAGE_RE = re.compile(r"!\[[^\]]*\]\([^)]*\)")
_LINK_RE = re.compile(r"\[([^\]]+)\]\([^)]*\)")
_HTML_TAG_RE = re.compile(r"<[^>]+>")
_HEADING_RE = re.compile(r"^#{1,6}\s+", re.MULTILINE)
_BULLET_RE = re.compile(r"^\s*[-*+]\s+", re.MULTILINE)
_NUMBERED_RE = re.compile(r"^\s*\d+\.\s+", re.MULTILINE)
_EMPHASIS_RE = re.compile(r"[*_]{1,3}")
_MULTISPACE_RE = re.compile(r"\s+")


def strip_markdown(text: str) -> str:
    """Remove markdown syntax so only spoken words remain."""
    text = _CODE_FENCE_RE.sub(" ", text)
    text = _INLINE_CODE_RE.sub(" ", text)
    text = _IMAGE_RE.sub(" ", text)
    text = _LINK_RE.sub(r"\1", text)
    text = _HTML_TAG_RE.sub(" ", text)
    text = _HEADING_RE.sub("", text)
    text = _BULLET_RE.sub("", text)
    text = _NUMBERED_RE.sub("", text)
    text = _EMPHASIS_RE.sub("", text)
    text = _MULTISPACE_RE.sub(" ", text)
    return text.strip()


def count_words(text: str) -> int:
    clean = strip_markdown(text)
    if not clean:
        return 0
    return len(clean.split())


def estimate_duration(text: str, wpm: int = DEFAULT_WPM) -> tuple[int, float]:
    """Return (word_count, minutes) for the given markdown text."""
    if wpm <= 0:
        raise ValueError(f"wpm must be positive, got {wpm}")
    words = count_words(text)
    minutes = words / wpm
    return words, minutes


def format_duration(minutes: float) -> str:
    total_seconds = int(round(minutes * 60))
    h, remainder = divmod(total_seconds, 3600)
    m, s = divmod(remainder, 60)
    if h:
        return f"{h}h{m:02d}m{s:02d}s"
    return f"{m}m{s:02d}s"


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Estimate spoken duration of a markdown script.")
    parser.add_argument("path", help="Path to a markdown (or plain text) script")
    parser.add_argument("--wpm", type=int, default=DEFAULT_WPM, help=f"Words per minute (default {DEFAULT_WPM})")
    args = parser.parse_args(argv)

    text = Path(args.path).read_text(encoding="utf-8")
    words, minutes = estimate_duration(text, wpm=args.wpm)
    print(f"File      : {args.path}")
    print(f"Words     : {words}")
    print(f"Pace      : {args.wpm} wpm")
    print(f"Duration  : {format_duration(minutes)} ({minutes:.1f} min)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
