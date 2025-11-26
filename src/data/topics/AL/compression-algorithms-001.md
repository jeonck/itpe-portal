---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: compression-algorithms-001
importance: 4
keywords:
- Huffman Coding
- LZW
- Data Compression
- Lossless
- Entropy Encoding
relatedTopics:
- greedy-algorithm-001
- data-structures-001
subcategory: 알고리즘
subjectCategories:
- AL
tags:
- '2025'
title: 압축 알고리즘 (Huffman, LZW)
trends:
- Neural Compression
- Video Compression (AV1)
---

# 정의
데이터를 효율적으로 저장하고 전송하기 위해 크기를 줄이는 압축 알고리즘 기술 기술.

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

## 절차
- Huffman Coding 절차: 1) 각 문자의 빈도수 계산 → 2) 빈도수 기반 우선순위 큐 생성 → 3) 가장 낮은 빈도 2개 노드를 꺼내 부모 노드 생성 → 4) 모든 노드가 하나의 트리가 될 때까지 반복 → 5) 트리 순회하며 각 문자에 이진 코드 할당 (왼쪽 0, 오른쪽 1) → 6) 할당된 코드로 원본 데이터 인코딩
- LZW 압축 절차: 1) 초기 사전에 단일 문자 등록 → 2) 입력 스트림에서 가장 긴 일치 문자열 찾기 → 3) 사전 인덱스 출력 → 4) 일치 문자열 + 다음 문자를 새 항목으로 사전에 추가 → 5) 입력 끝까지 반복
- LZW 압축 해제: 1) 초기 사전 복원 → 2) 인덱스를 읽어 문자열 출력 → 3) 이전 문자열 + 현재 문자열 첫 문자를 사전에 추가 → 4) 압축 데이터 끝까지 반복
- 압축률 평가: 압축률 = (원본 크기 - 압축 크기) / 원본 크기 × 100%

## 최신 트렌드
- Neural Compression
- Video Compression (AV1)