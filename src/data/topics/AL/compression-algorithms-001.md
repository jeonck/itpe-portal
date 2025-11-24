---
id: compression-algorithms-001
title: 압축 알고리즘 (Huffman, LZW)
category: technical-focus
subcategory: 알고리즘
subjectCategories:
  - AL
difficulty: advanced
certifications:
  - computer-systems
keywords:
  - Huffman Coding
  - LZW
  - Data Compression
  - Lossless
  - Entropy Encoding
importance: 4
relatedTopics:
  - greedy-algorithm-001
  - data-structures-001
trends:
  - Neural Compression
  - Video Compression (AV1)
tags:
  - '2025'
---

# 정의
데이터를 효율적으로 저장하고 전송하기 위해 크기를 줄이는 압축 알고리즘입니다.

## 특징
- Lossless (무손실): 원본 완전 복원, Lossy (손실): 일부 손실 허용
- Huffman Coding: 빈도 기반 가변 길이 인코딩, Greedy + Priority Queue
- 동작: 빈도 계산 → Huffman Tree 구축 → 코드 할당
- 빈도 높은 문자 → 짧은 코드, 빈도 낮은 문자 → 긴 코드
- LZW (Lempel-Ziv-Welch): 사전 기반, 반복 패턴 압축, GIF/TIFF 사용
- RLE (Run-Length Encoding): 연속 반복 데이터 압축, 간단
- Deflate: LZ77 + Huffman, ZIP/PNG 사용
- Entropy: 정보량 측정, Shannon Entropy, 이론적 압축 한계
- 활용: 파일 압축 (ZIP, 7z), 이미지 (JPEG, PNG), 동영상 (H.264, AV1)

## 최신 트렌드
- Neural Compression
- Video Compression (AV1)
